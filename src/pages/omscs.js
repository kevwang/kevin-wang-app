import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import HeroImage from '../components/hero-image'
import Root from '../components/root'
import Feed from '../components/feed'
import PostContent from '../components/post-content'
import { Link } from 'gatsby'

const courses = [
  ['cs-6290-high-performance-computer-architecture', 'CS 6290 - High Performance Computer Architecture', '🖥️'],
  ['cs-6420-bayesian-statistics', 'CS 6420 - Bayesian Statistics', '🔢'],
  ['cs-6476-computer-vision', 'CS 6476 - Computer Vision', '👁️'],
  ['cs-6515-graduate-algorithms', 'CS 6515 - Graduate Algorithms','🎓'],
  ['cs-6601-artificial-intelligence', 'CS 6601 - Artificial Intelligence','🧠'],
  ['cs-6644-simulation', 'CS 6644 - Simulation','📊'],
  ['cs-7638-ai-for-robotics', 'CS 7638 - AI for Robotics','🤖'],
  ['cs-7642-reinforcement-learning', 'CS 7642 - Reinforcement Learning','🧠'],
  ['cs-7646-machine-learning-for-trading', 'CS 7646 - Machine Learning for Trading','📈'],
  ['cs-8803-ai-ethics-and-society', 'CS 8803 - AI, Ethics, and Society','👪'],
  ['cse-6242-data-and-visual-analytics', 'CSE 6242 - Data and Visual Analytics','📊'],
]

const allCourseLinks = (
  <div>
  {courses.map((courseTuple) => {
    return (<>{courseTuple[2]}<Link to={courseTuple[0]}>{courseTuple[1]}</Link><br/></>)
  })}
  </div>
)

export default function BlogPostTemplate(props) {
    const allPosts = get(props, 'data.allContentfulBlogPost.edges')
    const siteTitle = get(props, 'data.site.siteMetadata.title')
    const post = get(props, 'data.contentfulBlogPost')
    
    return (
      <Root sidebarOpen={false}>
        <Helmet title={'OMSCS Course Review'} />
        <HeroImage post={post}/>
        <PostContent post={post}>
          {allCourseLinks}
          {/* <Link to='omscs/cs-6476-computer-vision'>CS 6476 - Computer Vision</Link> */}
        </PostContent>
        <Feed allPosts={allPosts}/>
      </Root>
    )
}

export const pageQuery = graphql`
  query OmscsQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: {eq: "omscs"} ) {
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
