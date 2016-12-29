import React, {PropTypes} from 'react'

import Title from 'app/modules/ui/components/Title'
import Subtitle from 'app/modules/ui/components/Subtitle'
import ExperiencesSlider from '../ExperiencesSlider'

import styles from './ExperiencesPanel.css'

export default class ExperiencesPanel extends React.Component {
  render() {
    const items = [{
      image: '/images/experience1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      year: 2016
    }]

    return (
      <div className={ styles.container }>
        <Title invert>Experiencias</Title>
        <Subtitle invert>Conoce parte de nuestra historia</Subtitle>
        <ExperiencesSlider items={ items }/>
      </div>
    )
  }
}

ExperiencesPanel.propTypes = {
}
