import Container from '../components/container'
import { mediaQueries } from '../constants'

const About = () => (
  <Container style={{ minHeight: 800 }}>
    <Style />
    <h2>About</h2>
  </Container>
)

const Style = () => (
  <style jsx>{`
    
    h2 {
      text-align: center;
      font-size: 30px;
      padding: 30px;
    }
    
  `}</style>
)

module.exports = About
