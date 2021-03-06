import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Transition from './Transition'

export class Rotate extends PureComponent {
  static defaultProps = {
    easing: 'easeInOut',
    from: 0
  }

  static propTypes = {
    ...Transition.baseProps,
    from: PropTypes.number,
    to: PropTypes.number.isRequired
  }

  getFromValue() {
    return {
      transform: `rotate(${this.props.from}deg)`
    }
  }

  getStyle() {
    const { style } = this.props
    return {
      transformOrigin: 'center center',
      ...style
    }
  }

  getToValue() {
    return {
      transform: `rotate(${this.props.to}deg)`
    }
  }

  render() {
    const { children } = this.props
    return (
      <Transition
        {...this.props}
        style={this.getStyle()}
        from={this.getFromValue()}
        to={this.getToValue()}>
        {children}
      </Transition>
    )
  }
}

export default Rotate
