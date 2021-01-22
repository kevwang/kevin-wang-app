import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Article from '../components/article-card'

export default function Feed({ allPosts }) {
    // Filter so we only show 2 of the course posts
    let coursePosts = []
    for (let p of allPosts) {
        if (Array.isArray(p.node.tags) && p.node.tags.includes('omscs')) {
            coursePosts.push(p)
        }
    }
    let shuffled = coursePosts.sort(() => 0.5 - Math.random()).slice(0, 2);
    let postsToShow = []
    for (let p of allPosts) {
        // If no tag, it's a project
        if (!Array.isArray(p.node.tags)) {
            p.node.url = 'projects/' + p.node.slug
            postsToShow.push(p)
        } else if (shuffled.includes(p)) {
            p.node.url = 'omscs/' + p.node.slug
            postsToShow.push(p)
        }
    }
    return (
        <div>
            {postsToShow.map(({ node }) => {
                return (
                    <Article key={node.slug} article={node} />
                )
            })}
        </div>
    )
}
