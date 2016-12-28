import React, {PropTypes} from 'react'
import classnames from 'classnames'

import styles from './Title.css'

export default class Title extends React.Component {
  render() {
    // const opp = this.props.children
    const { children, className } = this.props

    return (
      <div className={ classnames(styles.title, className) }>{ children }</div>
    )
  }
}

Title.propTypes = {
}
