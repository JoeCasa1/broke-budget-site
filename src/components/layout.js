import React from "react"
import styled from "styled-components"
import Header from "./header.js"

import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(44),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Header location={location} title={title} />
          <div id="navbar">
            <Link activeClassName="active" to="/">Home</Link>
            <Link activeClassName="active" to="/articles">All Articles</Link>
            <Link activeClassName="active" to="/lessons">Budget Guide</Link>
          </div>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()} NinjaSoft, LLC
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
