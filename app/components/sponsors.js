import ScrollableAnchor from 'react-scrollable-anchor'
import Section from '../components/common/section'
import { styles, mediaQueries } from '../constants'

const Sponsors = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <ScrollableAnchor id={'sponsors'}>
      <div>
        <h2>Our Sponsors</h2>
        <p>
          If you wish to participate as a sponsor to our event contact us &nbsp;
          <a className="mail-to" href="mailto: contact@jsheroes.io" target="_top">
            <strong>welcome@jsheroes.io</strong>
          </a>
        </p>
        <p>These are the companies that joined our mission:</p>
      </div>
    </ScrollableAnchor>
    <style jsx>{`
    
      * {
        box-sizing: border-box;
      }
      
      :after,
      :before {
        box-sizing: border-box;
      }
    
      .row {
        margin-right: -15px;
        margin-left: -15px;
        min-height: 1px;
      }

      .cf:before,
      .cf:after,
      .row:before,
      .row:after {
        content: " ";
        display: table;
      }
      
      .cf:after,
      .row:after {
        clear: both;
      }
          
      .mail-to {
        text-transform: none;
        color: ${styles.mainColor1};
        font-weight: 800;
      }
      
      div {
        padding: 140px 0;
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

      @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
        div {
          padding: 90px 0;
        }
        
        h2 {
          font-size: 46px;
        }
        
        p {
          font-size: 17px;
          line-height: 30px;
          margin-bottom: 30px;
        }
      }

      @media only screen and (max-width: ${mediaQueries.S}) {
        div {
          padding: 80px 0;
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
    `}</style>
  </Section>
)

module.exports = Sponsors
