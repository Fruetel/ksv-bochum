import styled from 'styled-components'
import Link from 'gatsby-link'

export const Container = styled.div`
  width: 200px;
  float: left;
  @media (max-width: 640px) {
    display: none;
  }
  ::after {
    content: '';
    clear: both;
    display: table;
  }
`

export const Header = styled.h3`
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: arial, helvetica, sans-serif;
  text-align: center;
  background-color: #847a67;
  color: #ffffff;
  margin-right: 2px;
`

export const Menu = styled.ul`
  margin-right: 2px;
  list-style-type: none;
`

export const Topic = styled(Link)`
  box-shadow: none;
  margin-top: 1px;
  padding: 0.3rem 0 0.3rem 1rem;
  display: block;
  background-color: #d9d1bc;
  color: black;
  :hover {
    text-decoration: underline;
  }
`

export const Banner = styled.iframe`
  text-align: center;
  width: 140px;
  height: 600px;
  padding: 0;
  margin: 0 auto;
  display: block;
  overflow: hidden;
`
