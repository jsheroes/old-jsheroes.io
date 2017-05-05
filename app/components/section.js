import Container from '../components/container'
import { styles } from '../constants'

const Section = props => (
  <section>
    <Style {...props} />
    <Container>
      {props.children}
    </Container>
  </section>
)

const Style = props => (
  <style>
    {`
    
    section {
      background-color: ${styles.mainColor5};
      text-align: center;
    }
    
  `}
  </style>
)

module.exports = Section
