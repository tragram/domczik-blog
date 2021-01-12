import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../utils/colors"

import { rhythm, scale } from "../utils/typography"

const Container = styled.div`
  display: flex;
`

const HeaderBackground = styled.div`
height: 200px;
  background: ${colors.light};
  margin-bottom: -200px;
  -webkit-box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.68);
  -moz-box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.68);
  box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.68);
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath || true) {
      header = (
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
              color: colors.accent,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <HeaderBackground></HeaderBackground>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            paddingTop: "20px"
          }}
        >
          <Container style={{ height: "200px" }}>
            <header>{header}</header>
          </Container>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()} Dominik Hodan, Built with Gatsby
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${colors.dark};
  position: relative;
`

const Footer = styled.footer`
  text-align: center;
  background: ${colors.medium};
  color: ${colors.dark};
  position: absolute;
  bottom:0;
  width: 100%;
  margin-top: 24px;
`

export default Layout
