import React, {PropTypes} from 'react'

import styles from './CoworkingItem.css'

export default class CoworkingItem extends React.Component {
  render() {
    const { title, icon } = this.props

    return (
      <div className={ styles.item }>
        <div className={ styles.icon }>{ icon }</div>
        <p className={ styles.name }>{ title }</p>
      </div>
  )
  }
}

CoworkingItem.propTypes = {
}
