import React, {PropTypes} from 'react'

import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import WelcomeLogo from '../../modules/welcome/components/WelcomeLogo/WelcomeLogo'

import styles from './Welcome.css'

export default class Welcome extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <WelcomeLogo />
        <Title>Escuelab</Title>
        <Subtitle>Aprende compartiendo, comparte aprendiendo</Subtitle>
      </div>
    )
  }
}

Welcome.propTypes = {
}
