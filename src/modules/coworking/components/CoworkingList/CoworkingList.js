import React, {PropTypes} from 'react';

import CoworkingItem from '../CoworkingItem/CoworkingItem'

import styles from './CoworkingList.css'

export default class CoworkingList extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <CoworkingItem
          title={ 'INTERNET' }
          image={ 'logos/INTERNET-OVER.png' }/>

        <CoworkingItem
          title={ 'IMPRESORA / FOTOCOPIADORA' }
          image={ 'logos/IMPRESORA-OVER-1.png' }/>

        <CoworkingItem
          title={ 'WORK SPACE' }
          image={ 'logos/ESPACIO-PARA-REUNIONES-OVER-1.png' }/>

        <CoworkingItem
          title={ 'READING NET' }
          image={ 'logos/READING-NET-OVER-1.png' }/>

      </div>)

  }
}

CoworkingList.propTypes = {
};
