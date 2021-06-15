import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { Heading1, Subtitle, Title } from "../components/Typography";
import { StaticImage } from "gatsby-plugin-image";
import { keyframes } from "styled-components";
import { Hero } from "../components/Hero";

// markup
const IndexPage = () => {
    return (
        <div>
            <header style={{ margin: 0 }}>
                <div style={{ display: "grid" }}>
                    <StaticImage
                        style={{
                            gridArea: "1/1",
                            height: "100vh",
                        }}
                        layout="fullWidth"
                        alt=""
                        src={"../images/gradient.webp"}
                    />
                    <div
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
                                paddingRight: "10px;",
                                maxWidth: "1140px",
                                // width: "100%",
                            }}
                        >
                            <Title>Ben Greenow</Title>
                            <Subtitle>web developer</Subtitle>

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
                    </div>
                </div>
            </header>
            <main
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "900px",
                    paddingLeft: "10px",
                    paddingRight: "10px;",
                }}
            >
                <Hero>
                    <Heading1>Projects</Heading1>
                </Hero>
            </main>
        </div>
    );
};

export default IndexPage;
