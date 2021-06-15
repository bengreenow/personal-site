import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import * as React from "react";
import { Heading1, Subtitle, Title } from "../components/Typography";
import { StaticImage } from "gatsby-plugin-image";
import { keyframes } from "styled-components";
import { Footer, HeaderHero, Hero, Wrapper } from "../components/Hero";
import SocialIcons from "../components/SocialIcons";
// data

const socials = [
    {
        icon: faInstagram,
        link: "https://www.instagram.com/bengreenow",
    },
    {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/ben-greenow-3b004a180/",
    },
    {
        icon: faEnvelope,
        link: "mailto:benjamin.greenow@gmail.com?subject=Hello There!",
    },
    {
        icon: faGithub,
        link: "https://github.com/bengreenow",
    },
];

// markup
const IndexPage = () => {
    return (
        <div>
            <header style={{ margin: 0 }}>
                <div style={{ display: "grid" }}>
                    <div
                        style={{
                            gridArea: "1/1",
                            height: "100vh",
                        }}
                    />
                    <HeaderHero
                        style={{
                            gridArea: "1/1",
                            position: "relative",
                            placeItems: "center",
                            display: "grid",
                        }}
                    >
                        <div
                            style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                maxWidth: "1140px",
                                // width: "100%",
                            }}
                        >
                            <Title>Ben Greenow</Title>
                            <Subtitle>web developer</Subtitle>
                            {/* // TODO add onclick scroll down */}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                size="3x"
                                style={{
                                    margin: "auto",
                                    display: "block",
                                    color: "white",
                                    animationName: "fadeUp",
                                    animationDuration: "1s",
                                    animationTimingFunction: "ease-out",
                                    animationDelay: "0.7s",
                                    animationFillMode: "backwards",
                                }}
                            />
                        </div>
                    </HeaderHero>
                </div>
            </header>
            <Wrapper>
                <Hero>{/* <Heading1>Projects</Heading1> */}</Hero>
            </Wrapper>

            <Footer>
                <Wrapper>
                    <SocialIcons socials={socials}></SocialIcons>
                </Wrapper>
            </Footer>
        </div>
    );
};

export default IndexPage;
