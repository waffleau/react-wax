import React, {PureComponent, PropTypes} from 'react'

const EasingTypes = {
  easeIn: 'ease-in',
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  linear: 'linear'
}

const BaseProps = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.any,
  duration: PropTypes.number,
  easing: PropTypes.oneOf(Object.keys(EasingTypes)),
  style: PropTypes.object,
  timing: PropTypes.string
}

export class Transition extends PureComponent {
  static baseProps = BaseProps

  static defaultProps = {
    active: true,
    duration: 600,
    style: {}
  }

  static propTypes = {
    ...BaseProps,
    fromValue: PropTypes.object.isRequired,
    toValue: PropTypes.object.isRequired
  }

  getEasing() {
    const {easing, timing} = this.props
    return EasingTypes[easing] || timing || EasingTypes.linear
  }

  getProperty() {
    return Object.keys(this.props.fromValue)[0]
  }

  getStyle() {
    const {active, duration, fromValue, style, toValue } = this.props

    return {
      transition: `${this.getProperty()} ${duration}ms ${this.getEasing()}`,
      ...(active ? toValue : fromValue),
      ...style
    }
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
