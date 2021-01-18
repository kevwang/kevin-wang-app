const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                  tags
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          if (Array.isArray(post.node.tags) && post.node.tags.includes('omscs')) {
            createPage({
              path: `/omscs/${post.node.slug}/`,
              component: blogPost,
              context: {
                slug: post.node.slug
              },
            })
          } else if (Array.isArray(post.node.tags) && post.node.tags.includes('not_feed')) {
            // pass
          } else {
            createPage({
              path: `/projects/${post.node.slug}/`,
              component: blogPost,
              context: {
                slug: post.node.slug
              },
            })
          }
        })
      })
    )
  })
}
