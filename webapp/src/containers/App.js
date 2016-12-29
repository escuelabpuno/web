import React, { Component } from 'react'
import Welcome from 'app/modules/welcome/components/Welcome'
import CoworkingPanel from 'app/modules/coworking/components/CoworkingPanel'
import ExperiencesPanel from 'app/modules/experiences/components/ExperiencesPanel'
import ContactPanel from 'app/modules/contact/components/ContactPanel'
import Address from 'app/modules/address/components/Address'
import FooterPanel from 'app/modules/footer/components/FooterPanel'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <CoworkingPanel />
        <ExperiencesPanel />
        <ContactPanel />
        <Address />
        <FooterPanel />
      </div>
    )
  }
}

App.propTypes = {}
