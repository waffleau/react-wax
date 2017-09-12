import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Transition } from './Transition'

export class Translate extends PureComponent {
  static defaultProps = {
    easing: 'easeInOut',
    from: [0, 0]
  }

  static propTypes = {
    ...Transition.baseProps,
    from: PropTypes.arrayOf(PropTypes.number),
    to: PropTypes.arrayOf(PropTypes.number).isRequired
  }

  getFromValue() {
    return {
      transform: this.interpolateTransform(this.props.from)
    }
  }

  getToValue() {
    return {
      transform: this.interpolateTransform(this.props.to)
    }
  }

  interpolateTransform(values) {
    return `translate3d(${values[0]}%, ${values[1]}%, 0)`
  }

  render() {
    const { children } = this.props
    return (
      <Transition
        {...this.props}
        from={this.getFromValue()}
        to={this.getToValue()}>
        {children}
      </Transition>
    )
  }
}

export default Translate
