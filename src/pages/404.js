import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found">
    <h1>SORRY</h1>
    <p>We couldn't find that page</p>
    </div>
  </Layout>
)

export default NotFoundPage
