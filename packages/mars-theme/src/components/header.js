import React from "react";
import { connect } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Toggle from "./toggle";
import photo from "../assets/gray-jesus.png";

const Header = ({ state }) => (
    <header className="header">
        <div className="header__container">
            <div className="logo">
              <Link link="/">
                  <div className="logo__image">
                      <img src={photo} alt="" width="407" height="454" />
                  </div>
                  <div className="logo__name">
                      {state.frontity.title}
                  </div>
              </Link>
            </div>
            <Nav />
            <div className="toggle-layout" aria-hidden="true">  
                <Toggle />
            </div>
        </div>
        
    </header>
);

export default connect(Header);
