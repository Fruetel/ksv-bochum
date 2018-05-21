import React from 'react'

import { Container, Topic, Menu, Header, Banner } from './styles'

class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Header>Themen</Header>
        <Menu>
          <li>
            <Topic to="/trainingsstatten">Trainingsstätten</Topic>
            <Topic to="/ansprechpersonen">Ansprechpersonen</Topic>
            <Topic to="/impressum">Impressum</Topic>
          </li>
        </Menu>
        <Banner frameBorder="0" seamless="seamless" src="/banner.html" />
      </Container>
    )
  }
}

export default SideBar
