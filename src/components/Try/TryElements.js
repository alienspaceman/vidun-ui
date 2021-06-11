import styled from 'styled-components';
import backgroundImg from './signal.png';
import noisegif from './nosignal.gif';

export const ContainerMain = styled.div`{
      overflow: auto;
}`;

export const Panswer = styled.textarea`{
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
    }
    
    border: none;
    outline: none;
    
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    
    resize: none;

    background-color: rgba(0, 0, 0, 0);
    color: black;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: calc(60vh / 2 - 2vmax);
    height: calc(60vh / 2 - 2vmax);
    //height: 60%;
    margin-top: auto;
    margin-bottom: auto;
    word-break: break-word;
    line-break: strict;
    
    
    font-size: calc(6px + 1vmin);
    
    &:disabled {
    background: transparent;
    }
    &::selection {
    
    background: transparent;

}`;

export const Answer = styled.div`{
 
    z-index: 1;
    margin:0;
    display: flex;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    
    border-radius: 50% !important;
    width: calc(60vh / 2 - 2vmax);
    height: calc(60vh / 2 - 2vmax);
    
    
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    
    -webkit-font-smoothing: antialiased;
    opacity: ${(props) => !props.isLoading  && props.result? 1: 0};
}`;

export const ScreenContainer = styled.div`{
  width: calc(100vh / 2 - 4vmax);
  height: calc(100vh / 2 - 4vmax);
  border-radius: 50%;
  margin: auto;
}`;


export const TVScreen = styled.div`{
  overflow: auto;
  width: calc(100vh / 2 - 6vmax);
  height: calc(100vh / 2 - 6vmax);
  border-radius: 50%;
    border: 1px solid;
    margin: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
   &:before{
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: calc(60vh - 4vmax);

    
    content: "";
    position: absolute;
    z-index: 1;
   
    width: calc(100vh / 2 - 6vmax);
  height: calc(100vh / 2 - 6vmax);
    border-radius: 50%;
    border: 1px solid;
    
    //opacity: 1;
    opacity: ${(props) => !props.isLoading && !props.result? 1: 0};
    transition: opacity 1s;
}
   &:after {
    background: url(${noisegif}) no-repeat center;
   background-size: calc(56vh - 4vmax);
    content:"";
    position: absolute;

     width: calc(100vh / 2 - 6vmax);
  height: calc(100vh / 2 - 6vmax);
    border-radius: 50%;
    border: 1px solid;
    opacity: ${(props) => props.isLoading? 1: 0};
    transition: opacity 1s;

}

  
}`;


export const Left = styled.div`{
    position: absolute;
    top: 20%;
    bottom:30%;
    margin-top: auto;
    overflow: auto;

    width: calc(100vw/2);
    height: calc(100vh/2);

  float:left;
  
  @media screen and (max-aspect-ratio: 3/4) {
    top: 0;
    bottom:55%;
    width: 100%;
    height: 45%;
  }
            
}`;

export const Right = styled.div`{
  position: absolute;
  display: flex;
  margin-top: auto;
   overflow: auto;
    right: 0;
    top: 20%;
    bottom:30%;

  width: calc(100vw/2);
  height: calc(100vh/2);
  //margin-top: 10%;
  float: right;
  
  @media screen and (max-aspect-ratio: 3/4) {
    top: 0;
    bottom: 10%;
    width: 100%;
    height: 52%;
  
}}
`;

export const QuestionWrapper = styled.div`{
  //margin: 0.5rem;
  position: relative;
  //background: red;
  background: transparent;
  height: 33%;
  width: 100%;
  
    word-break: break-all; 
   @media screen and (max-aspect-ratio: 3/4) {
    
    width: 90%;
    height: 20%;
  }
  
}`;


export const Question = styled.p`{
  //line-height: (2*height - font-size);
  
 position: absolute;
  bottom: 0;
  margin: 0 0 0 0.25rem;
 
  
  
  font-size: calc(3vh + 1vmin);
  font-weight: normal;
  color: black;
  letter-spacing: -0.46px;
  -webkit-font-smoothing: antialiased;
  
  text-align: left;
  @media screen and (max-aspect-ratio: 3/4) {
    white-space: pre-line;
    margin: 0 0 0 0.25rem;
     font-size: calc(2vh + 1vmin);
  }
  
}`;

export const InputWrapper = styled.div`{
  display: flex;
  height:33%;
  width: 100%;
  justify-content: space-between;
    word-break: break-all;
   @media screen and (max-aspect-ratio: 3/4) {
    
    width: 100%;
    height: 33%;
  }
  
}`;

export const Input = styled.textarea`{
  
   border: ${({isErrored}) => (isErrored ? '1px solid red' : '1px solid grey')};
  margin-left: 2rem;
  margin-bottom: auto;
  margin-top: auto;
  resize: none;
  
  padding: 0.5rem;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;
  
  font-family: 'Roboto Regular', monospace;
  font-size: calc(1vh + 1vmin);
  font-weight: normal;
  
  
  
  letter-spacing: -0.46px;
  -webkit-font-smoothing: antialiased;
  width: 70%;
  height: 70%;
  //background: #a6a6a6;
  background: transparent;
  //padding: 0.25rem;
  
  //overflow: hidden;
    outline: none;
    //border: none;
   
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: blue;
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: blue;
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: blue;
    }
    :-moz-placeholder { /* Firefox 18- */
      color: blue;
    }
  
   @media screen and (max-aspect-ratio: 3/4) {
    
    width: 100%;
  }
  
}`;

export const QChar = styled.div`{
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70%;
  width: 20%;
}` ;

export const QCharText = styled.span` {
  display: table-cell;
  vertical-align: middle;
  color: blue;
  font-size: calc(8vh  +  1vmin);
}`;

export const ButtonWrapper = styled.div`{
  //position: relative;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 30%;
  width: 100%;

  @media screen and (max-aspect-ratio: 3/4) {
    //margin-top: 5%;
    width: 100%;
    height: 30%;
     
  }
  
 

}`;
export const ButtonSubmit = styled.button`{
  margin-top:auto;
  margin-bottom: auto;
  margin-left: 1.85rem;
  //background: greenyellow;
  background: #a7a7a7;
   height:30%;
  width: 20%;
  
  font-size: calc(4px + 1vmin);
  font-weight: normal;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.46px;
  
  ${(props) => !props.disabled? `&:hover {
    -webkit-text-stroke: 1px black;
  };
  cursor: pointer;`:"background: gray;" }
}`;

export const ButtonReset = styled.button`{
  //position: relative;
  //float: right;
  margin-top:auto;
  margin-bottom: auto;
  //background: hotpink;
  background: #a7a7a7;
   height:30%;
  width: 20%;
  
  font-size: calc(4px + 1vmin);
  font-weight: normal;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  
  cursor: pointer;
  
  letter-spacing: -0.46px;
  
  &:hover {
    -webkit-text-stroke: 1px black;
  }
}`;

export const ButtonCopy = styled.button`{
  //position: relative;
  //float: right;
  margin-right: 10%;
  margin-bottom: auto;
  margin-top: auto;
  //background: aqua;
  background: #a7a7a7;
  height: 30%;
  width: 20%;

  font-size: calc(4px + 1vmin);
  font-weight: normal;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  
  cursor: pointer;
  
  letter-spacing: -0.46px;
  
  &:hover {
    -webkit-text-stroke: 1px black;
  }
   &:focus{
    -webkit-text-stroke: 0px black;
  }
 
}`;