import React from "react";
import { styled } from "frontity";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = {
    test: node => node.type === "element" && node.component === "pre",
    process: (node) => {
      node.component = ContentPre;
      return node;
    }
}

export default code;

const ContentPre = props => {
    return (
        <Container>
          <SyntaxHighlighter language={getLanguage(props.className)} style={githubGist} {...props} />
        </Container>
      );
}

const getLanguage = (classes = '') => {
    return classes.match((/brush: (\w+);/))[1];
}
const Container = styled.div`
    overflow: auto;
`;