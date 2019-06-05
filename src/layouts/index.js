import React from 'react'
import Link from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'

import { rhythm, scale } from '../utils/typography'
import Header from '../components/header/index'
import Footer from '../components/footer/index'

injectGlobal`
  body {
    background-color: #504634;
    font: 14px verdana, arial, sans-serif;
    color: #695f4c;
    padding-bottom: 10px;
  }
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  padding: 2rem;
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Header />
        {children()}
        <Footer />
      </Container>
    )
  }
}

export default Template
