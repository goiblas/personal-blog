import React from "react";
import { styled } from "frontity";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
        <div>
            <Container>
                <SyntaxHighlighter language={getLanguage(props.className)} style={atelierLakesideDark} {...props} />
            </Container>
        </div>
      );
}

const getLanguage = (classes = '') => {
    return classes.match((/brush: (\w+);/))[1];
}
const Container = styled.div`
    --margin-library: 0.5em;
    margin: calc(var(--space) - var(--margin-library)) calc(var(--margin-library) * -1);
    overflow: auto;

    pre {
        border-radius: 3px;
    }
`;