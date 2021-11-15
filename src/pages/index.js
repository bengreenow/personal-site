import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { Heading1, Subtitle, Title } from "../components/Typography";
import { HeaderHero, Hero, Wrapper } from "../components/Hero";

import ProjectCard, { ProjectCaption } from "../components/ProjectCard";
import { Button } from "../components/Button";
import { graphql } from "gatsby";
import { Chip } from "../components/Chip";
import { StaticImage } from "gatsby-plugin-image";
import { Column, TwoColumns } from "../components/TwoColumns";
import { CORNER_RADIUS } from "../components/Constants";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const MicroInteraction = styled.span`
    transition: all 0.5s ease-in-out;
    position: absloute;
    display: inline-block;

    &:hover {
        transform: scale(1.5) rotate(7deg);
        color: #0070ff;
    }
`;

const IndexPage = ({ data }) => {
    console.log(data);
    //markup
    return (
        <div>
            <Helmet>
                <title>Ben Greenow</title>
            </Helmet>
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
                            }}
                        >
                            <Title>Ben Greenow</Title>
                            <Subtitle>software engineer</Subtitle>
                            <a href="#projects">
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
                            </a>
                        </div>
                    </HeaderHero>
                </div>
            </header>

            <Wrapper>
                <Hero>
                    <Heading1>About Me</Heading1>
                    <TwoColumns>
                        <Column>
                            <TwoColumns>
                                <Column>
                                    <StaticImage
                                        src="../images/ben.jpg"
                                        alt="Ben Greenow"
                                        style={{
                                            borderRadius: CORNER_RADIUS,
                                            maxHeight: "50vh",
                                            // aspectRatio: "9 / 16",
                                            // minHeight: "300px",
                                            // minWidth: "30em",
                                        }}
                                    ></StaticImage>
                                </Column>
                            </TwoColumns>
                        </Column>
                        <Column>
                            <p>
                                Hey! I'm Ben, a creative web developer &
                                designer from the north of England. I recently
                                acheived a 1<sup>st</sup>
                                &nbsp;class honours degree in Computer Science
                                from Newcastle University.
                                <br />I love making things with React &
                                JavaScript, and using CSS to create detailed
                                <MicroInteraction>
                                    &nbsp;microinteractions
                                </MicroInteraction>
                                , however I am also familiar with PHP and
                                backend technologies like Django. <br />
                                Below are some of my favourite projects I have
                                completed:
                            </p>
                        </Column>
                    </TwoColumns>
                </Hero>
                <Hero>
                    <Heading1 id="projects">Projects</Heading1>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            flexBasis: "15em",
                        }}
                    >
                        {data.allMdx.nodes.map((node) => {
                            return (
                                <ProjectCard
                                    key={node.id}
                                    title={node.frontmatter.title}
                                    key={node.frontmatter.title}
                                >
                                    <div>
                                        {node.frontmatter.stack.map((x) => {
                                            return (
                                                <Chip
                                                    key={
                                                        node.frontmatter.id + x
                                                    }
                                                >
                                                    {x}
                                                </Chip>
                                            );
                                        })}
                                    </div>
                                    <ProjectCaption>
                                        {node.frontmatter.description}
                                    </ProjectCaption>
                                    <Button href={node.frontmatter.slug}>
                                        Read More
                                    </Button>
                                </ProjectCard>
                            );
                        })}
                    </div>
                </Hero>
            </Wrapper>
            <Footer></Footer>
        </div>
    );
};

export const query = graphql`
    {
        allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                frontmatter {
                    title
                    stack
                    description
                    date
                    slug
                }
                id
            }
        }
    }
`;

export default IndexPage;
