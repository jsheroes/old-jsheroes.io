import Link from 'next/link'
import { styles, mediaQueries } from '../constants'

const Footer = () => (
  <footer>
    <div className="contact-us">
      <h2 className="the-h2">Contact us</h2>
      <p className="the-p">
        You have questions? You need help? Please feel free to reach out at
        {' '}
        <a className="mail-to" href="mailto: contact@jsheroes.io" target="_top">
          <strong>welcome@jsheroes.io</strong>
        </a>
      </p>
      <p className="the-p">
        We'd be more than happy to assist you in any possible way.
      </p>
    </div>

    <div className="footer-social-tab">
      <ul className="the-ul">
        <li className="the-li">
          <a
            className="the-anchors"
            href="https://www.facebook.com/clujsers"
            target="_blank"
          >
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
        </li>

        <li className="the-li">
          <a
            className="the-anchors"
            href="https://twitter.com/jsheroes"
            target="_blank"
          >
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>

        <li className="the-li">
          <a
            className="the-anchors"
            href="https://github.com/cluj-javascripters/"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </li>

        <li className="the-li">
          <a
            className="the-anchors"
            href="https://www.meetup.com/Cluj-Javascripters/"
            target="_blank"
          >
            <i className="fa fa-meetup" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>

    <div className="the-footer">
      <p className="footer-p">
        <Link href="/">
          <a className="white-underline-text">
            Code of Conduct
          </a>
        </Link>

        <span className="vertical-divider">&nbsp;&nbsp;|&nbsp;&nbsp;</span>

        <Link href="/">
          <a className="white-underline-text">
            About the Community
          </a>
        </Link>
      </p>

      <p className="footer-p">
        Copyright © 2017&nbsp;
        <Link href="/">
          <a className="text-blue">JSHeroes</a>
        </Link>
        . All Rights Reserved
      </p>

      <p className="footer-p">
        Made with &nbsp;
        <span><i className="fa fa-heart fa-2x" aria-hidden="true" /></span>
        &nbsp; by the Cluj JavaScripters Community
      </p>
    </div>
    <style jsx>
      {`
      .the-footer {
        padding: 50px 0;
        background-color: ${styles.mainColor2};
        text-align: center;
      }
      
      .contact-us {
        padding: 140px 0 30px;
        background-color: ${styles.mainColor4};
        text-align: center;
      }
      
      .footer-social-tab {
        background-color: ${styles.mainColor4};
        padding-bottom: 80px;
        overflow: hidden;
        position: relative;
        text-align: center;
      }

      .the-ul {
        margin: 0;
        padding: 0;
      }
        
      .the-li {
        display: inline-block;
        list-style: outside none none;
        vertical-align: middle;
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
        margin: 0 auto 10px;
      }
        
      .the-anchors {
        border: 1px solid #5a5858;
        border-radius: 50%;
        color: #fff;
        display: block;
        font-size: 35px;
        height: 80px;
        line-height: 80px;
        margin: 0 22px;
        width: 80px;
        transition-duration: .5s;
      }

      .the-anchors:hover {
        color: #228dcb;
        fill: #228dcb;
        border-color: #0098FF;
      }
    
      @media only screen and (max-width: ${mediaQueries.S}) {
        .the-anchors {
          font-size: 25px;
          height: 50px;
          line-height: 48px;
          margin: 6px;
          width: 50px;
        }
      }
      
      .the-li, .the-h2, .the-p {
        color: white;
      }
      
      .the-h2 {
        padding-bottom: 0;
        margin: 0 auto 30px;
        font-size: 54px;
        font-weight: 700;
        line-height: 1.1;
      }
      
      .the-p {
        margin: 0 0 10px;
        font-size: 18px;
        line-height: 32px;
        font-weight: 300;
      }
      
      .mail-to {
        text-transform: none;
        color: white;
      }
      
      .footer-p {
        margin: 0 0 10px;
        color: #fff;
        font-size: 16px;
        line-height: 32px;
        font-weight: 300;
      }
      
      .white-underline-text {
        color: #fff;
        font-size: 16px;
        text-decoration: underline;
        text-transform: none;
        transition-duration: .5s;
      }
      
      .white-underline-text:hover {
        color: #0098FF;
        text-decoration: none;
      }
      
      .vertical-divider {
        position: relative;
        top: -1px;
      }
      
      .text-blue {
        color: #0098FF;
        font-size: 16px;
      }
      
      span {
        position: relative;
        top: 6px;
      }
      
    `}
    </style>
  </footer>
)

module.exports = Footer
