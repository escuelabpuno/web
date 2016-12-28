import React, {PropTypes} from 'react'

import styles from './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={ styles.footer }>
        <div className={ styles.list }>
          <img src="logos/facebook.png"/>
          <img src="logos/Telegram-2-128.png"/>
          <img src="logos/YouTube.png"/>
        </div>

        <div className={ styles.description }>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            Ut enim ad minim veniam.
          </p>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
}
