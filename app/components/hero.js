import Container from '../components/container'
import { styles, mediaQueries } from '../constants'

const Hero = () => (
  <div style={{ minHeight: 800, backgroundColor: styles.mainColor5 }}>
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
    <Container>
      <h1>JavaScript <br /> International Conference</h1>
    </Container>
  </div>
)

module.exports = Hero

