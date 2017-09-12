import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Transition } from './Transition'
import { Translate } from './Translate'

const Directions = [
  'center',
  'bottom',
  'bottomLeft',
  'bottomRight',
  'left',
  'right',
  'top',
  'topLeft',
  'topRight'
]

export class Slide extends PureComponent {
  static directions = Directions

  static defaultProps = {
    easing: 'easeInOut',
    from: 'center'
  }

  static propTypes = {
    ...Transition.baseProps,
    from: PropTypes.oneOf(Directions),
    to: PropTypes.oneOf(Directions).isRequired
  }

  getDirectionTranslation(direction) {
    switch (direction) {
      case 'bottom':
        return [0, 100]
      case 'bottomLeft':
        return [-100, 100]
      case 'bottomRight':
        return [100, 100]
      case 'left':
        return [-100, 0]
      case 'right':
        return [100, 0]
      case 'top':
        return [0, -100]
      case 'topLeft':
        return [-100, -100]
      case 'topRight':
        return [100, -100]
      default:
        return [0, 0]
    }
  }

  render() {
    const { children, from, to } = this.props
    return (
      <Translate
        {...this.props}
        from={this.getDirectionTranslation(from)}
        to={this.getDirectionTranslation(to)}>
        {children}
      </Translate>
    )
  }
}

export default Slide
