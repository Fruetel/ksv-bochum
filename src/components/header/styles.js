import styled from 'styled-components'
import Link from 'gatsby-link'

export const Container = styled.div`
  background: #d9d1bc;
  height: 266px;
`

export const Logo = styled(Link)`
  width: 266px;
  height: 261px;
  color: #52616e;
  display: block;
  float: left;
  box-shadow: none;
  @media (max-width: 768px) {
    float: none;
    margin: 0 auto;
  }
`

export const Navigation = styled.div`
  margin-left: 266px;
  padding-left: 2em;
  @media (max-width: 768px) {
    display: none;
  }
`

export const HeadLine = styled.h1`
  font-weight: bold;
  font-size: 1.9rem;
  color: #000000;
  padding: 2rem 0 0 0;
`

export const HomeLink = styled(Link)`
  color: #000000;
  box-shadow: none;
`

export const TagLine = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
  color: #666666;
  font-family: arial, helvetica, sans-serif;
  margin-top: 0;
`

export const Navbar = styled.ul`
  background-color: #4b5360;
  list-style-type: none;
  display: block;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  display: inline-block;
  padding: 0 0.4rem;
  margin: 0.5rem 0;
`

export const NavLink = styled(Link)`
  color: #ffffff;
  font-weight: bold;
  box-shadow: none;
  font-size: 0.85rem;
`

const TeaserImage = styled.li`
  display: inline-block;
  width: 33%;
  height: 97px;
  border-right: 1px solid white;
`

export const Img1 = styled(TeaserImage)`
  background-color: #ff0000;
`

export const Img2 = styled(TeaserImage)`
  width: 34%;
  background-color: #00ff00;
`

export const Img3 = styled(TeaserImage)`
  background-color: #0000ff;
  border: none;
`
