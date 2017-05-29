import { Component } from 'react'
import menuItems from '../data/menuitems'
import { styles, mediaQueries } from '../constants'
const initialOpacity = 0.5

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 100,
      smallNav: false,
      currentHash: ''
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleHashChange = this.handleHashChange.bind(this)
  }

  handleHashChange(ev) {
    this.setState({ currentHash: ev.newURL.split('#')[1] })
  }

  handleScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    if (scrollPosition > 50 && !this.state.smallNav) {
      this.setState({ smallNav: true })
    } else if (scrollPosition < 50 && this.state.smallNav) {
      this.setState({ smallNav: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('hashchange', this.handleHashChange)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('hashchange', this.handleHashChange)
  }

  render() {
    return (
      <div
        style={this.props.style}
        className={this.state.smallNav ? 'smallNav' : 'bigNav'}
      >
        <nav>
          <img src="static/img/website_logo.png" />
          <ul>
            {menuItems.map((item, key) => {
              const active = `#${this.state.currentHash}` === item.url
                ? 'active'
                : ''
              return (
                <li key={key}>
                  <a href={`/${item.url}`} className={active}>{item.label}</a>
                </li>
              )
            })}
          </ul>
        </nav>

        <style jsx>{`
          div {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 3;
            background-color: rgba(0, 0, 0, ${initialOpacity});
            line-height: 100px;
            -webkit-transition: line-height .3s ease-out;
            -moz-transition: line-height .3s ease-out;
            transition: line-height .3s ease-out;
          }
          
          nav {
            padding: 0 15px;
            margin: 0 auto;
          }

          ul {
            display: inline-block;
          }


          li {
            margin: 0 25px;
            display: inline-block;
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
            transition: transform .3s linear;
          }

          .smallNav {
            line-height: 60px;
            animation: smallNav 0.3s forwards;
          }
          
          .smallNav nav img {
            transform: scale(0.5);
          }
          
          .bigNav {
            animation: bigNav 0.3s forwards;
          }
          
          .active {
            color: ${styles.mainColor6}
          }

          @keyframes smallNav {
            from { background-color: rgba(0, 0, 0, ${initialOpacity}); }
            to { background-color: rgba(0, 0, 0, 1); }
          }

          @keyframes bigNav {
            from { background-color: rgba(0, 0, 0, 1); }
            to { background-color: rgba(0, 0, 0, ${initialOpacity}); }
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
              line-height: 50px;
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

          @media (min-width: ${mediaQueries.S}) {
            nav {
              width: 720px;
            }
          }
          
          @media (min-width: ${mediaQueries.L}) {
            nav {
              width: 960px;
            }
          }
          
          @media (min-width: ${mediaQueries.XL}) {
            nav {
              width: 1140px;
            }
          }
        
        `}</style>
      </div>
    )
  }
}
