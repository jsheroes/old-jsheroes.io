import React, { Component } from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import Head from 'next/head'
import Header from '../header'
import Nav from '../nav'
import Footer from '../components/footer'
import Speaker from '../components/speaker/speaker'
import { styles, mediaQueries } from '../constants'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  handleWindowSizeChange(ev) {
    console.log(ev)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  render() {
    return (
      <StickyContainer>
        {/* we're using next/head to place this styles in the head tag */}
        <Head>
          <Style />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
            rel="stylesheet"
          />
        </Head>
        <Sticky>
          {({
            isSticky,
            wasSticky,
            style,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => {
            console.log(distanceFromTop)
            return <Nav style={style} />
          }}

        </Sticky>

        {this.props.children}
        <Speaker />
        <Footer />
      </StickyContainer>
    )
  }
}

const Style = () => (
  <style jsx>{`

    html, body, ul, h1, h2, h3 {
      border: 0;
      margin: 0;
      padding: 0;
    }
  
    body {
      font-size: 18px;
      font-family: Roboto, sans-serif;
    }
    
    ul {
      list-decoration: none;
    }
    
    a {
      text-decoration: none;
    }
    
  `}</style>
)

export default Layout
