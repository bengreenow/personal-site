import React from "react";
import styled from "styled-components";
import { SOCIALS } from "./Constants";
import { Wrapper } from "./Hero";
import SocialIcons from "./SocialIcons";

const FooterStyled = styled.div`
    padding-top: 3em;
    background: linear-gradient(219.46deg, #110036 27.63%, #170059 100%),
        linear-gradient(219.46deg, #ffffff 27.63%, #19004e 100%),
        radial-gradient(100% 246.94% at 100% 100%, #ffffff 0%, #000353 100%),
        linear-gradient(121.18deg, #1400ff 0.45%, #3a0000 100%),
        linear-gradient(192.86deg, #f06060 9.22%, #008b7a 87.25%),
        linear-gradient(150.76deg, #0015d5 15.35%, #000b6c 89.57%);
    background-blend-mode: screen, overlay, overlay, difference, difference,
        normal;

    min-height: 10rem;
    ${({ noMargin }) =>
        !noMargin && "margin-top: 5rem;"}// if margin prop active
`;

export default function Footer(props) {
    return (
        <>
            <FooterStyled {...props}>
                <Wrapper>
                    <SocialIcons socials={SOCIALS}></SocialIcons>
                </Wrapper>
            </FooterStyled>
        </>
    );
}
