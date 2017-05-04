import Link from 'next/link'
import Head from 'next/head'

import Container from '../../components/container'
import Style from './nav.style'

const Header = props => (
  <nav style={props.style}>
    <Container>
      <Style />
      <img src="static/img/website_logo.png" />
      <ul>
        {props.menuItems.map((item, key) => {
          return (
            <li key={key}>
              <a href={item.url}>{item.label}</a>
            </li>
          )
        })}
      </ul>
    </Container>
  </nav>
)

export default Header
