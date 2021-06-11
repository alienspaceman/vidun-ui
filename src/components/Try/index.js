import React, {Component} from 'react';
import { translate, Trans } from "react-i18next";

import {post} from "axios";
import {connect} from "react-redux";
import {ContainerMain,
    ScreenContainer,
    TVScreen,
    Answer,
    Panswer,
    Left,
    Right,
    QuestionWrapper,
    Question,
    QChar,
    QCharText,
    InputWrapper,
    Input,
    ButtonWrapper,
    ButtonCopy,
    ButtonReset,
    ButtonSubmit
} from "./TryElements"

require('dotenv').config();



function validate(value) {

  if (value !== '') {
    return true;
  } else {
    return false;
  }
}



class Try extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                description: ''
            },
            touched: false,
            valid: false,

            isLoading: false,
            result: null,
            text_copy: '',

            lang: this.props.match.params.locale
        };
    }

    isValid() {
        let isValid;
        const isTouched = this.state.touched;
        isTouched ? isValid = validate(this.state.formData.description) : isValid = false;
        this.setState({
          valid: isValid,
        });
  }
    handleFieldFocus = (evt) => {
    this.setState({ touched: true });
  }
    handleChange = (event) => {
            const value = event.target.value;
            const name = event.target.name;
            var formData = this.state.formData;
            formData[name] = value;
            this.setState({
                formData
            });
            this.isValid();
    };

    handleSendClick = (event) => {
        if (!this.state.valid) {
            event.preventDefault();
            return

        }
        const data = this.state.formData;


        let formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        formData.append("lang", this.state.lang);
        let config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
        this.setState({isLoading: true});
        post('http://' + process.env.REACT_APP_FLASK_APP_HOST + ':' + process.env.REACT_APP_FLASK_APP_PORT + '/inference', formData, config)
                .then(response => {
                    console.log(response.data)
                    this.setState({
                        result: response.data.result,
                        isLoading: false,
                        text_copy: response.data.result
                    });
                });

    };

    handleResetClick = (event) => {
        event.preventDefault();
         var formData = this.state.formData;
         formData['description'] = '';

        this.setState({result: null, isLoading: false, formData});
    }

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
      }

    render() {

        const { match, location, t, i18n } = this.props;

        const isLoading = this.state.isLoading;
        const textData = this.state.formData;
        const result = this.state.result;
        const touched = this.state.touched
        // console.log('Is Loading', isLoading)
        // console.log('Touched', touched)
        // console.log('Valid', this.state.valid)
        // console.log('Errored', !this.state.valid && this.state.touched)
        return (
            <>
                <ContainerMain>
                    <Left>
                        <QuestionWrapper>
                            <Question>{"> "}<Trans>What is a meaning of</Trans></Question>
                        </QuestionWrapper>

                        <InputWrapper>

                            <Input id="description-input"
                                   name="description"
                                   placeholder={t('write your dream')}
                                   isErrored={!this.state.valid && this.state.touched}
                                   onFocus={this.handleFieldFocus}
                                   onChange={this.handleChange}
                                   value={textData.description}
                            />

                            <QChar><QCharText>?</QCharText></QChar>

                        </InputWrapper>

                        <ButtonWrapper>
                            <ButtonSubmit disabled={isLoading}
                                    onClick={this.handleSendClick}><Trans>Submit</Trans></ButtonSubmit>
                            <ButtonReset onClick={this.handleResetClick}><Trans>Reset</Trans></ButtonReset>
                            <ButtonCopy  onClick={() => this.copyCodeToClipboard()}><Trans>Copy</Trans></ButtonCopy>
                        </ButtonWrapper>

                    </Left>

                    <Right>
                        <ScreenContainer>
                            <TVScreen isLoading={isLoading} result={result}>
                                <Answer  id="interpretation-output"
                                         isLoading={isLoading}
                                         result={result}
                                         >
                                      <Panswer  id="tocopy" contentEditable="true" disables={false}
                                                value={result} ref={(textarea) => this.textArea = textarea}/>

                                </Answer>
                            </TVScreen>
                        </ScreenContainer>
                    </Right>
                </ContainerMain>
            </>
        )
    }
}

Try = connect(
  state => ({
    location: state.routing.location
  }),
  null
)(Try);
export default translate("translations")(Try);