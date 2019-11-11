import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {
  Container,
  Content,
  Section,
  Header,
  Title,
} from '../assets/styles/styles.js'
import SideBar from '../components/side-bar/index'

import { rhythm } from '../utils/typography'

class Page extends React.Component {
  render() {
    return (
      <Container>
        <Helmet title="KSV-Bochum - Impressum" />
        <SideBar />
        <Content>
          <Section>
            <Header>Impressum</Header>
            <Title>KSV Bochum</Title>
            <p>
              Harpener Heide 5<br />
              44805 Bochum<br />
            </p>
            <Title>Vorsitzender</Title>
            <p>Sebastian Schaffarczik</p>
            <Title>Geschäftsführer</Title>
            <p>Philipp Steinke</p>
            <p>Verantwortlich für die Website: Thomas Frütel</p>
          </Section>
        </Content>
      </Container>
    )
  }
}

export default Page
