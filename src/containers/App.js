import React, { Component } from 'react'
import Welcome from './Welcome/Welcome'
import Coworking from './Coworking/Coworking'
import Experiences from './Experiences/Experiences'
import Contact from './Contact/Contact'
import Address from './Address/Address'
import Footer from './Footer/Footer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Coworking />
        <Experiences />
        <Contact />
        <Address />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {}
