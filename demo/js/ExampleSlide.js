import React, {Component} from 'react'

import ReactWax from '../../src'

import CodeBlock from './CodeBlock'
import SelectInput from './SelectInput'
import TransitionForm from './TransitionForm'
import TransitionIndicator from './TransitionIndicator'

export default class ExampleSlide extends Component {
  state = {
    active: false,
    delay: 0,
    duration: 600,
    easing: 'easeInOut',
    from: 'center',
    to: 'left'
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
            {'Slide'}
          </h1>
          <div style={styles.transition}>
            <ReactWax.Slide
              active={active}
              duration={duration}
              delay={delay}
              easing={easing}
              from={from}
              to={to}>
              <TransitionIndicator />
            </ReactWax.Slide>
          </div>
          <SelectInput
            label="From position"
            options={ReactWax.Slide.directions}
            value={this.state.from}
            onChange={this.handleChange.bind(this, 'from')} />
          <SelectInput
            label="To position"
            options={ReactWax.Slide.directions}
            value={this.state.to}
            onChange={this.handleChange.bind(this, 'to')} />
          <TransitionForm
            {...this.state}
            onChange={this.handleChange} />
        </div>
        <div className="col-md-7" style={styles.code}>
          <CodeBlock>
            {
              '<ReactWax.Slide\n' +
              `  active={${active}}\n` +
              `  from="${from}"\n` +
              `  to="${to}"\n` +
              `  duration={${duration}}\n` +
              `  delay={${delay}}\n` +
              `  easing="${easing}">\n` +
              '  <ShowMeWhatYouGot />\n' +
              '</ReactWax.Slide>'
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
