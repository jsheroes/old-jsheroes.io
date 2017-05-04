import Link from 'next/link'
import Head from 'next/head'
import Style from './styles'

const Header = props => (
  <nav>
    <Style />
    <ul>
      {props.menuItems.map((item, key) => {
        return (
          <li key={key}>
            <a href={item.url}>{item.label}</a>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default Header
