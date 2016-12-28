import React, {PropTypes} from 'react'

import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import ExperiencesItem from '../../modules/experiences/components/ExperiencesItem/ExperiencesItem'

import styles from './Experiences.css'

export default class Experiences extends React.Component {
  render() {
    return (
      <div className={ styles.container}>
        <Title>Experiencias</Title>
        <Subtitle>Conoce parte de nuestra historia</Subtitle>
        <ExperiencesItem />
      </div>
    )
  }
}

Experiences.propTypes = {
}
