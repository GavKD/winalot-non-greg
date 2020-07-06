import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

//import imagineLogo from '../images/imagine-immediate-logo.png';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-outer">
      <div className="header-advertisement-text-con">
          <div className="header-advertisement-text">advertisement feature</div>
      </div>
      <div className="header-inner">
      <OutboundLink href="http://www.immediate.co.uk" target="_blank"><div className="immediate-logo"></div></OutboundLink>
          <div className="header-logo header-logo-mobile">
              <Link to="/">Great<br/>British Dogs</Link>
          </div>
          <div className="header-logo header-logo-desktop">
              <Link to="/">Great British Dogs</Link>
          </div>
          <OutboundLink href="https://ad.doubleclick.net/ddm/trackclk/N9084.819834IMMEDIATEMEDIA.CO.UK/B23199590.255662547;dc_trk_aid=451520717;dc_trk_cid=70934587;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=" target="_blank"><div className="winalot-logo"></div></OutboundLink>
          <img src="https://ad.doubleclick.net/ddm/trackimp/N9084.819834IMMEDIATEMEDIA.CO.UK/B23199590.255662547;dc_trk_aid=451520717;dc_trk_cid=70934587;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?" border="0" height="0" width="0" alt="Advertisement"></img>
      </div>
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
