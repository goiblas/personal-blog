import React from "react";
import { connect } from "frontity";

const Toggle = ({ actions }) => {
  const { setHorizontalLayout, setVerticalLayout } = actions.theme;
  return (
    <>
      <button onClick={setVerticalLayout} className="button-layout-vertical">
          <svg xmlns="http://www.w3.org/2000/svg" width="29.1" height="20"><path d="M26.7 0H2.4A2.4 2.4 0 0 0 0 2.4v15.1C0 18.9 1.1 20 2.4 20h24.3c1.3 0 2.4-1.1 2.4-2.4V2.4c0-1.3-1-2.4-2.4-2.4zM1.1 17.6V2.4c0-.7.6-1.3 1.3-1.3h4.4v17.7H2.4c-.7.1-1.3-.5-1.3-1.2zm26.9 0c0 .7-.6 1.3-1.3 1.3H8V1.1h18.7c.7 0 1.3.6 1.3 1.3v15.2z"/></svg>
      </button>
      <button onClick={setHorizontalLayout} className="button-layout-horizontal">
          <svg xmlns="http://www.w3.org/2000/svg" width="29.1" height="20"><path d="M2.4 0zM2.4 20l-1.1-.2 1.1.2z"/><path d="M26.7 0H2.4l-1 .2-.3.2-.4.3C.3 1.2 0 1.8 0 2.4V17.5c0 .7.3 1.3.7 1.7l.4.3.3.2c.3.2.7.3 1 .3h24.3c1.3 0 2.4-1.1 2.4-2.4V2.4c0-1.3-1-2.4-2.4-2.4zM28 17.6c0 .7-.6 1.3-1.3 1.3H2.4c-.7 0-1.3-.6-1.3-1.3V5.7H28v11.9zM1.1 4.6V2.4c0-.7.6-1.3 1.3-1.3h24.3c.7 0 1.3.6 1.3 1.3v2.1H1.1z"/></svg>
      </button>
    </>
  );
};

export default connect(Toggle);
