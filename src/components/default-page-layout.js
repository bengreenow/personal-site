import React from "react";
import { Wrapper } from "./Hero";
import { MDXProvider } from "@mdx-js/react";
import { Heading1, Heading2 } from "./Typography";
import BackNav from "./BackNav";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const myHeading1 = (props) => <Heading1 {...props}></Heading1>;
const myHeading2 = (props) => <Heading2 {...props}></Heading2>;
const myParagraph = (props) => (
    // <div style={{ textAlign: "center" }}>
    <p
        // style={{
        //     display: "inline-block",
        //     textAlign: "left",
        // }}
        {...props}
    ></p>
);
const components = { h1: myHeading1, p: myParagraph, h2: myHeading2 };

const DefaultTemplate = ({ children }) => (
    <>
        <Helmet>
            <title>Ben Greenow | Projects</title>
        </Helmet>
        <BackNav></BackNav>
        <Wrapper>
            {/* <Hero> */}
            <MDXProvider components={components}>{children}</MDXProvider>
            {/* </Hero> */}
        </Wrapper>

        <Footer noMargin={true}></Footer>
    </>
);
export default DefaultTemplate;
