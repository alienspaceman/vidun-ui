import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faPatreon, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Container = styled.div`{
  position: relative;
  margin-top: auto;
  margin-bottom: 5px;
  //bottom: 0;
  //top: 100%;
  width: 100%;
  //height: 10%;
}
`;

export const Fantom = styled.div`{
  display: block;
  height: 100%;
}
`;
export const Icons = styled.div`{
  display: flex;
  justify-content: space-between;
  max-width: 20vw;
  margin: auto auto 0 auto;
  height: 100%;
  align-items: center;

  @media screen and (max-aspect-ratio: 3/4) {
    max-width: 50vw;
  }
}
`;

export const Icon = styled.a`
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size:calc(3vh + 1vmin);
`;

const Footer = () =>
{
    return(
    <Container>
        <Fantom>
            <Icons>

                <Icon href="mailto:catherinefrid96@gmail.com">
                    <StyledIcon icon={faEnvelope} color="#a6a6a6" />
                </Icon>
                <Icon href="https://github.com/alienspaceman">
                    <StyledIcon icon={faGithub}  color="#a6a6a6"/>
                </Icon>
                <Icon href="https://www.patreon.com/vidun">
                    <StyledIcon icon={faPatreon} color="#a6a6a6"/>
                </Icon>
            </Icons>
        </Fantom>
    </Container>
    )
}

export default Footer;