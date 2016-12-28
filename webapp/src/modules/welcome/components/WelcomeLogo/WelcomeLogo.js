import React, {PropTypes} from 'react'

import styles from './WelcomeLogo.css'

export default class WelcomeLogo extends React.Component {
  render() {
    return (
        <div className={ styles.logo }>
          <img src="logos/logonormal.png"/>
        </div>
    )
  }
}

WelcomeLogo.propTypes = {
}
