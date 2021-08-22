import React from 'react'

import { Container, A } from './styles.js'
import CookieConsent from 'react-cookie-consent'

class Footer extends React.Component {
  render() {
    return (
      <Container>
        &copy; 2021 KSV-Bochum &nbsp;
        <A to="/impressum">Impressum</A>
        &nbsp;
        <A to="/datenschutz">Datenschutzerklärung</A>
        <CookieConsent buttonText="Ok">
          Diese Site benutzt Cookies für eine optimale Funktion. Details zu den
          gesetzten Cookies finden Sie in der{' '}
          <A to="/datenschutz">Datenschutzerklärung</A>. Indem sie dieses Banner
          mit dem Ok-Button schließen oder die Website anderweitig weiter
          verwenden, erklären Sie sich mit der Verwendung von Cookies
          einverstanden.
        </CookieConsent>
      </Container>
    )
  }
}

export default Footer
