import React, { useEffect, useRef } from "react";
import { connect, styled } from "frontity";
import Link from "../utils/link";
import { inDesktop } from "../utils/media-queries";
import { Logo } from "../utils/icons";

const Hero = ({ state }) => {
  const { hero } = state.frontity;
  const { content, cta } = hero;

  // Focus onChange page
  const titleEl = useRef(null);
  const { focusOnChange } = state.theme;

  useEffect(() => {
    if (titleEl.current && focusOnChange) {
      titleEl.current.focus();
    }
  });

  return (
    <Wrapper>
      <Container>
        <LogoMobile>
          <Link link="/">
            <Logo />
          </Link>
        </LogoMobile>
        <Title tabIndex="-1" ref={titleEl}>
          {content}
        </Title>
        <p>
          <Cta link={cta.link} className="link">
            {cta.content}
          </Cta>
        </p>
      </Container>
    </Wrapper>
  );
};

export default connect(Hero);

const Cta = styled(Link)`
  --font-size: 0.5;
`;
const Wrapper = styled.section`
  --padding-top: 0;
  --padding-bottom: 2;
  background-color: var(--background-brand-dark);
  transition: background-color 500ms;
`;

const Title = styled.h1`
  --font-size: 4;
  --margin-bottom: 2;
  --line-height: 2;
  /* max-width: 550px; */
`;

const Container = styled.div`
  width: var(--container-percentage);
  max-width: var(--container-normal);
  --padding-top: 1;
  margin: 0 auto;
`;
const LogoMobile = styled.div`
  --padding-top: 0;
  ${inDesktop} {
    display: none;
  }
`;
