import { styles } from '../constants'

const FooterStyle = () => (
  <style jsx>
    {`
    
    footer {
      background-color: ${styles.mainColor2};
      text-align: center;
    }

    li, h2, p {
      color: white
    }

  `}
  </style>
)

module.exports = FooterStyle
