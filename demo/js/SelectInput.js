import React, {Component, PropTypes} from 'react'

export default class SelectInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired
  }

  handleChange = (event) => {
    const {onChange} = this.props
    const {value} = event.target

    onChange(value)
  }

  render() {
    const {label, options, value} = this.props
    return (
      <div className="form-group row">
        <label className="col-6 col-form-label text-right">
          {label}
        </label>
        <div className="col-6">
          <select
            className="form-control"
            value={value}
            onChange={this.handleChange}>
            {options.map(option => (
              <option
                key={option}
                value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}
