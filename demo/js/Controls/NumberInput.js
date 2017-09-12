import React, { Component, PropTypes } from 'react'

export default class NumberInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
  }

  handleChange = event => {
    const { onChange } = this.props
    const { value } = event.target

    onChange(value ? parseFloat(value) : 0)
  }

  render() {
    const { label, value } = this.props
    return (
      <div className="form-group row">
        <label className="col-6 col-form-label text-right">{label}</label>
        <div className="col-6">
          <input
            type="number"
            className="form-control"
            value={value}
            onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}
