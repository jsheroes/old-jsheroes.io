import CompMain from '../app/components/main'
import ClujsersHero from '../app/components/clujsers'
import ClujsersMain from '../app/components/clujsers/clujsers.main'
import Contact from '../app/components/contact'

const ClujsersPage = props => (
  <CompMain>
    <ClujsersHero />
    <ClujsersMain />
    <Contact />
  </CompMain>
)

export default ClujsersPage