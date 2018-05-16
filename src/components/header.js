import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <a class="home" href="/">
          <img src="/wp-content/themes/ksv/images/logo-ksv-small.png" />
        </a>
        <div id="logo">
          <h1>
            <a href="http://www.ksv-bochum.de/">KSV Bochum</a>
          </h1>
          <p>Fitness, Gewichtheben, Kraftdreikampf</p>
        </div>
        <div id="nav">
          <ul>
            <li>
              <a href="/">Home</a> |{' '}
            </li>
            <li>
              <a href="/trainingsstatten/">Trainingsstätten</a> |
            </li>
            <li>
              <a href="/ansprechpersonen/">Ansprechpersonen</a> |
            </li>
            <li>
              <a href="/impressum/">Impressum</a>
            </li>
          </ul>
        </div>
        <div id="gallery">
          <ul>
            <li class="gwomen">
              <a href="#">Fitness</a>
            </li>
            <li class="gkids">
              <a href="#">Gewichtheben</a>
            </li>
            <li class="gmen">
              <a href="#">Kraftdreikampf</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
