import React from 'react'

import { Container, A } from './styles.js'

class Footer extends React.Component {
  render() {
    return (
      <Container>
        &copy; 2018 KSV-Bochum &nbsp;
        <A to="/impressum">Impressum</A>
        &nbsp;
        <A to="/datenschutz">Datenschutzerklärung</A>
      </Container>
    )
  }
}

export default Footer
