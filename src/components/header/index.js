import React from 'react'
import Link from 'gatsby-link'

import {
  Container,
  Logo,
  HomeLink,
  Navigation,
  Navbar,
  Li,
  NavLink,
  TagLine,
  HeadLine,
  Img1,
  Img2,
  Img3,
} from './styles.js'

import logo from './logo-ksv-small.png'
import pic1 from './pic_1.jpg'
import pic2 from './pic_2.jpg'
import pic3 from './pic_3.jpg'

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Logo to="/">
          <img src={logo} alt="KSV Bochum" />
        </Logo>
        <Navigation>
          <HeadLine>
            <HomeLink to="/">KSV Bochum</HomeLink>
          </HeadLine>
          <TagLine>Fitness, Gewichtheben, Kraftdreikampf</TagLine>
          <div id="nav">
            <Navbar>
              <Li>
                <NavLink to="/trainingsstatten/">Trainingsstätten</NavLink>
              </Li>
              <Li>
                <NavLink to="/ansprechpersonen/">Ansprechpersonen</NavLink>
              </Li>
              <Li>
                <NavLink to="/impressum/">Impressum</NavLink>
              </Li>
            </Navbar>
          </div>
          <div id="gallery">
            <ul>
              <Img1 />
              <Img2 />
              <Img3 />
            </ul>
          </div>
        </Navigation>
      </Container>
    )
  }
}

export default Header
