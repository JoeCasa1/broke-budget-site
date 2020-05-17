const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const lessonPost = path.resolve(`./src/templates/lesson-post.js`)

  return graphql(
    `
      {
        allMdx(
          sort: { order: [ASC, DESC] fields: [frontmatter___path, frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
                topimage
                lessonnumber
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const { path, lessonnumber, title, topimage } = post.node.frontmatter

  //    if (path === 'lessons') { 
        createPage({
          path: `${path}${post.node.fields.slug}`,
          component: lessonPost,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
            title: title,
            location: `${path}${post.node.fields.slug}`,
            topimage: topimage,
            lessonnumber: lessonnumber
          },
        })
    //  } else if (post.node.frontmatter.path === 'articles') {
      //  createPage({
        //  path: `${path}${post.node.fields.slug}`,
         // component: blogPost,
      //     context: {
      //       slug: post.node.fields.slug,
      //       previous,
      //       next,
      //       title: title,
      //       location: `${path}${post.node.fields.slug}`,
      //       topimage: topimage,
      //       lessonnumber: lessonnumber
      //     },
      //   })
      // } else {
      //   createPage({
      //     path: `${path}${post.node.fields.slug}`,
      //     component: blogPost,
      //     context: {
      //       slug: post.node.fields.slug,
      //       previous,
      //       next,
      //       title: title,
      //       location: `${path}${post.node.fields.slug}`,
      //       topimage: topimage,
      //       lessonnumber: lessonnumber

      //     },
      //   })
      // }
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
