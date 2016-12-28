import React, {PropTypes} from 'react'

import Title from 'app/modules/ui/components/Title'
import Subtitle from 'app/modules/ui/components/Subtitle'
import CoworkingImage from '../CoworkingImage'
import CoworkingList from '../CoworkingList'

import styles from './CoworkingPanel.css'

export default class CoworkingPanel extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
      <Title>Coworking</Title>
      <Subtitle>Disfrute de trabajar en un espacio cómodo y céntrico</Subtitle>
      <CoworkingImage />
      <CoworkingList />
    </div>
    )
  }
}

CoworkingPanel.propTypes = {
}
