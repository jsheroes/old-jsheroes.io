import Style from './footer.style'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <Style />
    
    <div className="contact-us">
      <h2 className="the-h2">Contact us</h2>
      <p className="the-p">
        You have questions? You need help? Please feel free to reach out at <b>welcome@jsheroes.io</b>
      </p>
      <p className="the-p">We'd be more than happy to assist you in any possible way.</p>
    </div>
    
    <div className="footer-social-tab">
      <ul className="the-ul">
        <li className="the-li">
          <a className="the-anchors" href="https://www.facebook.com/clujsers" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        
        <li className="the-li">
          <a className="the-anchors" href="https://twitter.com/jsheroes" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        
        <li className="the-li">
          <a className="the-anchors" href="https://github.com/cluj-javascripters/" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>

        <li className="the-li">
          <a className="the-anchors" href="https://www.meetup.com/Cluj-Javascripters/" target="_blank">
            <i className="fa fa-meetup" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
    
    <div className="the-footer">
    
      <ul>
        <li>
          <Link href="/"><a>Alin</a></Link>
        </li>
        <li>Paul</li>
        <li>Mihai</li>
      </ul>
    </div>
    
  </footer>
)

module.exports = Footer
