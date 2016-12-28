import React, {PropTypes} from 'react'

import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import ContactButton from '../../modules/contact/components/ContactButton/ContactButton'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Title>¿Quieres contactarnos?</Title>
        <Subtitle></Subtitle>
        <ContactButton />
      </div>
    )
  }
}

Contact.propTypes = {
}
