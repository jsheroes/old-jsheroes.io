import Section from '../components/common/section'
import { styles, mediaQueries } from '../constants'

const Sponsors = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div>
      <h2>Our Sponsors</h2>
      <p>
        If you wish to participate as a sponsor to our event contact us&nbsp;
        <a className="mail-to" href="mailto: contact@jsheroes.io" target="_top">
          <strong>welcome@jsheroes.io</strong>
        </a>
      </p>
      <p>These are the companies that joined our mission:</p>

      <ul className="sponsors-list">
        <li>
          <a href="https://www.evozon.com/" target="_blank">
            <img
              src="static/img/sponsors/evozon.png"
              alt="evozon"
              title="Evozon"
              className="logo-sponsor"
            />
          </a>
        </li>

        <li>
          <a href="https://www.fortech.ro/" target="_blank">
            <img
              src="static/img/sponsors/fortech.png"
              alt="fortech"
              title="Fortech"
              className="logo-sponsor"
            />
          </a>
        </li>
        <li>
          <a href="https://www.scoalainformala.ro/" target="_blank">
            <img
              src="static/img/sponsors/scoala-informala.jpg"
              alt="scoala informala"
              title="Informal School of IT"
              className="logo-sponsor"
            />
          </a>
        </li>

        <li>
          <a
            href="http://www.nielsen.com/eu/en/solutions/capabilities/nielsen-marketing-cloud.html"
            target="_blank"
          >
            <img
              src="static/img/sponsors/nielsen-mc.png"
              alt="nielsen"
              title="Nielsen Marketing Cloud"
              className="logo-sponsor"
            />
          </a>
        </li>

        <li>
          <a href="https://developers.google.com/" target="_blank">
            <img
              src="static/img/sponsors/google-dev-exp.png"
              alt="Google Developers"
              title="Google Developers"
              className="logo-sponsor"
            />
          </a>
        </li>

        <li>
          <a href="https://moqups.com/" target="_blank">
            <img
              src="static/img/sponsors/moqups.jpg"
              alt="Moqups"
              title="Moqups"
              className="logo-sponsor"
            />
          </a>
        </li>

        <li>
          <a href="https://catalysts.cc/" target="_blank">
            <img
              src="static/img/sponsors/catalysts.jpg"
              alt="Catalyst"
              title="Catalyst"
              className="logo-sponsor"
            />
          </a>
        </li>

        <li>
          <a href="https://www.logmeininc.com/" target="_blank">
            <img
              src="static/img/sponsors/log-me-in.png"
              alt="LogMeIn"
              title="LogMeIn"
              className="logo-sponsor"
            />
          </a>
        </li>

        <li>
          <a href="https://www.connatix.com/" target="_blank">
            <img
              src="static/img/sponsors/connatix.png"
              alt="Connatix"
              title="Connatix"
              className="logo-sponsor"
            />
          </a>
        </li>

        <li>
          <a href="https://www.accenture.com/" target="_blank">
            <img
              src="static/img/sponsors/accenture.png"
              alt="Accenture"
              title="Accenture"
              className="logo-sponsor"
            />
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`

      div {
        padding: 140px 0 0;
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

      
      .sponsors-list {
        margin-top: 35px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        border-bottom: 1px dotted gray;
      }
      
      li {
        display: inline-block;
        margin: 0 15px 10px;
        list-style: outside none none;
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
      }
      
      img {
        max-width: 188px;
        vertical-align: middle;
        border: 0;
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        filter: grayscale(100%);
        transition: all .5s ease;
      }

      img:hover {
        -webkit-filter: grayscale(0%);
        -moz-filter: grayscale(0%);
        filter: grayscale(0%);
      }
          
      .mail-to {
        text-transform: none;
        color: ${styles.mainColor1};
        font-weight: 800;
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
        
        li {      
          margin-bottom: 25px;
          margin-left: 30px;
          margin-right: 30px;
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
        
        li {      
          margin-bottom: 25px;
          margin-left: 30px;
          margin-right: 30px;
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
        li {      
          margin-bottom: 31px;
          margin-left: 12px;
          margin-right: 12px;
        }
        
      }
      
      
    `}</style>
  </Section>
)

module.exports = Sponsors
