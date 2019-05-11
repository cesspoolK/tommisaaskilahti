import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { colorscheme } from './colorscheme';

const CodeBlock = ({ language, value }) => {

    return (
        <SyntaxHighlighter language="jsx" style={colorscheme}>
            {value}
        </SyntaxHighlighter>
    );
};
export default CodeBlock;