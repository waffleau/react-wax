import React, {Component, PropTypes} from 'react'

export default class CodeBlock extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const {children} = this.props
    return (
      <pre style={styles}>
        {children}
      </pre>
    )
  }
}

const styles = {
  backgroundColor: '#eee',
  borderRadius: 6,
  padding: 20
}
