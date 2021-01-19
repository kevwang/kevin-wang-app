import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import HeroImage from '../components/hero-image'
import Root from '../components/root'
import Feed from '../components/feed'
import PostContent from '../components/post-content'
import TOC from '../components/toc'

export default function BlogPostTemplate(props) {
    const post = get(props, 'data.contentfulBlogPost')
    const allPosts = get(props, 'data.allContentfulBlogPost.edges')
    const siteTitle = get(props, 'data.site.siteMetadata.title')
    
    return (
      <Root>
        <Helmet title={`${post.title}`} />
        <HeroImage post={post}/>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
        }}>
          <div></div>
          <PostContent post={post} style={{
            gridColumnStart: 2
          }}/>
          <TOC open={true}/>
        </div>
        <Feed allPosts={allPosts}/>
      </Root>
    )
}

export const pageQuery = graphql`
  query BlogPostBySlugTest($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1200) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
