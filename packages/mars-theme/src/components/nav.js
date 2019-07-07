import React from "react";
import { connect } from "frontity";
import Link from "./link";

const Nav = ({ state }) => (
  <nav className="main-nav">
      <ul>
      {state.theme.menu.map(([name, link]) => (
        <li key={name}>
          <Link link={link} className={ state.router.link === link ? 'is_selected' : 'hol'}>{name}</Link>
        </li>
      ))}
      </ul>
  </nav>
);

export default connect(Nav);
