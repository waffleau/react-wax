import React, {PropTypes, PureComponent} from 'react'

import {Transition} from './Transition'

const Directions = [
  'center',
  'down',
  'downLeft',
  'downRight',
  'left',
  'right',
  'up',
  'upLeft',
  'upRight'
]

export class Slide extends PureComponent {
  static directions = Directions

  static defaultProps = {
    easing: 'easeInOut',
    from: 'center',
    to: 'center'
  }

  static propTypes = {
    ...Transition.baseProps,
    from: PropTypes.oneOf(Directions),
    to: PropTypes.oneOf(Directions)
  }

  getDirectionTranslation(direction) {
    switch (direction) {
      case 'down': return '0,  100%, 0'
      case 'downLeft': return '-100%,  100%, 0'
      case 'downRight': return '100%,  100%, 0'
      case 'left': return '-100%, 0, 0'
      case 'right': return '100%, 0, 0'
      case 'up': return '0,  -100%, 0'
      case 'upLeft': return '-100%,  -100%, 0'
      case 'upRight': return '100%,  -100%, 0'
      default: return '0, 0, 0'
    }
  }

  getFromValue() {
    return {
      transform: `translate3d(${this.getDirectionTranslation(this.props.from)})`
    }
  }

  getToValue() {
    return {
      transform: `translate3d(${this.getDirectionTranslation(this.props.to)})`
    }
  }

  render() {
    const {children} = this.props
    return (
      <Transition
        {...this.props}
        fromValue={this.getFromValue()}
        toValue={this.getToValue()}>
        {children}
      </Transition>
    )
  }
}

export default Slide
