import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hub from "../components/hub"
import VideoHeader from "../components/videoHeader"
import FullScreenVideo from "../components/fullScreenVideo"

const IndexPage = () => (
  <Layout>
    <SEO title="greatbritishdogs.co.uk" keywords={[`great`, `british`, `dogs`]} />
    <div className="homepage-background">
      <div className="homepage-container">
        <VideoHeader></VideoHeader>
        <Hub/>
        {/* <SocialShare></SocialShare> */}
      </div>
      <FullScreenVideo></FullScreenVideo>
    </div>
  </Layout>
)

export default IndexPage
