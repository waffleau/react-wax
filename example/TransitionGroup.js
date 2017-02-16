import React, {Component, PropTypes} from 'react'

export default class TransitionGroup extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    name: PropTypes.string
  }

  state = {
    active: false,
    duration: 600
  }

  handleDurationChange = (event) => {
    const {value} = event.target

    this.setState({
      duration: value ? parseInt(value) : 0
    })
  }

  handleToggle = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  render() {
    const {children, name} = this.props
    const {active, duration} = this.state
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>
          {name}
        </h1>
        <button onClick={this.handleToggle}>
          {active ? 'Deactivate' : 'Activate'}
        </button>
        <input
          type="number"
          placeholder="Duration"
          value={duration}
          onChange={this.handleDurationChange} />
        <div style={styles.transition}>
          {children(active, duration)}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    border: '1px solid #ddd',
    marginBottom: 20,
    padding: 20
  },
  heading: {
    margin: 0,
    marginBottom: 10
  },
  transition: {
    backgroundColor: '#ddd',
    marginTop: 10,
    height: 100,
    width: 100
  },
  element: {
    display: 'block',
    backgroundColor: 'red',
    height: 100,
    width: 100
  }
}
