import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Header extends React.Component {
  render() {
    const { location, title } = this.props
    const blogPath = `${__PATH_PREFIX__}/articles/`
    return (
      <StaticQuery
        query={bannerQuery}
      render={data => {
        return (
          <header>
        <Image fixed={data.bannerImage} />
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
            {title}
          </Link>
        </h1>
      </header>
    )
  }
}

const bannerQuery = graphql`
  query bannerQuery {
    bannerImage: file(absolutePath: { regex: "/BrokeBudgetBanner.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


export default Header