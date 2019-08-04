import React from "react";
import { connect } from "frontity";

const Link = ({ actions, link, className, children, id, ariaLabelledby, rel }) => {

  const onClick = event => {
    event.preventDefault();
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
