import React, {PropTypes} from 'react'

import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import CoworkingImage from '../../modules/coworking/components/CoworkingImage/CoworkingImage'
import CoworkingList from '../../modules/coworking/components/CoworkingList/CoworkingList'

import styles from './Coworking.css'

export default class Coworking extends React.Component {
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

Coworking.propTypes = {
}
