import React, {PropTypes} from 'react'

import styles from './ExperiencesItem.css'

export default class ExperiencesItem extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <h3 className={ styles.date }>2016</h3>
        <img src="images/experience1.jpg" />
        <p className={ styles.description }>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    )
  }
}

ExperiencesItem.propTypes = {
}
