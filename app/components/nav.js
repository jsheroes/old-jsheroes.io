import menuItems from '../data/menuitems'
import Container from '../components/container'

const defaultLineHeight = '100px'
const smallLineHeight = '50px'

import { mediaQueries } from '../constants'

const Header = props => (
  <nav style={props.style}>
    <Container>
      <img src="static/img/website_logo.png" />
      <ul>
        {menuItems.map((item, key) => {
          return (
            <li key={key}>
              <a href={item.url}>{item.label}</a>
            </li>
          )
        })}
      </ul>
    </Container>
    <style jsx>{`
      
      ul {
        display: inline-block;
      }

      nav {
        background-color: #000;
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
      }

      li {
        margin: 0 15px;
        display: inline-block;
        line-height: ${defaultLineHeight};
      }

      a {
        text-transform: capitalize;
        color: #fff;
        font-size: 18px;
        font-weight: 300;
      }

      img {
        display: inline-block;
        vertical-align: middle;
        padding-bottom: 12px;
        transform: scale(0.8);
      }

      @media (max-width: ${mediaQueries.L}) {
        img {
          display: none;
        }
        
        a {
          font-size: 16px;
        }
        
        li {
          margin-right: 20px;
          line-height: ${smallLineHeight}
        }
        
        ul {
          width: 100%;
          text-align: center;
        }
      }

      @media (max-width: ${mediaQueries.S}) {
        li {
          display: block;
          margin: 0;
          border-bottom: solid 1px white;
        }
      }

    }
    `}</style>
  </nav>
)

export default Header
