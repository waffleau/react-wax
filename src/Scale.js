import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Transition from './Transition'

const NumberOrArrayOfNumbers = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.number)
])

export class Scale extends PureComponent {
  static defaultProps = {
    easing: 'easeInOut',
    from: [0, 0],
    to: [1, 1]
  }

  static propTypes = {
    ...Transition.baseProps,
    from: NumberOrArrayOfNumbers,
    to: NumberOrArrayOfNumbers
  }

  getFromValue() {
    const from = this.valueAsArray(this.props.from)
    return {
      transform: `scale3d(${from[0]}, ${from[1]}, 1)`
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
    const to = this.valueAsArray(this.props.to)
    return {
      transform: `scale3d(${to[0]}, ${to[1]}, 1)`
    }
  }

  valueAsArray(value) {
    return typeof value === 'number' ? [value, value] : value
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

export default Scale
