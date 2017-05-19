import { configureAnchors } from 'react-scrollable-anchor'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

configureAnchors({ offset: -60, scrollDuration: 1000 })
const Main = props => (
  <div>
    {/* we're using next/head to place this styles in the head tag */}
    <Head>

      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta
        name="keywords"
        content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers,
       june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community,
        meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets"
      />
      <meta
        name="description"
        content="an Open-Source, Community Event by Cluj JavaScripters"
      />
      <meta
        name="News_Keywords"
        content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers,
       june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community,
        meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets"
      />

      <title>JSHeroes 2017</title>
      <meta property="og:title" content="JSHeroes 2017 | Schedule Overview" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.jsheroes.io/" />
      <meta
        property="og:image"
        content="http://www.jsheroes.io/static/img/meta/jsheroes_banner.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta
        property="og:description"
        content="We have an amazing list of speakers from around the world! Join us in Cluj-Napoca, Romania"
      />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:site_name"
        content="JSHeroes 2017 | Schedule Overview"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jsheroes" />
      <meta name="twitter:title" content="JSHeroes 2017 | Schedule Overview" />
      <meta
        name="twitter:description"
        content="We have an amazing list of speakers from around the world! Join us in Cluj-Napoca, Romania"
      />
      <meta
        name="twitter:image"
        content="http://www.jsheroes.io/static/img/meta/jsheroes_banner.png"
      />
      <meta name="twitter:creator" content="@jsheroes" />

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
    {props.tickets ? null : <Nav />}

    {props.children}

    {props.tickets ? null : <Footer />}

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
