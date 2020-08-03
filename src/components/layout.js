import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from "./header.js"

import { rhythm} from "../utils/typography"

const Layout = ({ location, title, children }) => {
  //const rootPath = `${__PATH_PREFIX__}/`

  return (
    <Wrapper>
      <Header location={location} title={title} />
      <div id="navbar"><span id="titleInNav"></span>
        <Link activeClassName="active" to="/">Home</Link>
        <Link activeClassName="active" to="/" partiallyActive={true}>All Articles</Link>
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

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
