import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

import '../styles/css/styles.css';

const BlogsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge =><div class="post-links"><PostLink key={edge.node.id} post={edge.node} /></div>)

  return <div class="posts-container">
    <h1 class="classyTitle">Blog Posts</h1>
    <div class="post-links-container">
      {Posts}
    </div>
    <div class="button-container">
      <a href="/" class="button"> Home </a>
    </div>
  </div>
}

export default BlogsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`