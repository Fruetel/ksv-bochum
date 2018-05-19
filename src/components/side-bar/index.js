import React from 'react'

import { Container, Topic } from './styles'

class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <h3>Themen</h3>
        <ul>
          <li>
            <Topic to="/trainingsstatten">Trainingsstätten</Topic>
          </li>
        </ul>
      </Container>
    )
  }
}

export default SideBar
