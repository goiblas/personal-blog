import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import code from './components/code';

const before = ({ libraries }) => {
  libraries.html2react.processors.push(image);
  libraries.html2react.processors.push(code);
};

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [], 
      mode: 'light'
    }
  },
  actions: {
    theme: {
      beforeSSR: before,
      beforeCSR: before,
      setLightMode: ({state}) => {
        state.theme.mode = 'light';
      },
      setDarkMode: ({state}) => {
        state.theme.mode = 'dark';
      }
    }
  }
};

export default marsTheme;
