import React, {PropTypes} from 'react'
import classnames from 'classnames'

import styles from './Subtitle.css'

export default class Subtitle extends React.Component {
  render() {
    const { children, className, invert} = this.props

    return (
      <div className={ classnames(styles.subtitle, className, { [styles.invert]: invert }) }>{ children }</div>
    )
  }
}

Subtitle.propTypes = {
}
