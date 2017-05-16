import { configureAnchors } from 'react-scrollable-anchor'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

configureAnchors({ offset: -60, scrollDuration: 1000 })
const Main = props => (
  <div>
    {/* we're using next/head to place this styles in the head tag */}
    <Head>
      <title>JSHeroes 2017</title>
      <link href="static/img/favicon.png" rel="shortcut icon" />

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
      {props.children}
    <Footer />
    
    <style jsx global>{`

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
  </div>
)

export default Main
