import React, {PropTypes, PureComponent} from 'react'

import Transition from './Transition'

export class Scale extends PureComponent {
  static defaultProps = {
    from: 0,
    to: 1
  }

  static propTypes = {
    ...Transition.baseProps,
    from: PropTypes.number,
    to: PropTypes.number
  }

  getFromValue() {
    const {from} = this.props
    return {
      transform: `scale3d(${from}, ${from}, 1)`
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
      transform: `scale3d(${to}, ${to}, 1)`
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

export default Scale
