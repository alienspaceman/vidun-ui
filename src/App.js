import React from "react";
import {connect} from "react-redux";
import {Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from "./components/About";
import Try from "./components/Try";
import i18n from "./i18n";


import {createGlobalStyle} from "styled-components";
import PressStartTTF from "./fonts/PressStart2P-Regular.ttf";
import SourceCodeProMedium from "./fonts/SourceCodePro-Medium.ttf";
import styled from 'styled-components'




const lang = i18n.language;
const changeLanguage = lng => {
  i18n.changeLanguage(lng);
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 0 0 calc(100vw - 100%);
    padding: 0;
    height: 100%;
    font-family: 'Roboto Regular', monospace;
    overflow: auto;
  }
  @font-face {
    font-family: 'Press Start 2P';
    src: url(${PressStartTTF}) format('truetype');
  }
  @font-face {
    font-family: 'Source Code Pro Medium';
    src: url(${SourceCodeProMedium}) format('truetype');
    font-style: normal;
  }
`;


export const Container = styled.div`{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}`

export const Content = styled.div`{
   
  position: relative;
  width: 100%;
  height:100%;
  display: flex;
  flex:1;
}`



let App = ({ match, location }) => {
  console.log("location", location);
  console.log("match", match);


  if (lang !== match.params.locale) {
    changeLanguage(match.params.locale);
  }
  return (
    <>
        <Container>
          <GlobalStyle/>

          <Navbar match={match} location={location}/>
            <Content>
              <Switch>
                <Route path={`${match.url}/about`} component={() => <About match={match} />} />
                <Route path={`${match.url}/`} component={() => <Try match={match} /> } />
              </Switch>
            </Content>
            <Footer/>
        </Container>
    </>
  );
};

App = connect(
  state => ({
    location: state.routing.location
  }),
  null
)(App);

export default App;