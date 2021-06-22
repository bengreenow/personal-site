import React from "react";
import styled from "styled-components";
import { Heading2 } from "./Typography";

const CORNER_RADIUS = "5px";
const MARGIN = "30px";

const Card = styled.div`
    border-radius: ${CORNER_RADIUS};
    background-color: white;
    position: relative;
    padding: 7px;
    ${"" /* min-width: 275px; */}
    box-sizing: border-box;
    margin: 1rem 0.25em;
    flex: 0 1 calc(33% - 1em);

    @media (max-width: 60em) {
        min-width: calc(50% - 1em);
        background-color: red;
    }
    @media (max-width: 40em) {
        min-width: calc(100% - 1em);
        background-color: green;
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
        background: linear-gradient(126.95deg, #bbb 0%, #f9ffb1 100%),
            radial-gradient(91.23% 100% at 50% 100%, #be002e 0%, #6100ff 100%),
            linear-gradient(307.27deg, #1dac92 0.37%, #2800c6 100%),
            radial-gradient(
                100% 140% at 100% 0%,
                #eaff6b 0%,
                #006c7a 57.29%,
                #2200aa 100%
            );

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
            <Heading2>{props.title || "Untitled Project"}</Heading2>
            <p>{props.children}</p>
        </Card>
    );
}
