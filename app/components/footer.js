import { styles } from '../constants'

const Footer = () => (
  <footer>
    <Style />
    I'm the footer
    <ul>
      <li>Alin</li>
      <li>Paul</li>
    </ul>
  </footer>
)

const Style = () => (
  <style jsx>
    {`
    
    footer {
      background-color: ${styles.mainColor2};
      text-align: center;
    }

    li {
      color: white
    }
    
  `}
  </style>
)

module.exports = Footer
