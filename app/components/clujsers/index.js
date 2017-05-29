import Head from 'next/head'
import Link from 'next/link'

import Section from '../../components/common/section'
import { styles, mediaQueries } from '../../constants'

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/banners/clujsers_community_banner.jpg)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh'
}

const heroDarkOverlay = {
  display: 'block',
  width: '100%',
  height: '100%',
  padding: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  background: 'hsla(0,0%,0%,.6) none repeat scroll 0 0'
}

const ClujsersHero = props => (
  <div>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
      <title>JSHeroes 2017 | Cluj JavaScripters</title>
      <meta
        property="og:title"
        content="JSHeroes 2017 | About Cluj JavaScripters"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="http://www.jsheroes.io/cluj-javascripters"
      />
      <meta
        property="og:image"
        content="http://www.jsheroes.io/static/img/meta/clujsers_community.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta
        property="og:description"
        content="an Open-Source, Community Event by Cluj JavaScripters"
      />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:site_name"
        content="JSHeroes 2017 | About Cluj JavaScripters"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jsheroes" />
      <meta
        name="twitter:title"
        content="JSHeroes 2017 | About Cluj JavaScripters"
      />
      <meta
        name="twitter:description"
        content="an Open-Source, Community Event by Cluj JavaScripters"
      />
      <meta
        name="twitter:image"
        content="http://www.jsheroes.io/static/img/meta/clujsers_community.png"
      />
      <meta name="twitter:creator" content="@jsheroes" />
    </Head>

    <Section
      section={{ style: heroBcgImg }}
      mainContainer={{ style: heroDarkOverlay }}
    />
  </div>
)

module.exports = ClujsersHero
