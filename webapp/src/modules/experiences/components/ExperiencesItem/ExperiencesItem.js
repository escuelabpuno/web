import React, {PropTypes} from 'react'

import styles from './ExperiencesItem.css'

export default class ExperiencesItem extends React.Component {
  render() {
    const { year, description, image } = this.props

    return (
      <div className={ styles.container }>
        <h3 className={ styles.date }>{ year }</h3>
        <img src={ image } />
        <p className={ styles.description }>
          { description }
        </p>
      </div>
    )
  }
}

ExperiencesItem.propTypes = {
}
