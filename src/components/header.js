import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
            <header className="header">
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={location.pathname === blogPath ? `/articles/` : `/`}
              >
                {NonStretchedImage(data.bannerImage.childImageSharp)}
              </Link>
            </header>
          )
        }}
      />
    )
  }
}

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      },
    }
  }

  return <Image {...normalizedProps} />
}

const bannerQuery = graphql`
 query bannerQuery {
    bannerImage: file(absolutePath: { regex: "/BrokeBudgetBanner.png/" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
          presentationWidth
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