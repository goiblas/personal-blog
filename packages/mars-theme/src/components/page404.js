import React from "react";
import { styled } from "frontity";

const Page404 = () => (
  <Container>
    <Title>Oops! 404</Title>
    <Description>
      Página no encontrada{" "}
      <span role="img" aria-label="confused face">
        😕
      </span>
    </Description>
  </Container>
);

export default Page404;

const Container = styled.div`
  --padding-top: 3;
  --padding-bottom: 1;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
