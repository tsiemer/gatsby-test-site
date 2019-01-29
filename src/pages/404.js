import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = (title) => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not Found</h1>
    <p>This page seems to be lost, don't worry though we have our best detective on the case!</p>
  </Layout>
)

export default NotFoundPage
