import React from 'react'
import Container from '../components/container'

export default function PostContent({post}) {
    return (
      <Container>
          <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p style={{ display: 'block' }}>
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Container>
    )
}
