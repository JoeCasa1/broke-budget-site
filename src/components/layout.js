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
        <Header location={location} title={title} />
        <div id="navbar"><span id="titleInNav"></span>
          <Link activeClassName="active" to="/">Home</Link>
          <Link activeClassName="active" to="/articles/" partiallyActive={true}>All Articles</Link>
          <Link activeClassName="active" to="/lessons/" partiallyActive={true}>Budget Guide</Link>
        </div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(44),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
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
