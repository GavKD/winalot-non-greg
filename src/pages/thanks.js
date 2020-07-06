import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VoucherAd from "../components/voucherAd";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Thanks = () => (
  <Layout>
    <SEO title="Thanks for your submission" keywords={[`great`, `british`, `dogs`]} />
    <div className="thanks-main">
      <div className="form-container">
        <div className="form-title">
          <h1>Thanks for <br/>your submission</h1>
        </div>
        <div className="form-subtitle">
          <h2>Keep checking back to see if your dog has made it onto greatbritishdogs.co.uk. We may be in touch if we need any more information or photos to feature your dog on the site.</h2>
        </div>
        <Link to={`/`}>
          <div className="more-stories-button"></div>
        </Link>
        {/* <VoucherAd></VoucherAd> */}
        <div className="voucher-con">
            <OutboundLink href="https://winalot.katalystcampaigns.co.uk/" target="_blank">
              <div className="voucher-left"></div>
              <div className="voucher-right">
                <div className="voucher-description">
                Get your exclusive printable coupon for Winalot dog food
                  <br/>
                  <br/>
                  <span>
                    <b>Click here</b>
                  </span>
                </div>
              </div>
            </OutboundLink>
          </div>
      </div>
    </div>
  </Layout>
)

export default Thanks
