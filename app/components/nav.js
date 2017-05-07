import { Component } from 'react'

import menuItems from '../data/menuitems'
import Container from '../components/container'

import { mediaQueries } from '../constants'

const initialOpacity = 0.5

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 100,
      opacity: 1,
      smallNav: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (scrollPosition > 50 && !this.state.smallNav) {
      this.setState({ smallNav: true })
    } else if(scrollPosition < 50 && this.state.smallNav){
      this.setState({ smallNav: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <nav style={this.props.style} className={this.state.smallNav ? 'smallNav': 'bigNav'}>
        <Container>
          <img src="static/img/website_logo.png"/>
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
