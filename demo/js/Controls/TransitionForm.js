import React, {Component, PropTypes} from 'react'

import ReactWax from '../../../src'

import Button from '../Controls/Button'
import NumberInput from '../Controls/NumberInput'
import SelectInput from '../Controls/SelectInput'

export default class TransitionForm extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    delay: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    easing: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleChange = (name, value) => {
    this.props.onChange(name, value)
  }

  handleToggle = () => {
    this.handleChange('active', !this.props.active)
  }

  render() {
    const {active, delay, duration, easing} = this.props
    return (
      <div>
        <NumberInput
          label="Duration"
          value={duration}
          onChange={this.handleChange.bind(this, 'duration')} />
        <NumberInput
          label="Delay"
          value={delay}
          onChange={this.handleChange.bind(this, 'delay')} />
        <SelectInput
          label="Easing"
          options={Object.keys(ReactWax.Transition.easingTypes)}
          value={easing}
          onChange={this.handleChange.bind(this, 'easing')} />
        <Button
          label={active ? 'Deactivate' : 'Activate'}
          onClick={this.handleToggle} />
      </div>
    )
  }
}
