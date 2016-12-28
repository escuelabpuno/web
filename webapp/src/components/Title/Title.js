import React, {PropTypes} from 'react'

import styles from './Title.css'

export default class Title extends React.Component {
  render() {
    // const opp = this.props.children
    const { children } = this.props

    return (
      <div className={ styles.title }>{ children }</div>
    )
  }
}

Title.propTypes = {
}
