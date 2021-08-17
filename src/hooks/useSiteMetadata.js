import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
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
                    }
                }
            }
        }
    `);
    return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default useSiteMetadata;
