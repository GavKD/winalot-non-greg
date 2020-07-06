import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	FacebookShareButton,
	TwitterShareButton,
} from 'react-share';

const Share = ({ socialConfig, tags }) => (
	<div className="post-social">
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
			<span className="icon">
				{/* <FontAwesomeIcon icon={['fab', 'facebook-f']} /> */}
			</span>
			<span className="text">Facebook</span>
		</FacebookShareButton>
		<TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} hashtags={tags} >
			<span className="icon">
				{/* <FontAwesomeIcon icon={['fab', 'twitter']} /> */}
			</span>
			<span className="text">Twitter</span>
		</TwitterShareButton>
	</div>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;