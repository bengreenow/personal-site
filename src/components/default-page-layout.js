import React from "react";
import { Hero, Wrapper } from "./Hero";
import { MDXProvider } from "@mdx-js/react";
import { Heading1 } from "./Typography";
import BackNav from "./BackNav";

const myHeading1 = (props) => <Heading1 {...props}></Heading1>;
const myParagraph = (props) => (
    <div style={{ flex: "auto" }}>
        <p {...props}></p>
    </div>
);
const components = { h1: myHeading1, p: myParagraph };

const DefaultTemplate = ({ children }) => (
    <>
        <BackNav></BackNav>
        <Wrapper>
            <Hero>
                <MDXProvider components={components}>{children}</MDXProvider>
            </Hero>
        </Wrapper>
    </>
);
export default DefaultTemplate;
