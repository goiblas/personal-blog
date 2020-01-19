import React from "react";
import { connect, styled } from "frontity";
import { inDesktop } from './utils/media-queries';

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
        <Container>
            <PowerBy>
                Desarrollado con <a rel="noopener noreferrer" href="https://frontity.org/" target="_blank">Frontity</a>
            </PowerBy>
            <Social>
                Me puedes encontrar en:
                <a className="link" rel="noopener noreferrer" href="https://twitter.com/goiblas" target="_blank">Twitter</a> 
                <a className="link" rel="noopener noreferrer" href="https://github.com/goiblas" target="_blank">Github</a> 
                <a className="link" rel="noopener noreferrer" href="https://codepen.io/goiblas/" target="_blank">Codepen</a>              
            </Social>
        </Container>
    </FooterContainer>
  );
};

export default connect(Footer);
const Container = styled.div`
    width: var(--container-percentage);
    max-width: var(--container-wide);
    border-top: 1px solid var(--color-border);
    margin-left: auto;
    margin-right: auto;

    --margin-top: 2;
    --padding-top: 1;    
    --padding-bottom: 1;

    margin-bottom: var(--header-height);
    ${inDesktop} {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0;
    }
`;

const PowerBy = styled.div`
    a {
        margin-left: .1em;
    }
`;
const Social = styled.div`
    .link {
        color: var(--color-text);
        margin-left: .4rem;
    }
`;
const FooterContainer = styled.footer`
    text-align: center;
    --font-size: -.4;
    color: var(--color-text-light);
`;

