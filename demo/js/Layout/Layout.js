import React, {Component, PropTypes} from 'react'

import SideMenu from './SideMenu'

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const {children} = this.props
    return (
      <div style={styles.container}>
        <div style={styles.sidemenu}>
          <SideMenu />
        </div>
        <div style={styles.content}>
          {children}
        </div>
      </div>
    )
  }
}

const styles = {
  sidemenu: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    top: 0,
    width: 250
  },
  content: {
    padding: 20,
    paddingLeft: 270,
    paddingRight: 40
  }
}
