import React from "react";
import { connect } from "frontity";

const Link = ({ actions, state, link, className, children, id, ariaLabelledby, rel }) => {

  const { focusOnChange } = state.theme;
  const { setFocusOnChange } = actions.theme;

  const onClick = event => {
    event.preventDefault();

    if( !focusOnChange ) setFocusOnChange();
    // Set the router to the new url.
    actions.router.set(link);
    window.scrollTo(0, 0);

  };

  return (
    <a rel={rel} id={id} aria-labelledby={ariaLabelledby} href={link} onClick={onClick} className={className}>
      {children}
    </a>
  );
};

export default connect(Link);
