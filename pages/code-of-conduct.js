import CompMain from '../app/components/main'
import ConductHero from '../app/components/conduct'
import ConductMain from '../app/components/conduct/conduct.main'
import Contact from '../app/components/contact'

const ConductPage = props => (
  <CompMain>
    <ConductHero />
    <ConductMain />
    <Contact />
  </CompMain>
)

export default ConductPage