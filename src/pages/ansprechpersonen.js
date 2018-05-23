import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Content, Section, Header, Title } from './styles.js'
import SideBar from '../components/side-bar/index'

import { rhythm } from '../utils/typography'

class Page extends React.Component {
  render() {
    return (
      <Container>
        <Helmet title="KSV-Bochum - Ansprechpersonen" />
        <SideBar />
        <Content>
          <Section>
            <Header>Ansprechpersonen</Header>
            <Title>Vorsitzender</Title>
            <p>Bruno Piotrowski</p>
            <Title>Geschäftsführer</Title>
            <p>Philipp Steinke</p>
            <Title>Weitere Ansprechpersonen</Title>
            <p>Jan Piotrowski (Trainingsstätte Harpener Heide)</p>
            <p>
              Adnan Köklü (Trainingsstätte Schulstraße, Wattenscheid)<br />
              Telefon: 0157 – 33 53 2292<br />
            </p>
            <p>
              Für Traininsfragen stehen Euch Dominick Wrobel und Tobias Haas zur
              Verfügung.
            </p>
          </Section>
        </Content>
      </Container>
    )
  }
}

export default Page
