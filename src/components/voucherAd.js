import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React, { Component } from "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default class voucherAd extends Component{

  render() {

        return (
          
          <div className="voucher-con">
            <OutboundLink href="https://winalot.katalystcampaigns.co.uk/" target="_blank">
              <div className="voucher-left"></div>
              <div className="voucher-right voucher-green">
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

        )
      }

  }