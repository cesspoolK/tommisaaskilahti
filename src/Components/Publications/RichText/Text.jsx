import React from "react";

export const Paragraph = (props) => {
    return <p {...props} style={{ color: '#ffffff' }}>{props.children}</p>
};

export const Heading = (props) => {
    return <h4 {...props} style={{ color: '#ffffff' }}>{props.children}</h4>
};

export const List = (props) => {
    return <li {...props} style={{ color: '#ffffff' }} />
};

export const BlockQuote = (props) => {
    return <blockquote {...props} style={{ padding: '1em', fontSize: '14px', backgroundColor: '#282828' }}>{props.children}</blockquote>
};