import ScrollableAnchor from 'react-scrollable-anchor'
import Link from 'next/link'

import Section from '../components/common/section'
import { styles, mediaQueries } from '../constants'

const Contact = props => (
  <Section section={{ style: { backgroundColor: styles.mainColor4 } }}>
    <ScrollableAnchor id={'contact'}>
      <div>
        <h2>Contact us</h2>
        <p>
          You have questions? You need help? Please feel free to reach out at
          {' '}
          <Link href="mailto: contact@jsheroes.io">
            <a className="mail-to" target="_top">
              <strong>welcome@jsheroes.io</strong>
            </a>
          </Link>
        </p>
        <p>
          We'd be more than happy to assist you in any possible way.
        </p>

        {props.newsletter
          ? null
          : <ul>
              <li>
                <a href="https://www.facebook.com/clujsers" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="https://twitter.com/jsheroes" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/cluj-javascripters/"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.meetup.com/Cluj-Javascripters/"
                  target="_blank"
                >
                  <i className="fa fa-meetup" aria-hidden="true" />
                </a>
              </li>
            </ul>}

      </div>
    </ScrollableAnchor>

    <style jsx>{`
      div {
        padding: 140px 0 80px;
        text-align: center;
      }
            
      li, h2, p {
        color: ${styles.mainColor3};
      }
      
      h2 {
        padding-bottom: 0;
        margin: 0 auto 30px;
        font-size: 54px;
        font-weight: 700;
        line-height: 1.1;
      }
      
      p {
        margin: 0 0 10px;
        font-size: 18px;
        line-height: 32px;
        font-weight: 300;
      }

      .mail-to {
        text-transform: none;
        color: ${styles.mainColor3};
        font-weight: 800;
      }
      
      ul {
        margin: 0;
        padding: 30px 0 0;
        overflow: hidden;
        position: relative;
      }
        
      li {
        display: inline-block;
        list-style: outside none none;
        vertical-align: middle;
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
        margin: 0 auto 10px;
      }
        
      li a {
        width: 80px;
        border: 1px solid #5a5858;
        border-radius: 50%;
        color: ${styles.mainColor3};
        display: block;
        font-size: 35px;
        height: 80px;
        line-height: 80px;
        margin: 0 22px;
        transition-duration: .5s;
      }

      li a:hover {
        color: ${styles.mainColor6};
        fill: ${styles.mainColor6};
        border-color: ${styles.mainColor6};
      }
      
      @media only screen and (max-width: ${mediaQueries.S}) {
        li a {
          font-size: 25px;
          height: 50px;
          line-height: 48px;
          margin: 6px;
          width: 50px;
        }
      }
     
    `}</style>
  </Section>
)

module.exports = Contact
