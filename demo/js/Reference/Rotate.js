import React, { Component } from 'react'

import ReactWax from '../../../src'

import CodeBlock from '../Controls/CodeBlock'
import NumberInput from '../Controls/NumberInput'
import TransitionForm from '../Controls/TransitionForm'
import TransitionIndicator from '../Controls/TransitionIndicator'

export default class Rotate extends Component {
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
    const { active, delay, duration, easing, from, to } = this.state
    return (
      <div style={styles.container}>
        <h3>{'Rotate'}</h3>
        <p>{'Rotates children to the `to` angle around the center point.'}</p>
        <div className="row">
          <div className="col-lg-6">
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
            <TransitionForm {...this.state} onChange={this.handleChange} />
          </div>
          <div className="col-lg-6">
            <div className="propgroup">
              <h4>{'Rotate'}</h4>
              <div className="prop">
                <div>
                  <strong>{'from (optional)'}</strong>
                </div>
                <div>
                  <em>{'Type:'}</em>
                  {' Number'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' 0'}
                </div>
                <p>{'Target rotation when active == false'}</p>
              </div>
              <div className="prop">
                <div>
                  <strong>{'to'}</strong>
                </div>
                <div>
                  <em>{'Type:'}</em>
                  {' Number'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' undefined'}
                </div>
                <p>{'Target rotation when active == true'}</p>
              </div>
            </div>
            <CodeBlock>
              <h4>{'Example'}</h4>
              {'<ReactWax.Rotate\n' +
                `  active={${active}}\n` +
                `  from={${from}}\n` +
                `  to={${to}}\n` +
                `  duration={${duration}}\n` +
                `  easing="${easing}">\n` +
                `  delay={${delay}}>\n` +
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
