import React, {PureComponent, PropTypes} from 'react'

const EasingTypes = {
  easeIn: 'ease-in',
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  linear: 'linear'
}

const EasingPropTypes = PropTypes.oneOf(Object.keys(EasingTypes))

const BaseProps = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.any,
  delay: PropTypes.number,
  delayActive: PropTypes.number,
  delayInactive: PropTypes.number,
  duration: PropTypes.number,
  durationActive: PropTypes.number,
  durationInactive: PropTypes.number,
  easing: EasingPropTypes,
  easingActive: EasingPropTypes,
  easingInactive: EasingPropTypes,
  style: PropTypes.object,
  timing: PropTypes.string
}

export class Transition extends PureComponent {
  static baseProps = BaseProps
  static easingTypes = EasingTypes

  static defaultProps = {
    active: true,
    delay: 0,
    duration: 600,
    style: {}
  }

  static propTypes = {
    ...BaseProps,
    fromValue: PropTypes.object.isRequired,
    toValue: PropTypes.object.isRequired
  }

  getDelayActive() {
    return this.props.delayActive || this.props.delay
  }

  getDelayInactive() {
    return this.props.delayInactive || this.props.delay
  }

  getDurationActive() {
    return this.props.durationActive || this.props.duration
  }

  getDurationInactive() {
    return this.props.durationInactive || this.props.duration
  }

  getEasing() {
    const {easing, timing} = this.props
    return EasingTypes[easing] || timing || EasingTypes.linear
  }

  getEasingActive() {
    return this.props.easingActive || this.getEasing()
  }

  getEasingInactive() {
    return this.props.easingInactive || this.getEasing()
  }

  getProperties() {
    return Object.keys(this.props.fromValue)
  }

  getStyle() {
    const {active, fromValue, style, toValue} = this.props

    return {
      transition: this.getTransition(),
      ...(active ? toValue : fromValue),
      ...style
    }
  }

  getTransition() {
    return this.props.active
      ? this.getTransitionActive()
      : this.getTransitionInactive()
  }

  getTransitionActive() {
    return this.transitionCSS(this.getDurationActive(), this.getEasingActive(), this.getDelayActive())
  }

  getTransitionInactive() {
    return this.transitionCSS(this.getDurationInactive(), this.getEasingInactive(), this.getDelayInactive())
  }

  transitionCSS(duration, easing, delay) {
    const transition = this.getProperties().map((property) => {
      return `${property} ${duration}ms ${easing} ${delay}ms`
    })

    return transition.join(',')
  }

  render() {
    const {children} = this.props
    return (
      <div style={this.getStyle()}>
        {children}
      </div>
    )
  }
}

export default Transition
