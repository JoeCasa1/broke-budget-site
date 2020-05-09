import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const { topimage, path, date, description, title } = post.frontmatter
    
    const nextLink = next != null && next.frontmatter != null ? `${next.frontmatter.path}${next.fields.slug}` : null
    const previousLink = previous != null && previous.frontmatter != null ? `${previous.frontmatter.path}${previous.fields.slug}` : null

    const featuredImage = "../../" + topimage

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}
        />
        <h1><span>{title}</span></h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {date}
        </p>
        <hr />
        <img src={featuredImage} alt="" role="presentation" />
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && previous.frontmatter.path === path && (
              <Link to={previousLink} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && next.frontmatter.path === path && (
              <Link to={nextLink} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        path
        title
        date(formatString: "MMMM YYYY")
        description
        topimage
        lessonnumber
      }
    }
  }
`
