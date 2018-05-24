import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'
import {
  Container,
  Content,
  Section,
  Header,
  Title,
} from '../assets/styles/styles.js'
import SideBar from '../components/side-bar/index'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <Container>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <SideBar />
        <Content>
          <Section>
            <Header>{post.frontmatter.title}</Header>
            <p
              style={{
                ...scale(-1 / 5),
                display: 'block',
                marginBottom: rhythm(1),
                marginTop: rhythm(-1),
              }}
            >
              {post.frontmatter.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />

            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </Section>
        </Content>
      </Container>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
