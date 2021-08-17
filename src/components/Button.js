import styled from "styled-components";
import { CORNER_RADIUS, SANS_SERIF_FONT } from "./Constants";

export const Button = styled.a`
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
        transform: scale(1.05);
        transition: all 0.3s ease-out;
    }
    transition: all 0.3s ease-out;

    display: inline-block;
    ${"" /* margin: 0.2rem; */}
    padding: 0.8rem;
    font-size: 17px;
    border-radius: ${CORNER_RADIUS};
    text-transform: uppercase;
    color: #ffffff;
    position: relative;
    background-color: #4158d0;
    background-image: linear-gradient(
        43deg,
        #4158d0 0%,
        #c850c0 46%,
        #ffcc70 100%
    );
    ${SANS_SERIF_FONT}

    &:before {
        content: "";
        display: block;
        position: absolute;

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        z-index: -1;
        border-radius: ${CORNER_RADIUS};
        filter: blur(2px) brightness(1);
        transform-style: preserve-3d;
        transition: all 0.3s ease-out;
        background-color: #4158d0;
        background-image: linear-gradient(
            43deg,
            #4158d0 0%,
            #c850c0 46%,
            #ffcc70 100%
        );
    }
    &:hover:before {
        transition: all 0.3s ease-out;
        filter: blur(8px) brightness(1.1);
    }
`;
