import React, {PropTypes, PureComponent} from 'react'

import Transition from './Transition'

export class Rotate extends PureComponent {
  static propTypes = {
    ...Transition.baseProps,
    angle: PropTypes.number.isRequired
  }

  getFromValue() {
    return {
      transform: 'rotate(0deg)'
    }
  }

  getStyle() {
    const {style} = this.props
    return {
      transformOrigin: 'center center',
      ...style
    }
  }

  getToValue() {
    const {angle} = this.props
    return {
      transform: `rotate(${angle}deg)`
    }
  }

  render() {
    const {children} = this.props
    return (
      <Transition
        {...this.props}
        style={this.getStyle()}
        easing="easeInOut"
        fromValue={this.getFromValue()}
        toValue={this.getToValue()}>
        {children}
      </Transition>
    )
  }
}

export default Rotate
