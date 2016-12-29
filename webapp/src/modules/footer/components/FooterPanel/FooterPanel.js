import React, {PropTypes} from 'react'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaPaperPlane from 'react-icons/lib/fa/paper-plane'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'

import styles from './FooterPanel.css'

export default class FooterPanel extends React.Component {
  render() {
    return (
      <div className={ styles.footer }>
        <div className={ styles.description }>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            Ut enim ad minim veniam.
          </p>
        </div>

        <div className={ styles.list }>
          <FaFacebookSquare />
          <FaPaperPlane />
          <FaYoutubePlay />
        </div>
      </div>
    )
  }
}

FooterPanel.propTypes = {
}
