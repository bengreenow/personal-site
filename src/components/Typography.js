import { Link } from "gatsby";
import React from "react";
import styled, { keyframes } from "styled-components";

const gradientList = [
    "linear-gradient(19deg, #e8711d 0%, #cc1c7e 100%)",

    "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",

    "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
];

const fadeUp = keyframes`
  from {
    opacity: 0%;
    transform: translateY(100px);
  }
  to {
    opacity: 100%;
    transform: translateY(0px);

}`;

export const Title = styled.h1`
    display: inline-block;
    font-family: "Questrial", sans-serif;
    font-size: 10em;
    font-weight: 100;
    color: white;
    margin: 0;
    animation-name: ${fadeUp};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    @media (max-width: 660px) {
        font-size: 5em;
    }
    @media (max-width: 320px) {
        font-size: 4em;
    }
`;
export const Subtitle = styled.h2`
    font-family: "Old Standard TT", serif;
    color: white;
    font-size: 2rem;
    line-height: 0.5;
    margin: 0;
    animation-name: ${fadeUp};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: 0.3s;
    animation-fill-mode: backwards;
`;

export const Heading1 = styled(Title)`
    font-size: 5rem;
    color: black;
    animation: none;
    &:after {
        content: "";
        position: relative;
        display: block;
        height: 4px;
        left: ${() => 10 + Math.floor(Math.random() * 70)}px;
        right: 0px;
        bottom: 10px;
        width: 100%;
        z-index: -1;
        background-color: #73e3ff;
        background-image: ${() =>
            gradientList[Math.floor(Math.random() * gradientList.length)]};
    }
`;

export const SocialListItem = styled.li`
    display: inline-block;
    margin: 4px;
`;

export const SocialList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const Heading2 = styled(Title)`
    font-size: 2.4rem;
    color: black;
    animation: none;
`;

export const StyledLink = styled((props) => <Link {...props} />)`
    font-family: "Questrial", sans-serif;
    color: white;
    text-decoration: none;
    &:active {
    }
    &:visited {
        color: white;
        text-decoration: none;
    }
`;
