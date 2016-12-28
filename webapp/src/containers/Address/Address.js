import React, {PropTypes} from 'react'

import styles from './Address.css'

export default class Address extends React.Component {
  render() {
    return (
      <div className={ styles.address }>
        <h4>Dirección</h4>
        <p>Jr. Lima 718</p>

        <h4>Teléfono</h4>
        <p>+51 546-798</p>

        <h4>Email</h4>
        <p>contacto@escuelab.com</p>
      </div>
    )
  }
}

Address.propTypes = {
}
