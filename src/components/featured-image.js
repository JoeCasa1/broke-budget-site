import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

class FeaturedImage extends React.Component{
  constructor(data) {
    super(data)
    this.props = data
    const image = data.image 

    this.featuredImageQuery = graphql`
    query {
      featuredImage: file(absolutePath: { regex: $image } ) {
        childImageSharp {
          fluid(maxWidth: 680) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  }

  render() {
    const imageQuery = this.featuredImageQuery
    return (
      <StaticQuery
        query={imageQuery}
        render={data => {
          return (<Image fluid={data.featuredImage.childImageSharp.fluid} />)
        }}
      />
    )
  }
}

export default FeaturedImage
