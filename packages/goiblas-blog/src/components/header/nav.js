import React from "react";
import {  styled ,connect } from "frontity";
import Link from "../utils/link";
import { inDesktop } from '../utils/media-queries';

const Nav = ({ state }) => (
  <Container>
      {state.theme.menu.map(([name, link]) => (
          <Item link={link} key={name} isSelected={state.router.link === link}>{name}</Item>
      ))}
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
    flex: 1 1 auto;
`;

const Item = styled(Link)`
    --margin-right: .5;

    font-size: 11px;
    font-family: var(--system-family);
    text-decoration: none;
    letter-spacing: .06em;
    font-weight: 600;
    text-transform: uppercase;
    line-height: var(--header-height);
    position: relative;
    opacity: ${({ isSelected }) => ( isSelected ? 1 : .7)};
    transition: all .2s;
    
    ${inDesktop} {
        --margin-right: 1;
        font-size: 12px;
    }
    &:hover {
        opacity: 1;
    }

    &::before {
        width: 5px;
        height: 5px;
        background-color: var(--color-brand);
        position: absolute;
        bottom: -10px;
        left: calc(50% - 2px);
        content: "";
        border-radius: 50%;
        display: ${({ isSelected }) => ( isSelected ? 'block' : 'none')};
    }
`;