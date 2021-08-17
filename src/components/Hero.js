import styled, { keyframes } from "styled-components";

export const Hero = styled.div`
    margin: 0;
    padding: 0;

    padding-bottom: 1 em;
    &:first-of-type {
        padding-top: 3em;
    }
`;

export const HeaderHero = styled.div`
    background: linear-gradient(126.95deg, #bbb 0%, #f9ffb1 100%),
        radial-gradient(91.23% 100% at 50% 100%, #be002e 0%, #6100ff 100%),
        linear-gradient(307.27deg, #1dac92 0.37%, #2800c6 100%),
        radial-gradient(
            100% 140% at 100% 0%,
            #eaff6b 0%,
            #006c7a 57.29%,
            #2200aa 100%
        );
    }
    background-blend-mode: overlay, difference, difference, normal;
`;

export const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    padding: 0rem 10px 0rem 10px;
`;
