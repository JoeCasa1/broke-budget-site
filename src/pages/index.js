import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "The Broke Budget"
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="The Broke Budget"
          keywords={[`budget`, `finances`, `broke`, `bills`]}
        />
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
      </Layout>
    )
  }
}

export default IndexPage