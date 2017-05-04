import Header from '../../containers/header'
import Nav from '../../containers/nav'

import style from './styles'

const Layout = (props) => (
  <div>
    <style>{style}</style>
    <Nav />
    {props.children}
  </div>
)

export default Layout
