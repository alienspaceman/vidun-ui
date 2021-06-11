import React, {Component} from "react";
import { translate, Trans } from "react-i18next";
import {connect} from "react-redux";
import {compile, pathToRegexp} from "path-to-regexp";
import i18n from "../../i18n";
import {withRouter } from "react-router-dom";
import {Nav,
    NavLink,
    NavbarContainer,
    NavMenu,
    NavItem,
    Logo,
    LangMenu,
    LangOption,
    LangContainer,
    Globe

} from "./NavbarElements";

const changeLanguage = lng => {
  i18n.changeLanguage(lng);
};

const generateLanguage = (locale, location) => {
  const ROUTE = "/:locale/:path*";
  const definePath = compile(ROUTE);
  const routeComponents = pathToRegexp(ROUTE).exec(location.pathname);

  let subPaths = null;
  if (routeComponents && routeComponents[2]) {
    subPaths = routeComponents[2].split("/");
  }

    // console.log('Location', location)
    // console.log('locale', locale)
    // console.log('subPaths', subPaths)
  return definePath({
    locale,
    path: subPaths
  });
};

class DropDown extends Component {
  onChange = (e) => {
      // console.log('Dropdown change language', e.target.value)
      changeLanguage(e.target.value)
        this.props.history.push(`${e.target.value}`);
  }
  render() {
      const location = this.props.location;
      const match = this.props.match;
      // console.log("DropDown location", location);
    return (


      <LangMenu onChange={this.onChange}>
          <LangOption value="" selected disabled hidden>{match.params.locale}</LangOption>
        <LangOption value={generateLanguage("en", location)}>en</LangOption>
        <LangOption value={generateLanguage("ru", location)}>ru</LangOption>
      </LangMenu>
    );
  }
}

const Menu = withRouter(DropDown);


let Navbar = ({match, location}) => {

  // console.log("Navbar location", location);
  // console.log("match", match);

    return (
        <>
            <Nav>
                <Logo to={`${match.url}`}>
                    <h1>vidun</h1>
                </Logo>

                <NavbarContainer>
                    <LangContainer>

                        <Menu match={match} location={location}/>
                        <Globe/>

                    </LangContainer>
                <NavMenu>
                    <NavItem>
                        <NavLink to={`${match.url}/about`}>
                        <Trans>About</Trans>
                        </NavLink>
                    </NavItem>
                </NavMenu>
                    </NavbarContainer>

            </Nav>
        </>
    );
};

Navbar = connect(
  state => ({
    location: state.routing.location
  }),
  null
)(Navbar);

export default translate("translations")(Navbar);