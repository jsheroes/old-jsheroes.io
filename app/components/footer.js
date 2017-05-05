import Style from './footer.style'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <Style />
    
    <div>
      <h2>Contact us</h2>
      <p>
        You have questions? You need help? Please feel free to reach out at <b>welcome@jsheroes.io</b>
      </p>
    </div>
    
    <div>
    
      <ul>
        <li>Alin</li>
        <li>Paul</li>
        <li>Mihai</li>
      </ul>
    </div>
  </footer>
)

module.exports = Footer
