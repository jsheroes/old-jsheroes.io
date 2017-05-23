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

export default () => (
  <CompMain>
    <Hero />
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
  </CompMain>
)
