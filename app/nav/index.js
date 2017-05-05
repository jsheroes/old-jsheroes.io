import React, { Component } from 'react'
import CompNav from './components/nav'

export default class ContainerHeader extends Component {
  componentDidMount() {
    window.addEventListener('resize', ev => console.log(ev))
  }

  render() {
    return <CompNav menuItems={menuItems} {...this.props} />
  }
}

const menuItems = [
  {
    url: '#home',
    label: 'home'
  },
  {
    url: '#about',
    label: 'about'
  },
  {
    url: '#speakers',
    label: 'speakers'
  },
  {
    url: '#schedule',
    label: 'schedule'
  },
  {
    url: '#mission',
    label: 'mission'
  },
  {
    url: '#sponsors',
    label: 'sponsors'
  },
  {
    url: '#venue',
    label: 'venue'
  },
  {
    url: '#sponsors',
    label: 'contact'
  }
]
