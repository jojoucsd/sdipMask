/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Navabar from "./navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{marginTop:'15px'}}>
          © {new Date().getFullYear()}, 肇庆智康科技有限责任公司 / Sdip ( Zhaoqing) health technology co., Ltd.
        </footer>
        <footer>
        地址/Address: 肇庆高新区景泰路2号。/ No.6 Jingtai Second Road, GaoXing District, Zhaoqing, GuanDong.
        </footer>
        <footer>
        郵箱/Email: <a href="mailto:info@sdipmask.com">info@sdipmask.com</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
