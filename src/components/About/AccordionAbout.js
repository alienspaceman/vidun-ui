import React from "react";
import styled, { css } from "styled-components";
import { translate, Trans } from "react-i18next";


export const Container = styled.main`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Section = styled.section`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const InnerSection = styled.div`
  position: relative;
  margin: 0;
  list-style: none;
 
  padding: 0.5rem;

`;

export const AccordionContainer = styled.div`  margin: 0;
  padding: 0;
  list-style: none;`;

export const AccordionInner = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  width: 100%;
  //border: 1px solid black;
  //border-radius: 4px;
`;

export const AccordionItem = styled.div`
  &:not(:last-child) {
    //border-bottom: 1px solid black;
  }
  
`;

export const AccordionTitle = styled.div`
  margin: 0;
  padding: 1rem 1rem 1rem 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  //-webkit-text-stroke: 1px black;
  color: black;
  font-weight: bold;
  font-size: calc(8px + 1vmin);
  
`;

export const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

export const AccordionContent = styled.p`
  margin: 0;
  padding: 0 0.5rem 1rem;
  height: auto;
  font-size: calc(8px + 1vmin);
`;


export const sampleAccordionData = [
  {
      title: <Trans>Item 1</Trans>,
    content:
     <Trans>General info</Trans>,
  },
  {
    title: <Trans>Item 2</Trans>,
    content:<Trans>Plans</Trans>,
  },
  {
    title: <Trans>Item 3</Trans>,
    content:<Trans>Questions</Trans>,
  },
  {
    title: <Trans>Item 4</Trans>,
    content:<Trans>Support</Trans>,
  },


];

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  accordionContent.map(({ title, content }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionTitle
        onClick={() => {
          setCurrentAccordion(i);
          setBodyHeight(refs[i].current.clientHeight);
          console.log(refs[i].current.clientHeight);
        }}
      >
        {title}
      </AccordionTitle>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ));



export default translate("translations")(AccordionItems);

