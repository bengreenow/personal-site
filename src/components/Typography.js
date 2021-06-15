import styled, { keyframes } from "styled-components";

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
    font-family: "Questrial", sans-serif;
    font-size: 10em;
    font-weight: 100;
    color: white;
    margin: 0;
    font-family: $display-font-family;
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
    &:after {
        content: "";
        position: absolute;
        height: 2px;
        left: 2px;
        right: 0;
        width: 100%;
        background: ba;
        bottom: -2px;
    }
`;
