import React from 'react';
import Img from 'gatsby-image'

export default function HeroImage({post}) {
  return (
    <Img
      style={{
        height: '30vh',
        maxHeight: 400,
        boxShadow: '0px 5px 20px #dddddd',
      }}
      alt={post.title}
      fluid={post.heroImage.fluid}
    />
  )
}

