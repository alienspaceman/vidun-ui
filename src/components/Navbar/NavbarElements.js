import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import { FaGlobe} from 'react-icons/fa';



export const Nav = styled.nav`

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
`;


export const NavbarContainer = styled.div`{

  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
}
`;


export const Logo = styled(Link)`{

  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 0.5rem;
  padding-top: 0.25rem;
  color: blue;
  -webkit-text-stroke: 1px blue;

  //font-family: 'Press Start 2P', cursive;
  font-family: 'Roboto Regular', monospace;
  text-decoration: none;
  font-size: calc(8px + 1vmin);
  -webkit-font-smoothing: antialiased;

}
`;

export const NavItem = styled.li`{
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 44px;
  text-align: center;
  //padding: 0 2rem;
  
}
`;


export const NavLink = styled(Link)`{
  margin: 0 0.5rem 0 0.5rem;
  padding: 0;
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  
  font-family: 'Roboto Regular', monospace;
  font-size: calc(8px + 1vmin);
  font-weight: normal;
  color: black;
  letter-spacing: -0.46px;
  -webkit-font-smoothing: antialiased;
  width: 110px;
  
  
  &.active {
    -webkit-text-stroke: 1px black;
    color: black;
  }
  
  &:hover {
    -webkit-text-stroke: 1px black;
    color: black;
  }
  
}`;

export const NavMenu = styled.ul`
{
  //margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
   margin-top: auto;
  margin-bottom: auto;
  
}
`;

export const LangContainer = styled.div`{
   height: 100%;
  //position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;

  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  

  
  
  

}`;

export const Globe = styled(FaGlobe)`{
  float: left;
  color: gray;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  height: 100%;
}`

export const LangMenu = styled.select`
{
  //display: flex;
  //justify-content: space-between;
  
  //padding-top: 0.15rem;
  font-family: 'Roboto Regular', monospace;
  font-size: calc(8px + 1vmin);
  font-weight: normal;
  color: black;
  letter-spacing: -0.46px;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;

  background: transparent;
  border: none;
  -webkit-box-align: center;
  cursor: pointer;
  float: left;
  margin-right: 0.5rem;
  //margin-top: auto;
  //margin-bottom: auto;
  
   -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;


  &:hover {
    -webkit-text-stroke: 1px black;
  }


  &:focus {
    outline: none !important;
    box-shadow: none !important;

  }
}
`;

export const LangOption = styled.option`
{
  //margin-top: auto;
  //margin-bottom: auto;
  &:hover {
    -webkit-text-stroke: 1px black;

  }
}
`;






