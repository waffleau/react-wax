import React, { Component } from 'react'

import ReactWax from '../../../src'

import CodeBlock from '../Controls/CodeBlock'
import NumberInput from '../Controls/NumberInput'
import TransitionForm from '../Controls/TransitionForm'
import TransitionIndicator from '../Controls/TransitionIndicator'

export default class Fade extends Component {
  state = {
    active: false,
    delay: 0,
    duration: 600,
    easing: 'linear',
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
        <h3>{'Fade'}</h3>
        <p>
          {
            'Transitions an elements opacity, allowing for a fade in-out effect.'
          }
        </p>
        <div className="row">
          <div className="col-lg-6">
            <div style={styles.transition}>
              <ReactWax.Fade
                active={active}
                duration={duration}
                delay={delay}
                easing={easing}
                from={from}
                to={to}>
                <TransitionIndicator />
              </ReactWax.Fade>
            </div>
            <NumberInput
              label="From opacity"
              value={from}
              onChange={this.handleChange.bind(this, 'from')} />
            <NumberInput
              label="To opacity"
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
                  {' Number'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' 0'}
                </div>
                <p>{'Target opacity when active == false'}</p>
              </div>
              <div className="prop">
                <div>
                  <strong>{'to (optional)'}</strong>
                </div>
                <div>
                  <em>{'Type:'}</em>
                  {' Number'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' 1'}
                </div>
                <p>{'Target opacity when active == true'}</p>
              </div>
            </div>
            <CodeBlock>
              <h4>{'Example'}</h4>
              {'<ReactWax.Fade\n' +
                `  active={${active}}\n` +
                `  from={${from}}\n` +
                `  to={${to}}\n` +
                `  duration={${duration}}\n` +
                `  easing="${easing}">\n` +
                `  delay={${delay}}>\n` +
                '  <ShowMeWhatYouGot />\n' +
                '</ReactWax.Fade>'}
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
    backgroundColor: '#eee',
    margin: '0 auto',
    marginBottom: 60,
    marginTop: 60,
    height: 100,
    width: 100
  }
}
