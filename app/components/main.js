import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Speaker from '../components/speaker/speaker'

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
      <div>  
      {/* we're using next/head to place this styles in the head tag */}
        <Head>
          <Style />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
            rel="stylesheet"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <Nav />
        <Hero />
        {this.props.children}

        { /* the Speaker component will have to be rendered inside another container. Just added it here to test that it works */}
        <Speaker />
        <Footer />
      </div>
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
