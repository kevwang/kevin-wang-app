import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import React from 'react'
import Sidebar from '../components/sidebar'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class TestPage extends React.Component {
  render() {
    return (
      <Sidebar />
    )
  }
}

export default TestPage
