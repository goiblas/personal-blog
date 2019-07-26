import React from "react";
import { styled } from "frontity";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ContentPre = props => {
    return (
        <div>
            <Container>
                <SyntaxHighlighter language={getLanguage(props.className)} style={atelierLakesideDark} {...props}>
                    {props.children}
                </SyntaxHighlighter>
            </Container>
        </div>
      );
}

export default ContentPre;

const getLanguage = (classes = 'brush: text;') => {
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