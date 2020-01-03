import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import gistCode from "./processors/gist-code";
import ReactGA from 'react-ga';

const before = ({ libraries }) => {
  libraries.html2react.processors.push(image);
  libraries.html2react.processors.push(gistCode);
};

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [], 
      mode: 'light',
      focusOnChange: false
    }
  },
  actions: {
    theme: {
      beforeSSR: before,
      beforeCSR: before,
      afterCSR: ({ actions, state }) => {
          if (window.localStorage.getItem('mode') === 'dark') {
            actions.theme.setDarkMode();
          }
          ReactGA.initialize('UA-155287355-1');
          ReactGA.pageview(state.router.link);
      },
      setFocusOnChange: ({ state }) => {
        state.theme.focusOnChange = true;
      },
      setLightMode: ({state}) => {
        state.theme.mode = 'light';
        window.localStorage.setItem('mode', 'light');
      },
      setDarkMode: ({state}) => {
        state.theme.mode = 'dark';
        window.localStorage.setItem('mode', 'dark');
      }
    }
  }
};

export default marsTheme;
