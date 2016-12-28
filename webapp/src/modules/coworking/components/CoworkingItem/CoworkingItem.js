import React, {PropTypes} from 'react'

import styles from './CoworkingItem.css'

export default class CoworkingItem extends React.Component {
  render() {
    const { title, image } = this.props

    return (
      <div className={ styles.item }>
        <img src={ image } />
        <p>{ title }</p>
      </div>
  )
  }
}

CoworkingItem.propTypes = {
}
