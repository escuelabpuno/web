import React, {PropTypes} from 'react'

import styles from './ContactButton.css'

export default class ContactButton extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <button>ESCRÍBENOS</button>
      </div>
  )
  }
}

ContactButton.propTypes = {
}
