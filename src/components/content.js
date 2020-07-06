/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Footer from "./footer"
// import "./layout.css"

const Content = ({ storyContent }) => (
        <div className="content-main">
          <main>
            <div dangerouslySetInnerHTML={{
              __html: storyContent
            }}/>
          </main>
        </div>
)

Content.propTypes = {
  storyContent: PropTypes.node.isRequired,
}

export default Content
