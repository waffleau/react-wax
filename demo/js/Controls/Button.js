import React, {Component, PropTypes} from 'react'

export default class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  handleClick = (event) => {
    event.preventDefault()

    this.props.onClick()
  }

  render() {
    const {label, onClick} = this.props
    return (
      <button
        className="btn btn-block btn-primary"
        onClick={onClick}>
        {label}
      </button>
    )
  }
}
