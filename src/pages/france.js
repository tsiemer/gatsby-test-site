import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const France = () => (
  <Layout>
    <SEO title="Page two"/>
    <h1>Bonjour, from France</h1>
    <p>Hope our cuisine is as good as imagined!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default France
