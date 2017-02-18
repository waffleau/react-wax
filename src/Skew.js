import React, {PropTypes, PureComponent} from 'react'

import Transition from './Transition'

export class Skew extends PureComponent {
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
    const {from} = this.props
    return {
      transform: `skew(${from[0]}deg, ${from[1]}deg)`
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
    const {to} = this.props
    return {
      transform: `skew(${to[0]}deg, ${to[1]}deg)`
    }
  }

  render() {
    const {children} = this.props
    return (
      <Transition
        {...this.props}
        style={this.getStyle()}
        fromValue={this.getFromValue()}
        toValue={this.getToValue()}>
        {children}
      </Transition>
    )
  }
}

export default Skew
