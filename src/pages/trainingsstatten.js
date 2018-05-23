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
        <Helmet title="KSV-Bochum - Trainingsstätten" />
        <SideBar />
        <Content>
          <Section>
            <Header>Trainingsstätten</Header>
            <Title>Harpener Heide</Title>
            <p>
              Städt. Sporthalle<br />
              Harpener Heide 5<br />
              44805 Bochum<br />
            </p>
            <p>
              Öffnungszeiten:<br />
              Montag bis Freitag<br />
              09:00 bis 12:30<br />
              16:00 bis 21:30<br />
            </p>
            <Title>Schulstraße</Title>
            <p>
              Turnhalle<br />
              Schulstr.7<br />
              44866 Bochum-Wattenscheid<br />
            </p>
            <p>Ansprechperson: Adnan Köklü – Telefon 0157 – 33 53 2292</p>
            <p>
              Öffnungszeiten:<br />
              Montag, Mittwoch, Freitag<br />
              16:00 bis 20:00<br />
            </p>
          </Section>
        </Content>
      </Container>
    )
  }
}

export default Page
