import React from "react"
import { graphql } from "gatsby"

import '../styles/css/styles.css'

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <h1 class="blog-title classyTitle">{frontmatter.title}</h1>
      <div className="blog-post">
        <h2 class="blog-date">{frontmatter.date} | {frontmatter.quote}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div class="button-container">
        <a class="button" href="/blogs">Back</a>
      </div>  
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        quote
        title
      }
    }
  }
`