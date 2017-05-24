import Link from 'next/link'
import { styles } from '../constants'

const Footer = () => (
  <footer>
    <p>
      <Link href="/code-of-conduct">
        <a>Code of Conduct</a>
      </Link>

      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

      <Link href="/">
        <a>About the Community</a>
      </Link>

      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

      <Link href="/newsletter">
        <a>Newsletter</a>
      </Link>
    </p>

    <p>
      Copyright © 2017&nbsp;
      <Link href="/cluj-javascripters">
        <a className="text-blue">JSHeroes</a>
      </Link>
      . All Rights Reserved
    </p>

    <p>
      Made with &nbsp;
      <i className="fa fa-heart fa-2x" aria-hidden="true" />
      &nbsp; by the Cluj JavaScripters Community
    </p>

    <style jsx>{`
      footer {
        padding: 50px 15px 50px;
        background-color: ${styles.mainColor2};
        text-align: center;
      }

      p {
        margin: 0 0 10px;
        color: ${styles.mainColor3};
        font-size: 16px;
        line-height: 32px;
        font-weight: 300;
      }
      
      a {
        color: ${styles.mainColor3};
        font-size: 16px;
        text-decoration: underline;
        text-transform: none;
        transition-duration: .5s;
      }
      
      a:hover {
        color: ${styles.mainColor6};
        text-decoration: none;
      }
      
      .span {
        position: relative;
        top: -1px;
      }
      
      .text-blue {
        font-size: 16px;
        color: ${styles.mainColor6};
        text-decoration: none;
      }
      
      i {
        position: relative;
        top: 6px;
      }
    `}</style>
  </footer>
)

module.exports = Footer
