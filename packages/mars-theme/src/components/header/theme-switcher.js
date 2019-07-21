import React from "react";
import { connect, styled, css, Global } from "frontity";
import { Sun, Moon } from '../utils/icons';

const ThemeSwitcher = ({ state, actions }) => {

    const { mode } = state.theme;
    const { setLightMode, setDarkMode } = actions.theme;
    const darkmode = css`
      :root {
        --color-brand: #b22bf7; 
        --color-brand-light: #9424ce;

        --color-text: rgba(255, 255, 255, 0.92);
        --color-text-light: rgba(255, 255, 255, 0.74);

        --border-color: rgba(255, 255, 255, .15);

        --background-brand: #121519;
        --background-brand-dark: #000000;
        --color-border: rgba(255, 255, 255, 0.08);

        --shadow-color: rgba(255, 255, 255, 0.2);
        --selection: #2684a0;
      }`;
    const isDarkMode = mode === 'dark';

    return (
        <Switch aria-hidden="true" isDark={isDarkMode}>
            {isDarkMode && <Global styles={darkmode} />}
            <button onClick={ setLightMode } aria-pressed={ isDarkMode ? 'false' : 'true'}>
                <Sun  />
            </button>
            <button onClick={ setDarkMode } aria-pressed={ isDarkMode ? 'true' : 'false'}>
                <Moon />
            </button>
        </Switch>
    );
};

export default connect(ThemeSwitcher);

const Switch = styled.div`
    overflow: hidden;
    border-radius: 3px;
    box-shadow: inset var(--color-border) 0 0 0 1px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90px;

    button {
        border: 0;
        background-color: transparent;
        height: 36px;
        display: flex;
        outline: 0;

        svg {
            margin: auto;
            stroke: ${({ isDark }) => ( isDark ? '#fff' : '#111')};
        }
        &[aria-pressed="true"] {
            background-color: var(--color-brand);
            stroke: #111;
        }
    }
`;