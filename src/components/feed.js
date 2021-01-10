import React from 'react'
import ArticlePreview from '../components/article-preview'

export default function Feed({ allPosts }) {
    return (
        <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
                {allPosts.map(({ node }) => {
                    return (
                        <li key={node.slug}>
                        <ArticlePreview article={node} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
