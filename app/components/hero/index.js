import { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Link from 'next/link'

import Section from '../../components/common/section'
import CountDownAndTickets from './countdownandtickets'
import { styles, mediaQueries } from '../../constants'

class Hero extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      windowHeight: 800,
      top: 0
    }

    this.updateHeroSize = this.updateHeroSize.bind(this)
  }

  updateHeroSize(ev) {
    this.setState({
      windowHeight: ev.target.innerHeight
    })
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight
    })
    window.addEventListener('resize', this.updateHeroSize)
  }

  componentWillUnMount() {
    window.removeEventListener('resize', this.updateHeroSize)
  }

  render() {
    let heroBcgImg = {
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url(static/img/header-background.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: this.state.windowHeight,
    }
    
    const heroDarkOverlay = {
      display: 'block',
      width: '100%',
      height: '100%',
      padding: '0',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'hsla(0,0%,0%,.6) none repeat scroll 0 0',
    }
    
    return (
      <Section
        section={{ style: heroBcgImg }}
        mainContainer={{ style: heroDarkOverlay }}
      >
        <ScrollableAnchor id={'home'}>
          <div className="main-content">
          
            <div className="content">
              <h1>JavaScript</h1>
              <h1>International Conference</h1>
              <br />
              <p>8 - 9 June 2017, Cluj-Napoca, Romania</p>
              <br />
              <br />
            </div>
            
            <CountDownAndTickets />
            
          </div>
        </ScrollableAnchor>

        <style jsx>{`
          .main-content {
            position: relative;
            padding: 0 15px;
            margin: 0 auto;
          }
          
          .content {
            display: table-cell;
            width: 1%;
            height: 100vh;
            vertical-align: middle;
            z-index: 1;
            text-align: center;
          }
          
        
          h1 {
            margin: 0 auto 5px;
            font-size: 90px;
            font-weight: 700;
            line-height: 1.1;
            color: ${styles.mainColor3};
          }
          
          p {
            margin: 20px 0 10px;
            line-height: 32px;
            font-size: 24px;
            font-weight: 300;
            color: ${styles.mainColor3};
          }
          
          @media (min-width: ${mediaQueries.S}) {
            .main-content {
              width: 720px;
            }
            
            h1 {
              font-size: 30px;
            }
          }
          
          @media (min-width: ${mediaQueries.L}) {
            .main-content {
              width: 960px;
            }
            
            h1 {
              font-size: 60px;
            }
          }
          
          @media (min-width: ${mediaQueries.XL}) {
            .main-content {
              width: 1140px;
            }
            
            h1 {
                font-size: 90px;
            }
          }
        `}</style>
      </Section>
    )
  }
}

module.exports = Hero
