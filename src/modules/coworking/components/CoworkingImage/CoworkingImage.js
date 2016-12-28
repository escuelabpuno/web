import React, { PropTypes } from 'react'

import styles from './CoworkingImage.css'

export default class CoworkingImage extends React.Component {
  render() {
    return (
      <div className={ styles.images}>
        <img src="images/working.jpg" />
      </div>
    )
  }
}
CoworkingImage.propTypes = {
}
