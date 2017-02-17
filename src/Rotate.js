import React, {PropTypes, PureComponent} from 'react'

import Transition from './Transition'

export class Rotate extends PureComponent {
  static defaultProps = {
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
    const {style} = this.props
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
