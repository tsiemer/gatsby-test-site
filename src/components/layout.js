import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby';

import Header from './header'
import '../styles/css/styles.css'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={"Places of Europe"}/>
        <div class="content-wrapper">
          {children}
        </div>
        <div class="bottomBar">
          <footer>
            Trying out some cool shit!
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
