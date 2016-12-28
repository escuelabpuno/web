import React, {PropTypes} from 'react'
import classnames from 'classnames'

import styles from './Subtitle.css'

export default class Subtitle extends React.Component {
  render() {
    const { children, className} = this.props

    return (
      <div className={ classnames(styles.subtitle, className) }>{ children }</div>
    )
  }
}

Subtitle.propTypes = {
}
