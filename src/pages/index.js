import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import * as React from "react";
import { Heading1, Subtitle, Title } from "../components/Typography";
import { Footer, HeaderHero, Hero, Wrapper } from "../components/Hero";
import SocialIcons from "../components/SocialIcons";
import ProjectCard, { ProjectCaption } from "../components/ProjectCard";
import { Button } from "../components/Button";
import { graphql } from "gatsby";
import { Chip } from "../components/Chip";
import { StaticImage } from "gatsby-plugin-image";
import { Column, TwoColumns } from "../components/TwoColumns";
import { CORNER_RADIUS } from "../components/Constants";

// data
const socials = [
    {
        icon: faInstagram,
        link: "https://www.instagram.com/bengreenow",
    },
    {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/bengreenow",
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

const IndexPage = ({ data }) => {
    console.log(data);
    //markup
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
                            }}
                        >
                            <Title>Ben Greenow</Title>
                            <Subtitle>web developer</Subtitle>
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
                            <StaticImage
                                src="../images/ben.jpg"
                                alt="Ben Greenow"
                                style={{
                                    borderRadius: CORNER_RADIUS,
                                    maxHeight: "50vh",
                                    // minWidth: "30em",
                                }}
                            ></StaticImage>
                        </Column>
                        <Column>
                            <p>
                                Hey! I'm Ben, a web developer & designer from
                                the north of England Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Animi rem illum,
                                eum velit omnis laborum deserunt dignissimos
                                nisi natus iste eveniet ipsa nulla mollitia
                                reiciendis nesciunt cumque labore vel esse
                                aspernatur hic, possimus repellendus! Vel
                                nostrum ipsum consectetur eius eveniet?
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
                                    imageComponent={
                                        <StaticImage
                                            src="../images/ben.jpg"
                                            alt="ben"
                                        ></StaticImage>
                                    }
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
            <Footer>
                <Wrapper>
                    <SocialIcons socials={socials}></SocialIcons>
                </Wrapper>
            </Footer>
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
