import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Avatar, Button } from "antd" 
import Logo from "../images/sdiplogo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <Avatar shape="square" size={64} src={Logo} /> {siteTitle}
        </Link>
        {/* <Button style={{float:'right', marginRight:'15px', left:'10px'}}>
          <Link
              to="/contact"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Contact
            </Link>
          </Button> */}
          <Button style={{float:'right', marginRight:'15px', left:'10px'}}>
          <Link
              to="/product"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Product
            </Link>
          </Button>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
