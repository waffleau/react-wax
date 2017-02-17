import React, {Component} from 'react'

import ReactWax from '../../src'

import CodeBlock from './CodeBlock'
import NumberInput from './NumberInput'
import TransitionForm from './TransitionForm'
import TransitionIndicator from './TransitionIndicator'

export default class ExampleFade extends Component {
  state = {
    active: false,
    delay: 0,
    duration: 600,
    easing: 'easeInOut',
    from: 0,
    to: 180
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  render() {
    const {active, delay, duration, easing, from, to} = this.state
    return (
      <div className="row">
        <div className="col-md-5">
          <h1 className="text-center">
            {'Rotate'}
          </h1>
          <div style={styles.transition}>
            <ReactWax.Rotate
              active={active}
              duration={duration}
              delay={delay}
              easing={easing}
              from={from}
              to={to}>
              <TransitionIndicator />
            </ReactWax.Rotate>
          </div>
          <NumberInput
            label="From angle (deg)"
            value={from}
            onChange={this.handleChange.bind(this, 'from')} />
          <NumberInput
            label="To angle (deg)"
            value={to}
            onChange={this.handleChange.bind(this, 'to')} />
          <TransitionForm
            {...this.state}
            onChange={this.handleChange} />
        </div>
        <div className="col-md-7" style={styles.code}>
          <CodeBlock>
            {
              '<ReactWax.Rotate\n' +
              `  active={${active}}\n` +
              `  from={${from}}\n` +
              `  to={${to}}\n` +
              `  duration={${duration}}\n` +
              `  easing={${easing}}\n` +
              `  delay={${delay}}>\n` +
              '  <ShowMeWhatYouGot />\n' +
              '</ReactWax.Rotate>'
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
