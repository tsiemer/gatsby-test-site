import React from 'react'

import Header from '../components/header'
import Section from '../components/section'
import Button from '../components/button'
import Masonry from '../components/masonry'

import SEO from '../components/seo'
import '../styles/css/styles.css'

export default class IndexPage extends React.Component{
  render(){
    return(
      <div>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div class="homePage-Introduction"> 
          <Header siteTitle={"Places of Europe"}/>
          <h1 class="normalTitle introductionTitle colorWhite centered">Explore the world with me!</h1>
        </div>
  
        <Section id="Quotes">
          <div class="flex-container">
            {/* { data.site.siteMetadata.quote !== " " ? ' You haven\'t made a post yet' :
              <Blurb noImg class="flex-item" />
            } */}
            
          </div>
          <div class="flex-container button-container">
            <Button href="/inspiration"> More Quotes </Button>
          </div>
        </Section>
  
        <div class="scallop-up"/>
        <Section class="FrenchVillage">
          <h1 class="classyTitle">Travel.</h1>
          <p class="normalSubTitle">because money returns time doesnt.</p>
        </Section>
        <div class="scallop-down"/>
  
        <Section class="flex-container text-container">
          <div class="flex-item"> 
            <h1 class="classyTitle">Blog posts</h1>
            {/* {Posts} */}
            <p>check out the blog!</p>
            <div class="button-container">
              <a class="button" href="/blogs">Go!</a>
            </div>
          </div>
        </Section>
  
        <Section>
          <Masonry imgUrlOne="https://images.unsplash.com/photo-1508007226633-b7de6a10cb16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"/>
        </Section>
  
        
        <div class="bottomBar">
          <footer>
            Trying out some cool shit!
          </footer>
        </div>
      </div>
    )
  }
}