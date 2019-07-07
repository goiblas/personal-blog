import React from "react";
import { connect, styled } from "frontity";

const Footer = ({state}) => {
  return (
    <FooterContainer className="main-footer">
        <div className="container">
            {state.frontity.footer}
        </div>
    </FooterContainer>
  );
};

export default connect(Footer);

const FooterContainer = styled.footer`
    --padding-top: 2;
    
    .container {
        text-align: center;
        --fs-size: -2;
    }
`;

