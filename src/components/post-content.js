import React from 'react'
import Container from '../components/container'

export default function PostContent({post}) {
    return (
      <Container>
        <div className="wrapper">
          <div className="section-headline">
            <h1>{post.title}</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <small>Last updated: {post.publishDate}</small>
        </div>
      </Container>
    )
}
