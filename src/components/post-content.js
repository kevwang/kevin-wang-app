import React from 'react'
import Container from '../components/container'
import TOC from '../components/toc'

export default function PostContent({post, children}) {
    return (
      <Container>
        <div className="wrapper">
          <div className="section-headline">
            <h1>{post.title}</h1>
          </div>
          { children }
          <div className='post-content'
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <small>Last updated: {post.publishDate}</small>
        </div>
      </Container>
    )
}
