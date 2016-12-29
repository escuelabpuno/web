import React, {PropTypes} from 'react'
import Slider from 'react-slick'

import ExperiencesItem from '../ExperiencesItem'
import AngleRight from 'react-icons/lib/fa/angle-right'
import AngleLeft from 'react-icons/lib/fa/angle-left'

import styles from './ExperiencesSlider.css'

class LeftNavButton extends React.Component {
  render() {
    const { className, ...props } = this.props
    return <a className={ styles.prevArrow } onClick={ this.props.onClick } ><AngleLeft/></a>
  }
}

class RightNavButton extends React.Component {
  render() {
    const { className, ...props } = this.props
    return <a className={ styles.nextArrow } onClick={ this.props.onClick } ><AngleRight/></a>
  }
}

export default class ExperiencesSlider extends React.Component {
  render() {
    const { items } = this.props

    const settings = {
      dots: true,
      dotsClass: styles.dots,
      draggable: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <RightNavButton />,
      prevArrow: <LeftNavButton />
    }

    return (
        <Slider {...settings }>
          { items.map((item, index) => (
            <div key={ index }>
              <ExperiencesItem
                year={ item.year }
                description={ item.description }
                image={ item.image }
              />
            </div>
          )) }
        </Slider>
    )
  }
}

ExperiencesSlider.propTypes = {
}
