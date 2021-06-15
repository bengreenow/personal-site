module.exports = {
    siteMetadata: {
        title: "Ben Greenow",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Questrial`, `Old Standard TT`],
                display: "swap",
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-fontawesome-css`,
    ],
};
