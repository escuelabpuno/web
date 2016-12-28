import React, {PropTypes} from 'react'
import FaWifi from 'react-icons/lib/fa/wifi'
import FaPrint from 'react-icons/lib/fa/print'
import FaHome from 'react-icons/lib/fa/home'
import FaBook from 'react-icons/lib/fa/book'

import CoworkingItem from '../CoworkingItem/CoworkingItem'

import styles from './CoworkingList.css'

export default class CoworkingList extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <CoworkingItem
          title={ 'Internet' }
          icon={ <FaWifi /> }
        />

        <CoworkingItem
          title={ 'Fotocopiadora' }
          icon={ <FaPrint />}/>

        <CoworkingItem
          title={ 'Work Space' }
          icon={ <FaHome /> }/>

        <CoworkingItem
          title={ 'Reading Net' }
          icon={ <FaBook /> }/>

      </div>)

  }
}

CoworkingList.propTypes = {
};
