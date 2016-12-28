import React, {PropTypes} from 'react'

import styles from './Subtitle.css'

export default class Subtitle extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className={ styles.subtitle}>{ children }</div>
    )
  }
}

Subtitle.propTypes = {
}
