import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "The Broke Budget"
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="The Broke Budget"
          keywords={[`budget`, `finances`, `broke`, `bills`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            😷
          </span>
        </h1>
        <p>If you realize you need a budget and you don't have money to hire an accountant, you are in the right place.</p>
        <p>
          This site will soon be filled with tips and case studies of what normal people with a minnimum income have done to achieve financial comfort.
        </p>
        <p>Now go discover how to improve your budget!</p>
        <Link to="/articles/">
          <Button marginTop="35px">Go to tips</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage