import React,{ useState, useRef }from 'react';
import { translate, Trans } from "react-i18next";
import styled from "styled-components";
import {NavLink as Link  } from "react-router-dom";
import AccordionItems from "./AccordionAbout";
import {Container, Section, AccordionContainer, AccordionInner, InnerSection, sampleAccordionData} from "./AccordionAbout";


export const ContainerMain = styled.div`{
  width: 100%;
  display: inline-block;
}`;

export const NavBar = styled.nav`{
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  height: 43px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
}
`;
export const NavItem = styled.li`{
  margin: 0 0 0.5rem 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 44px;
  text-align: center;
  //padding: 0 2rem;
  //border-bottom: 1px solid;
}
`;




export const NavLink = styled(Link)`{
  margin-left: 0.5rem;
  //margin-top: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Roboto Regular', monospace;
  font-size: calc(8px + 1vmin);
  font-weight: normal;
  color: black;
  letter-spacing: -0.46px;
  -webkit-font-smoothing: antialiased;
  //width: 140px;
  
  
  &.active {
    -webkit-text-stroke: 1px black;
    color: black;
  }
  
  &:hover {
    -webkit-text-stroke: 1px black;
    color: black;
  }
  
}`;

function AccordionAbout() {
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [bodyHeight, setBodyHeight] = useState();

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const item5 = useRef(null);

  const refs = [item0, item1, item2, item3, item4, item5];

  return (
    <>

      <Container>
        <Section>
          <InnerSection>
            <AccordionContainer>
              <AccordionInner>
                <AccordionItems
                  accordionContent={sampleAccordionData}
                  refs={refs}
                  currentAccordion={currentAccordion}
                  setCurrentAccordion={setCurrentAccordion}
                  setBodyHeight={setBodyHeight}
                  bodyHeight={bodyHeight}
                />
              </AccordionInner>
            </AccordionContainer>
          </InnerSection>
        </Section>
      </Container>
    </>
  );
}

let About = ({match}) => {
return(

  <>
      <ContainerMain>
          <NavBar>
             <NavItem>
              <NavLink exact to={`${match.url}`}> > <Trans>Try</Trans> > </NavLink>
              <NavLink exact to={`${match.url}/about`}><Trans>About</Trans></NavLink>
          </NavItem>

          </NavBar>
          {AccordionAbout()}
      </ContainerMain>

  </>
);
}

// About = connect(
//   state => ({
//     location: state.routing.location
//   }),
//   null
// )(About);

export default translate("translations")(About);
