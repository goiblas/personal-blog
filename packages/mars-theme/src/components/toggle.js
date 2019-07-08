import React from "react";
import { connect, styled, css, Global } from "frontity";

const Toggle = ({ actions, state }) => {
  const { mode } = state.theme;
  const { setLightMode, setDarkMode } = actions.theme;

  const darkmode = css`
      :root {
          --bg-body: #121519;
          --bg-header: #161A1F;
          --c-text: #e0e0e0;
          --c-primary: #20c7d9;
          --border-color: rgba(255, 255, 255, .15);
      }`;
    const isDarkMode = mode === 'dark';
  return (
    <Container lang="en">
      {isDarkMode && <Global styles={darkmode} />}
      <button onClick={setLightMode} aria-pressed={ isDarkMode ? 'false' : 'true'} >Light</button>
      <button onClick={setDarkMode} aria-pressed={ isDarkMode ? 'true' : 'false'}>Dark</button>
    </Container>
  );
};

export default connect(Toggle);

const Container = styled.div`
  border: 2px solid var(--border-color);
  padding: 1px;
  width: 103px;
  border-radius: 4px;
  display: flex;

  button {
    border: 0;
    background-color: transparent;
    color: var(--c-text);
    flex: 0 0 50%;
    padding: 3px 0;
    border-radius: 2px;
    font-size: 13px;
  }

  button[aria-pressed="true"] {
    background-color: var(--c-primary);
    color: #fff;
  }
}
`;
