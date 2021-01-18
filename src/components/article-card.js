import React from 'react'
import Link from './custom-link';
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple.js/TouchRipple';

const useStyles = makeStyles((theme) => ({
  previewTitle: {
    fontSize: '1.5em',
  },
  
  articleContainer: {
    background: '#fff',
    boxShadow: '0px 5px 20px #dddddd',
    maxWidth: 900,
    padding: 16,
    margin: 'auto',
    marginBottom: 40,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#00000012',
    borderTopStyle: 'none',
    borderRadius: 15,
    '&:hover': {
      transform: 'scale(1.03)',
    },
    transitionDuration: 175,
    transitionProperty: 'transform',
  },

  cardSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
}));

export default function Article({ article }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.articleContainer}>
      <Link to={`/${article.slug}`}>
        <div className={classes.cardSection}>
          <div style={{
            width: '50%'
          }}>
            <Img style={{borderRadius: 10}} alt="" fluid={article.heroImage.fluid} />
          </div>
          <div style={{
            width: '50%',
            paddingLeft: 40
          }}>
            <h3 className={classes.previewTitle}>
              {article.title}
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: article.description.childMarkdownRemark.html,
              }}
            />
            <div></div>
            <small>{article.publishDate}</small>
          </div>
        </div>
      </Link>
    </div>
  )
}
