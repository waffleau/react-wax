import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Transition from './Transition'

export class Fade extends PureComponent {
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
    return {
      opacity: this.props.from
    }
  }

  getToValue() {
    return {
      opacity: this.props.to
    }
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

export default Fade
