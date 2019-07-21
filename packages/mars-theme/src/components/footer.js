import React from "react";
import { connect, styled } from "frontity";
import { inMobile } from './utils/media-queries';

const Footer = ({state}) => {
  return (
    <FooterContainer className="main-footer">
        <Container>
            {state.frontity.footer}
        </Container>
    </FooterContainer>
  );
};

export default connect(Footer);
const Container = styled.div`
    width: var(--container-percentage);
    max-width: var(--container-normal);
    border-top: 1px solid var(--color-border);
    margin-left: auto;
    margin-right: auto;

    --margin-top: 2;
    --padding-top: 1;    
    --padding-bottom: 1;

    ${inMobile} {
        margin-bottom: var(--header-height);
    }
`;

const FooterContainer = styled.footer`
    text-align: center;
    --font-size: -.4;
    color: var(--color-text-light);
`;

