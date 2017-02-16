import React, {PropTypes, PureComponent} from 'react'

import Transition from './Transition'

export class Fade extends PureComponent {
  static defaultProps = {
    minOpacity: 0,
    maxOpacity: 1
  }

  static propTypes = {
    ...Transition.baseProps,
    maxOpacity: PropTypes.number,
    minOpacity: PropTypes.number

  }

  getFromValue() {
    return {
      opacity: this.props.minOpacity
    }
  }

  getToValue() {
    return {
      opacity: this.props.maxOpacity
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

export default Fade
