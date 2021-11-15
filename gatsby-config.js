module.exports = {
    siteMetadata: {
        title: "Ben Greenow",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    pages: require.resolve(
                        "./src/components/default-page-layout.js"
                    ),
                },
            },
        },
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
                fonts: [`Questrial`],
                display: "swap",
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-react-helmet`,
    ],
};
