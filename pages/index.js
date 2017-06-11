import { Component } from 'react'
import CompMain from '../app/components/main'
import Hero from '../app/components/hero'
import About from '../app/components/about'
import Tickets from '../app/components/tickets_info'
import Speakers from '../app/components/speakers'
import Schedule from '../app/components/schedule'
import Mission from '../app/components/mission'
import Sponsors from '../app/components/sponsors'
import Partners from '../app/components/partners'
import Communities from '../app/components/communities'
import Venue from '../app/components/venue'
import Contact from '../app/components/contact'
import ScrollBtn from '../app/components/scroll-btn'
import time from '../app/utils/helpers'

export default class extends Component {
  static async getInitialProps ({ req }) {
    const theTime = time()
    return { date: {
      ms: theTime.ms,
      days: theTime.days, 
      hours: theTime.hours,
      minutes: theTime.minutes,
      seconds: theTime.seconds,
    }}
        
  }
  
  render () {
    return (
      <CompMain>
        <Hero date={this.props.date} />
        <About />
        <Tickets />
        <Speakers />
        <Schedule />
        <Mission />
        <Sponsors />
        <Partners />
        <Communities />
        <Venue />
        <Contact />
        <ScrollBtn />
      </CompMain>
    )
  }
}