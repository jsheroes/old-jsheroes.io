import Head from 'next/head'
import Link from 'next/link'

import Section from '../../components/common/section'
import { styles, mediaQueries } from '../../constants'

let heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/banners/header_background.jpg)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const ticketsBcg = {
  marginTop: 70 + 'px',
  backgroundColor: '#f8f8fa'
}

const CompTickets = props => (
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
      <title>JSHeroes 2017 | Tickets</title>
      <meta property="og:title" content="JSHeroes 2017 | Tickets" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.jsheroes.io/tickets" />
      <meta
        property="og:image"
        content="http://www.jsheroes.io/static/img/meta/tickets.jpg"
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta
        property="og:description"
        content="an Open-Source, Community Event by Cluj JavaScripters"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="JSHeroes 2017 | Tickets" />
      <meta name="twitter:site" content="@jsheroes" />
      <meta name="twitter:title" content="JSHeroes 2017 | Tickets" />
      <meta
        name="twitter:description"
        content="an Open-Source, Community Event by Cluj JavaScripters"
      />
      <meta
        name="twitter:image"
        content="http://www.jsheroes.io/static/img/meta/tickets.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@jsheroes" />

      <link rel="stylesheet" type="text/css" href="https://css.tito.io/v1.1" />
      <script src="https://js.tito.io/v1" async />
    </Head>

    <Section
      section={{ style: heroBcgImg }}
      mainContainer={{ style: ticketsBcg }}
    >
      <div className="row main-tickets">

        <div className="about-tickets">
          <br />
          <h5>JSHeroes 2017</h5>
          <p>
            <small>
              JSHeroes is a not-for-profit community conference run by a
              team of volunteers from the Cluj JavaScripters community.
            </small>
          </p>
          <p>
            <small>
              <strong>
                Early Bird Tickets are sold out.
              </strong>
            </small>
          </p>
          <p><small>As you might expect, each ticket includes:</small></p>
          <ul>
            <li>
              <small>2 days fully packed with high-class JS talks,</small>
            </li>
            <li>
              <small>
                premium catering lunch on both days (vegan options
                available) and coffee breaks
              </small>
            </li>
          </ul>
          <p>
            <small>
              The meetup with the speakers, on June 7th, is not
              included in any of the conference tickets' price. For that,
              follow the updates and RSVP on the Cluj JavaScripters group
              from Meetup.com{' '}
            </small>
          </p>
        </div>

        <div className="logo-to-homepage">
          <br />
          <Link href="/">
            <a>
              <img
                src="./static/img/profile_all_js_heroes_social_media.png"
                alt="JSHeroes Logo"
                className="jsheroes-logo"
              />
            </a>
          </Link>
        </div>
      </div>

      <br />
      <div className="row">
        <div className="main-payment-service">
          <tito-widget
            event="cluj-javascripters/jsheroes-2017"
            ssl-check-disabled
          />
        </div>
      </div>
    </Section>

    <style jsx>{`
      * {
        box-sizing: border-box;
      }
      
      :after,
      :before {
        box-sizing: border-box;
      }
      
      .row {
        display: table;
        width: 100%;
      }
      
      .row:before,
      .row:after {
        content: " ";
        display: table;
      }
      
      .row:after {
        clear: both;
      }
      
      .about-tickets {
        width: 83.33333333%;
        float: left;
      }
      
      h5 {
        margin: 0 auto 30px;
        font-size: 28px;
        font-weight: 500;
        line-height: 32px;
        color: #111;
      }
      
      p {
        margin: 0 0 10px;
        font-size: 18px;
        color: #555;
        line-height: 32px;
        font-weight: 300;
      }
      
      .logo-to-homepage {
        width: 16.666667%;
        float: left;
      }
      
      .logo-to-homepage a {
        width: 165px;
        height: 165px;
      }
      
      img {
        width: 100%;
        height: auto;
        vertical-align: middle;
      }
          
      ul {
       margin: 0 auto 20px;
       padding-left: 40px;
      }
      li {
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
        margin: 0 auto 10px;
      }
      
      small {
        font-size: 85%;
      }
      
      .main-payment-service {
        width: 100%;
        float: left;
      }
      

    `}</style>

    <style jsx global>{`
      #tito-tito-cluj-javascripters-jsheroes-2017-1-tickets-embed {
         max-width: none!important;
      }
      
      .tito-ticket.row {
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
        margin: 0 auto 10px;
      }      
      
      .tito-ticket-description {
        line
      }
      
      .tito-badge-link a {
          color: #228dcb;
          fill: #228dcb;
      }
    `}</style>
  </div>
)

module.exports = CompTickets
