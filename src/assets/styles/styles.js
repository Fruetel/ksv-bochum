import styled from 'styled-components'
import Link from 'gatsby-link'

export const Container = styled.div`
  background-color: #ffffff;
  padding-top: 2px;
`

export const Content = styled.div`
  margin-left: 200px;
  background-color: #d9d1bc;
  padding: 2px;
  min-height: 800px;
  @media (max-width: 640px) {
    margin-left: 0;
    min-height: 0;
  }
`

export const Posts = styled.div`
  padding: 0 1.5rem;
`

export const Section = styled.div`
  padding: 1.5rem 1.5rem;
`

export const Header = styled.h2`
  font-family: arial, helvetica, sans-serif;
  margin: 0 0 1rem 0;
  padding: 0;
`

export const Title = styled.h3`
  font-family: arial, helvetica, sans-serif;
  margin: 0;
  padding: 0;
`

export const A = styled(Link)`
  box-shadow: none;
  color: #464544;
  :hover {
    text-decoration: underline;
  }
`
