import Container from '../components/container'
import { styles, mediaQueries } from '../constants'

const Hero = () => (
  <div style={{ minHeight: 800, backgroundColor: styles.mainColor5 }}>
    <Container>
      <Style />
      <h1>JavaScript <br /> International Conference</h1>
    </Container>
  </div>
)

const Style = () => (
  <style jsx>{`
    
    h1 {
      padding-top: 50px;
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
)

module.exports = Hero
