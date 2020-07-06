import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import imagineLogo from '../images/imagine-immediate-logo.png';

const BackButton = ({page, link}) => (
    <div className={`back-button-con back-${page}`}>
        <Link to={`/${link}`}>
          <div className={`back-button back-button back-button-${page}`}></div>
        </Link>
    </div>
)

export default BackButton
