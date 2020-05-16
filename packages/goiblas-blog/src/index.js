import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import gistCode from "./processors/gist-code";

const goiblasTheme = {
  name: "frontity-goiblas-blog",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      mode: "light",
      focusOnChange: false
    }
  },
  actions: {
    theme: {
      afterCSR: ({ actions, state }) => {
        if (window.localStorage.getItem("mode") === "dark") {
          actions.theme.setDarkMode();
        }
      },
      setFocusOnChange: ({ state }) => {
        state.theme.focusOnChange = true;
      },
      setLightMode: ({ state }) => {
        state.theme.mode = "light";
        window.localStorage.setItem("mode", "light");
      },
      setDarkMode: ({ state }) => {
        state.theme.mode = "dark";
        window.localStorage.setItem("mode", "dark");
      }
    }
  },
  libraries: {
    html2react: {
      processors: [image, gistCode]
    }
  }
};

export default goiblasTheme;
