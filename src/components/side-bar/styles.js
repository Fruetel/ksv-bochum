import styled from 'styled-components'
import Link from 'gatsby-link'

export const Container = styled.div`
  width: 200px;
  float: left;
  ::after {
    content: '';
    clear: both;
    display: table;
  }
`

export const Topic = styled(Link)`
  box-shadow: none;
`
