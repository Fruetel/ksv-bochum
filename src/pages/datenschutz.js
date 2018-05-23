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
        <Helmet title="KSV-Bochum - Datenschutzerklärung" />
        <SideBar />
        <Content>
          <Section>
            <Header>Datenschutzerklärung</Header>
            <p>
              Die Website des KSV-Bochums wurde so umgesetzt, dass eine
              Verarbeitung personenbezogener Daten weitestgehend vermieden wird.
              Fragen zum Datenschutz können Sie per E-Mail an
              datenschutz@ksv-bochum.de stellen.
            </p>
            <Title>Webserver Logs</Title>
            <p>
              Der Webserver dieser Website schreibt Logdateien, in denen Datum
              und Uhrzeit des Zugriffs, die IP Adresse des Benutzers, Typ und
              Version des Browsers, sowie die URL der Seite, über die der
              Benutzer zur aufgerufenen Seite gelangt ist, festgehalten werden.
              Diese Daten werden ausschließlich erfasst, um bei Missbrauch oder
              Fehlfunktion der Website geeignete Gegenmaßnahmen ergreifen zu
              können. Darüber hinaus erfolgen keine Auswertungen oder Weitergabe
              dieser Daten.
            </p>
            <Title>Werbebanner der Sparkasse Bochum</Title>
            <p>
              Auf einigen Seiten dieser Website ist ein Werbebanner der
              Sparkasse Bochum eingebunden. Beim Laden dieses Banners werden IP
              Adressen sowie die Daten des Browsers an den Adserver der
              Sparkasse Bochum übertragen. Ferner wird durch die Auslieferung
              des Banners ein Cookie gesetzt, mit dem die Sparkasse Bochum
              wiederkehrende Besucher erkennen kann.
            </p>
            <p>
              Das Laden des Werbebanners kann verhindert werden, indem die
              Ausführung von Javascript im Browser deaktiviert wird. Es ist
              allerdings möglich, dass diese Website dann nicht mehr korrekt
              dargestellt werden kann.
            </p>
          </Section>
        </Content>
      </Container>
    )
  }
}

export default Page
