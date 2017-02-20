import React, {PropTypes, PureComponent} from 'react'

import {Transition} from './Transition'
import {Translate} from './Translate'

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
    from: 'center'
  }

  static propTypes = {
    ...Transition.baseProps,
    from: PropTypes.oneOf(Directions),
    to: PropTypes.oneOf(Directions).isRequired
  }

  getDirectionTranslation(direction) {
    switch (direction) {
      case 'down': return [0, 100]
      case 'downLeft': return [-100, 100]
      case 'downRight': return [100, 100]
      case 'left': return [-100, 0]
      case 'right': return [100, 0]
      case 'up': return [0, -100]
      case 'upLeft': return [-100, -100]
      case 'upRight': return [100, -100]
      default: return [0, 0]
    }
  }

  render() {
    const {children, from, to} = this.props
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
