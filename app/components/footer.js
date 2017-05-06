import Link from 'next/link'
import Style from './footer.style'

const Footer = () => (
  <footer>
    <Style />

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
  </footer>
)

module.exports = Footer
