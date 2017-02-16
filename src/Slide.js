import React, {PropTypes, PureComponent} from 'react'

import {Transition} from './Transition'

export class Slide extends PureComponent {
  static propTypes = {
    ...Transition.baseProps,
    direction: PropTypes.oneOf([
      'down',
      'downLeft',
      'downRight',
      'left',
      'right',
      'up',
      'upLeft',
      'upRight'
    ]).isRequired
  }

  getDirectionTranslation() {
    switch (this.props.direction) {
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
      transform: 'translate3d(0, 0, 0)'
    }
  }

  getToValue() {
    return {
      transform: `translate3d(${this.getDirectionTranslation()})`
    }
  }

  render() {
    const {children} = this.props
    return (
      <Transition
        {...this.props}
        easing="easeInOut"
        fromValue={this.getFromValue()}
        toValue={this.getToValue()}>
        {children}
      </Transition>
    )
  }
}

export default Slide
