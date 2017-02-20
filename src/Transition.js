import React, {PureComponent, PropTypes} from 'react'

const EasingTypes = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  linear: 'linear'
}

const EasingPropTypes = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.string
])

const BaseProps = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.any,
  delay: PropTypes.number,
  delayEnter: PropTypes.number,
  delayLeave: PropTypes.number,
  duration: PropTypes.number,
  durationEnter: PropTypes.number,
  durationLeave: PropTypes.number,
  easing: EasingPropTypes,
  easingEnter: EasingPropTypes,
  easingLeave: EasingPropTypes,
  style: PropTypes.object
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
    from: PropTypes.object.isRequired,
    to: PropTypes.object.isRequired
  }

  getDelayEnter() {
    return this.props.delayEnter || this.props.delay
  }

  getDelayLeave() {
    return this.props.delayLeave || this.props.delay
  }

  getDurationEnter() {
    return this.props.durationEnter || this.props.duration
  }

  getDurationLeave() {
    return this.props.durationLeave || this.props.duration
  }

  getEasing() {
    const {easing} = this.props

    if (typeof easing === 'object') {
      return `cubic-bezier(${easing[0]}, ${easing[1]}, ${easing[2]}, ${easing[3]})`
    }

    return EasingTypes[easing] || EasingTypes.linear
  }

  getEasingEnter() {
    return this.props.easingEnter || this.getEasing()
  }

  getEasingLeave() {
    return this.props.easingLeave || this.getEasing()
  }

  getProperties() {
    return Object.keys(this.props.from)
  }

  getStyle() {
    const {active, from, style, to} = this.props

    return {
      transition: this.getTransition(),
      ...(active ? to : from),
      ...style
    }
  }

  getTransition() {
    return this.props.active
      ? this.getTransitionEnter()
      : this.getTransitionLeave()
  }

  getTransitionEnter() {
    return this.transitionCSS(this.getDurationEnter(), this.getEasingEnter(), this.getDelayEnter())
  }

  getTransitionLeave() {
    return this.transitionCSS(this.getDurationLeave(), this.getEasingLeave(), this.getDelayLeave())
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
