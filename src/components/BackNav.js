import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Hero";
import { StyledLink } from "./Typography";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackgroundBox = styled.div`
    width: 100%;
    inset: 0;
    background-color: #21d4fd;
    background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
    padding: 0.8em 0 0.8em 0;
    font-family: "Questrial", sans-serif;
    color: white;
`;

export default function BackNav() {
    return (
        <BackgroundBox>
            <Wrapper>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{
                        display: "inline-block",
                        fontSize: "1em",
                        lineHeight: "1.2em",
                        width: "1.2em",
                        height: "1.2em",
                        textAlign: "center",
                        verticalAlign: "bottom",
                        padding: "0.1em",
                    }}
                />
                <StyledLink style={{ fontSize: "1.2em" }} to="/">
                    Go Back
                </StyledLink>
            </Wrapper>
        </BackgroundBox>
    );
}
