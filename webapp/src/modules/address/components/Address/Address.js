import React, {PropTypes} from 'react'

import styles from './Address.css'

export default class Address extends React.Component {
  render() {
    return (
      <div className={ styles.address }>
        <h4 className={ styles.title }>Dirección</h4>
        <p className={ styles.subtitle }>Jr. Lima 718</p>

        <h4 className={ styles.title }>Teléfono</h4>
        <p className={ styles.subtitle }>+51 546-798</p>

        <h4 className={ styles.title }>Email</h4>
        <p className={ styles.subtitle }>contacto@escuelab.com</p>
      </div>
    )
  }
}

Address.propTypes = {
}
