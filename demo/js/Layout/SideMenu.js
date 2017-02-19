import React, {Component} from 'react'

export default class SideMenu extends Component {
  renderLink(name, href) {
    return (
      <li>
        <a href={href}>{name}</a>
      </li>
    )
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>{'React Wax'}</h2>
        <hr />
        <h5>{'Introduction'}</h5>
        <ul>
          {this.renderLink('Motivation', '#motivation')}
          {this.renderLink('Installation', '#installation')}
          {this.renderLink('Basic Usage', '#basic-usage')}
        </ul>
        <h5>{'API Reference'}</h5>
        <ul>
          {this.renderLink('Fade', '#fade')}
          {this.renderLink('Rotate', '#rotate')}
          {this.renderLink('Scale', '#scale')}
          {this.renderLink('Skew', '#skew')}
          {this.renderLink('Slide', '#slide')}
        </ul>
        <h5>{'Advanced Usage'}</h5>
        <ul>
          {this.renderLink('Composition', '#composition')}
          {this.renderLink('Sequencing', '#sequencing')}
          {this.renderLink('Custom Transitions', '#custom-transitions')}
        </ul>
      </div>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#eee',
    height: '100%',
    padding: 20
  }
}
