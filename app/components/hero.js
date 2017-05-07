import { Component } from 'react'
import Section from '../components/common/section'
import { styles, mediaQueries } from '../constants'

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
    return (
      <div className="hero" style={{ height: this.state.windowHeight }}>
        <Section>
          <h1>JavaScript <br /> International Conference</h1>
        </Section>
        <style jsx>{`
          
          div {
            background-image: url('static/img/header-background.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            overflow: hidden;
          }
          
          h1 {
            padding-top: 150px;
            text-align: center;
            color: ${styles.mainColor3};
          }
          
          @media (min-width: ${mediaQueries.S}) {
            h1 {
              font-size: 30px;
            }
          }
          
          @media (min-width: ${mediaQueries.L}) {
            h1 {
              font-size: 60px;
            }
          }
          
          @media (min-width: ${mediaQueries.XL}) {
            h1 {
              font-size: 90px;
            }
          }
      `}</style>
      </div>
    )
  }
}

module.exports = Hero
