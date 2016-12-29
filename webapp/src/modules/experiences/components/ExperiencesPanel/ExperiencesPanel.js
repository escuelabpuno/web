import React, {PropTypes} from 'react'

import Title from 'app/modules/ui/components/Title'
import Subtitle from 'app/modules/ui/components/Subtitle'
import ExperiencesItem from '../ExperiencesItem'

import styles from './ExperiencesPanel.css'

export default class ExperiencesPanel extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Title invert>Experiencias</Title>
        <Subtitle invert>Conoce parte de nuestra historia</Subtitle>
        <ExperiencesItem />
      </div>
    )
  }
}

ExperiencesPanel.propTypes = {
}
