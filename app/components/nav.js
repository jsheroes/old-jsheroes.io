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
      <nav
        style={this.props.style}
        className={this.state.smallNav ? 'smallNav' : 'bigNav'}
      >
        <img src="static/img/website_logo.png" />
        <ul>
          {menuItems.map((item, key) => {
            const active = `#${this.state.currentHash}` === item.url
              ? 'active'
              : ''
            return (
              <li key={key}>
                <a href={item.url} className={active}>{item.label}</a>
              </li>
            )
          })}
        </ul>
        <style jsx>{`

          ul {
            display: inline-block;
          }

          nav {
            background-color: rgba(0, 0, 0, ${initialOpacity});
            position: fixed;
            top: 0;
            z-index: 1;
            width: 100%;
          }

          li {
            margin: 0 15px;
            display: inline-block;
            line-height: 100px;
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

          .smallNav {
            animation: nav 0.5s forwards;
          }
          .bigNav {
            animation: bigNav 0.5s forwards;
          }
          .active {
            color: ${styles.mainColor6}
          }

          @keyframes nav {
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

        }
        `}</style>
      </nav>
    )
  }
}
