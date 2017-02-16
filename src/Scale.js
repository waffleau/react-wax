import React, {PropTypes, PureComponent} from 'react'

import Transition from './Transition'

export class Scale extends PureComponent {
  static defaultProps = {
    minX: 0,
    minY: 0,
    maxX: 1,
    maxY: 1
  }

  static propTypes = {
    ...Transition.baseProps,
    maxX: PropTypes.number,
    maxY: PropTypes.number,
    minX: PropTypes.number,
    minY: PropTypes.number

  }

  getFromValue() {
    const {minX, minY} = this.props
    return {
      transform: `scale3d(${minX}, ${minY}, 1)`
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
    const {maxX, maxY} = this.props
    return {
      transform: `scale3d(${maxX}, ${maxY}, 1)`
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
