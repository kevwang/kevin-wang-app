import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Article from '../components/article-card'
import Container from '../components/container'
import { DriveEtaOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    articleList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '5vmin',
    }
}));

export default function Feed({ allPosts }) {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <div>
            {allPosts.map(({ node }) => {
                return (
                    <Article key={node.slug} article={node} />
                )
            })}
        </div>
    )
}
