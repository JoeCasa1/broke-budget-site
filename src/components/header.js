import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
// import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Header extends React.Component {

  constructor(data) {
    super(data)
    this.props = data
  }
  
  render() {
    return (
      <StaticQuery
        query={bannerQuery}
        render={data => {
          const blogPath = `${__PATH_PREFIX__}/articles/`
          const location = this.props.location
          return (
            <header>
              <h1
                style={{
                  ...scale(1.5),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={location.pathname === blogPath ? `/articles/` : `/`}
                >
                  <Image fluid={data.bannerImage.childImageSharp.fluid} />
                </Link>
              </h1>
            </header>
          )
        }}
      />
    )
  }
}

const bannerQuery = graphql`
 query bannerQuery {
    bannerImage: file(absolutePath: { regex: "/BrokeBudgetBanner.png/" }) {
      childImageSharp {
     fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Header