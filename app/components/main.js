import Head from 'next/head'
import Header from '../header'
import Nav from '../nav'
import Footer from '../components/footer'
import { styles } from '../constants'

const Layout = props => (
  <div>
    {/* we're using next/head to place this styles in the head tag */}
    <Head>
      <Style />
    </Head>
    <Nav />
    {props.children}
    <Footer />
  </div>
)

const Style = () => (
  <style>{`

    html, body, ul {
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
