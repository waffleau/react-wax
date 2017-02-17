import React, {Component} from 'react'

import ReactWax from '../../src'

import Button from './Button'
import CodeBlock from './CodeBlock'
import NumberInput from './NumberInput'
import TransitionIndicator from './TransitionIndicator'

export default class ExampleFade extends Component {
  state = {
    active: false,
    delay: 0,
    duration: 600,
    from: 0,
    to: 1
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  handleToggle = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  render() {
    const {active, delay, duration, from, to} = this.state
    return (
      <div className="row">
        <div className="col-md-5">
          <h1 className="text-center">
            {'Fade'}
          </h1>
          <div style={styles.transition}>
            <ReactWax.Fade
              active={active}
              from={from}
              to={to}
              duration={duration}>
              <TransitionIndicator />
            </ReactWax.Fade>
          </div>
          <NumberInput
            label="Duration"
            value={duration}
            onChange={this.handleChange.bind(this, 'duration')} />
          <NumberInput
            label="Delay"
            value={delay}
            onChange={this.handleChange.bind(this, 'delay')} />
          <NumberInput
            label="From opacity"
            value={from}
            onChange={this.handleChange.bind(this, 'from')} />
          <NumberInput
            label="To opacity"
            value={to}
            onChange={this.handleChange.bind(this, 'to')} />
          <Button
            label={active ? 'Deactivate' : 'Activate'}
            onClick={this.handleToggle} />
        </div>
        <div className="col-md-7" style={styles.code}>
          <CodeBlock>
            {
              '<ReactWax.Fade\n' +
              `  active={${active}}\n` +
              `  from={${from}}\n` +
              `  to={${to}}\n` +
              `  duration={${duration}}\n` +
              `  delay={${delay}}>\n` +
              '  <ShowMeWhatYouGot />\n' +
              '</ReactWax.Fade>'
            }
          </CodeBlock>
        </div>
      </div>
    )
  }
}

const styles = {
  code: {
    backgroundColor: '#eee',
    borderRadius: 6
  },
  transition: {
    backgroundColor: '#ddd',
    margin: '0 auto',
    marginBottom: 20,
    height: 100,
    width: 100
  }
}
