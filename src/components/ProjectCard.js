import React from "react";
import styled from "styled-components";
import { Heading2 } from "./Typography";
import { CORNER_RADIUS, GRADIENT_1 } from "./Constants";

const Card = styled.div`
    border-radius: ${CORNER_RADIUS};
    background-color: white;
    position: relative;
    padding: 20px;
    ${"" /* min-width: 275px; */}
    box-sizing: border-box;
    margin: 1rem 0.25em;
    flex: 0 1 calc(50% - 1em);

    @media (max-width: 50em) {
        min-width: calc(100% - 1em);
    }
    &:after {
        border-radius: ${CORNER_RADIUS};
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        /* Declaring our shadow color inherit from the parent (button) */
        background-color: #73e3ff;
        background: ${GRADIENT_1};

        background-blend-mode: overlay, difference, difference, normal;

        /* Blurring the element for shadow effect */
        filter: blur(3px);
    }
`;

const Divider = styled.div`
    width: 100%;
    background-color: #888;
    height: 2px;
`;

export default function ProjectCard(props) {
    return (
        <Card>
            {props.imageComponent || ""}
            <Heading2 style={{ marginTop: "1rem" }}>
                {props.title || "Untitled Project"}
            </Heading2>
            {props.children}
        </Card>
    );
}

export const ProjectCaption = styled.p`
    font-family: "Old Standard TT", serif;
    white-space: normal;
    font-size: 1.3rem;
    margin-top: 0.4rem;
    margin-bottom: 0.6rem;
    max-width: 65ch;
`;
