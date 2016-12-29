import React, { Component } from 'react'
import Welcome from 'app/modules/welcome/components/Welcome'
import CoworkingPanel from 'app/modules/coworking/components/CoworkingPanel'
import ExperiencesPanel from 'app/modules/experiences/components/ExperiencesPanel'
// import Contact from './Contact/Contact'
// import Address from './Address/Address'
// import Footer from './Footer/Footer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <CoworkingPanel />
        <ExperiencesPanel />
        {/* <Contact />
        <Address />
        <Footer /> */}
      </div>
    )
  }
}

App.propTypes = {}
