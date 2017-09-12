import React, { Component } from 'react'

import ReactWax from '../../../src'

import CodeBlock from '../Controls/CodeBlock'
import NumberInput from '../Controls/NumberInput'
import TransitionForm from '../Controls/TransitionForm'
import TransitionIndicator from '../Controls/TransitionIndicator'

export default class Scale extends Component {
  state = {
    active: false,
    delay: 0,
    duration: 600,
    easing: 'easeInOut',
    from: 0,
    to: 1
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  render() {
    const { active, delay, duration, easing, from, to } = this.state
    return (
      <div style={styles.container}>
        <h3>{'Scale'}</h3>
        <p>{'Scales children between two sizes.'}</p>
        <div className="row">
          <div className="col-lg-6">
            <div style={styles.transition}>
              <ReactWax.Scale
                active={active}
                duration={duration}
                delay={delay}
                easing={easing}
                from={from}
                to={to}>
                <TransitionIndicator />
              </ReactWax.Scale>
            </div>
            <NumberInput
              label="From scale"
              value={from}
              onChange={this.handleChange.bind(this, 'from')} />
            <NumberInput
              label="To scale"
              value={to}
              onChange={this.handleChange.bind(this, 'to')} />
            <TransitionForm {...this.state} onChange={this.handleChange} />
          </div>
          <div className="col-lg-6">
            <div className="propgroup">
              <h4>{'Props'}</h4>
              <div className="prop">
                <div>
                  <strong>{'from (optional)'}</strong>
                </div>
                <div>
                  <em>{'Type:'}</em>
                  {' Number or Array[2]'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' 0'}
                </div>
                <p>
                  {
                    'Target scale when active == false. Accepts a single value, or an array of [x, y] values.'
                  }
                </p>
              </div>
              <div className="prop">
                <div>
                  <strong>{'to (optional)'}</strong>
                </div>
                <div>
                  <em>{'Type:'}</em>
                  {' Number or Array[2]'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' 1'}
                </div>
                <p>
                  {
                    'Target scale when active == true. Accepts a single value, or an array of [x, y] values.'
                  }
                </p>
              </div>
            </div>
            <CodeBlock>
              <h4>{'Example'}</h4>
              {'<ReactWax.Scale\n' +
                `  active={${active}}\n` +
                `  from={${from}}\n` +
                `  to={${to}}\n` +
                `  duration={${duration}}\n` +
                `  delay={${delay}}\n` +
                `  easing="${easing}">\n` +
                '  <ShowMeWhatYouGot />\n' +
                '</ReactWax.Rotate>'}
            </CodeBlock>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    border: '1px solid #eee',
    borderRadius: 6,
    marginBottom: 60,
    padding: 20
  },
  transition: {
    backgroundColor: '#ddd',
    margin: '0 auto',
    marginBottom: 60,
    marginTop: 60,
    height: 100,
    width: 100
  }
}
