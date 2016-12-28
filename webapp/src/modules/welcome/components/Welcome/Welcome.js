import React, {PropTypes} from 'react'

import Title from 'app/modules/ui/components/Title'
import Subtitle from 'app/modules/ui/components/Subtitle'
import WelcomeLogo from '../WelcomeLogo'

import styles from './Welcome.css'

export default class Welcome extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <WelcomeLogo />
        <Title className={ styles.title } invert>Escuelab</Title>
        <Subtitle className={ styles.subtitle }>Aprende compartiendo, comparte aprendiendo</Subtitle>
      </div>
    )
  }
}

Welcome.propTypes = {
}
