import React, {PropTypes} from 'react'

import Title from 'app/modules/ui/components/Title'
import Subtitle from 'app/modules/ui/components/Subtitle'
import ContactButton from 'app/modules/contact/components/ContactButton'

import styles from './ContactPanel.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Title className={ styles.title }>¿Quieres contactarnos?</Title>
        <Subtitle></Subtitle>
        <ContactButton />
      </div>
    )
  }
}

Contact.propTypes = {
}
