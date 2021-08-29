import React from "react";
import { styled } from "frontity";

const Loading = () => (
  <Container>
    <p>Cargando ...</p>
  </Container>
);

export default Loading;

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 48px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
