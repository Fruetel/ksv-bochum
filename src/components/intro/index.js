import React from 'react'

import { Container, Headline } from './styles'

class Intro extends React.Component {
  render() {
    return (
      <Container>
        <Headline>KSV Bochum</Headline>
        <p>
          Der KSV Bochum wurde im Jahr 1898 gegründet und blickt auf eine über
          100 jährige Geschichte zurück. Nachdem der Verein in seinen Anfängen
          vor allem das Ringen in den Mittelpunkt stellte, widmete er sich nach
          und nach immer mehr dem Kraftsport.
        </p>
        <p>
          Heute bietet der KSV mit seinen Trainingsschwerpunkten Fitness,
          Kraftdreikampf und Gewichtheben vielfältige Trainingsmöglichkeiten für
          alle Kraftsportinteressierten.
        </p>
      </Container>
    )
  }
}

export default Intro
