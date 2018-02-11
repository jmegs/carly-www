module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stylus`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `n0w90m9u7i8b`,
        accessToken: `f5d8a8841e188877f0aac832bb0f1b1f8d4b33c6b33eafbf815bee0266c8eb7e`,
      },
    },
  ],
}
