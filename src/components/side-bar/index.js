import React from 'react'

import { Container, Topic, Menu, Header, Banner } from './styles'

class SideBar extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src =
      '//www.sparkasse-bochum-24.de/adserver/www/delivery/asyncjs.php'
    script.async = true

    document.body.appendChild(script)
  }

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
        <Banner id="banner">
          <div
            dangerouslySetInnerHTML={{
              __html: `
						<ins
							data-revive-zoneid="135"
							data-revive-id="dfcee09c86a3c30c6d008de9ccd6d9e3"
						></ins>
						`,
            }}
          />
        </Banner>
      </Container>
    )
  }
}

export default SideBar
