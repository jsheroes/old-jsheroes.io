import Link from 'next/link'
import Section from '../../components/common/section'
import { styles, mediaQueries } from '../../constants'
import communities from '../../data/communities'
import Community from './community'

const renderCommunities = () => {
  return communities.map((community, index) => (
    <Community {...community} key={index} />
  ))
}

const Communities = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div>
      <h2>
        We
        <span> <i className="fa fa-heart fa-1x" aria-hidden="true" /> </span>
        Communities
      </h2>
      <p>
        These JavaScript communities support us by offering their advice,
        promoting the event, participating in the Call for Speakers,
        fundraising and by having a natural collaborative approach.
      </p>
      <ul>
        {renderCommunities()}
      </ul>

      <p>
        These <strong>JavaScript heroes</strong> are the ones who
        bought <strong>Diversity Enthusiast Tickets</strong>, thus making
        it possible for other JavaScript enthusiasts to join, free of charge.
        Cheers to you, <strong>Mihai Potra</strong> (gave away 2 diversity
        tickets) and <strong>Cluj JavaScripters</strong> (gave away 3 diversity
        tickets)!
      </p>
      <br />
      <p>
        For those coming in from JS communities outside Cluj, we
        created <strong>
          Adopt a JavaScripter - a couch-surfing
          program
        </strong>, during the conference: let us know if you can
        {' '}
        <strong>
          <Link href="https://goo.gl/forms/vwVFBFBFsdUxnQmV2">
            <a className="be-a-host" target="_blank">host</a>
          </Link>
        </strong>
        {' '}
        or if you want to be a
        {' '}
        <strong>
          <Link href="https://goo.gl/forms/RvxXMDXXgmw7Z4h73">
            <a className="be-a-guest" target="_blank">guest</a>
          </Link>
        </strong>. For any questions, contact us at
        {' '}
        <Link href="mailto: contact@jsheroes.io">
          <a className="mail-to" target="_top">
            <strong>welcome@jsheroes.io</strong>
          </a>
        </Link>
      </p>
      <br />
      <br />
      <p>
        <strong>#humansofjavascript</strong>
      </p>
    </div>

    <style jsx>{`
      div {
        padding: 60px 0 140px;
      }

      h2 {
        text-align: center;
        font-size: 54px;
        color: ${styles.mainColor2};
        font-weight: 700;
        margin: 0 auto 30px;
      }

      p {
        margin: 0 0 10px;
        font-size: 18px;
        color: ${styles.mainColor7};
        line-height: 32px;
        font-weight: 300;
        text-align: center;
      }

      ul {
        margin-top: 35px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-bottom: 60px;
      }
      
      .be-a-host,
      .be-a-guest,
      .be-a-host:hover,
      .be-a-guest:hover {
        color: #228dcb;
        fill: #228dcb;
      }
      
      @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
        div {
          padding: 90px 0 0;
        }
        
        h2 {
          font-size: 46px;
        }
        
        p {
          font-size: 17px;
          line-height: 30px;
        }
      }
      
      @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
        div {
          padding: 70px 0 0;
        }
        
        h2 {
          font-size: 43px;
        }
        
        p {
          font-size: 18px;
          line-height: 32px;
        }
      }

      @media only screen and (max-width: ${mediaQueries.S}) {
        div {
          padding: 80px 0 0;
        }
        
        h2 {
          font-size: 33px;
        }
        
        p {
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 20px;
        }
      }
      
      .mail-to {
        text-transform: none;
        color: ${styles.mainColor1};
        font-weight: 800;
      }
    `}</style>
  </Section>
)

module.exports = Communities
