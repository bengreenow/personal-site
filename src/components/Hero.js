import styled, { keyframes } from "styled-components";

export const Hero = styled.div`
    margin: 0;
    padding-top: 3em;
    padding-bottom: 3em;
`;

export const Footer = styled(Hero)`
    background: linear-gradient(219.46deg, #110036 27.63%, #170059 100%),
        linear-gradient(219.46deg, #ffffff 27.63%, #19004e 100%),
        radial-gradient(100% 246.94% at 100% 100%, #ffffff 0%, #000353 100%),
        linear-gradient(121.18deg, #1400ff 0.45%, #3a0000 100%),
        linear-gradient(192.86deg, #f06060 9.22%, #008b7a 87.25%),
        linear-gradient(150.76deg, #0015d5 15.35%, #000b6c 89.57%);
    background-blend-mode: screen, overlay, overlay, difference, difference,
        normal;

    min-height: 10rem;
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
    max-width: 900px;
    padding-left: 10px;
    padding-right: 10px;
`;
