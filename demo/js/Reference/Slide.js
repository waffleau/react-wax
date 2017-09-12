import React, { Component } from 'react'

import ReactWax from '../../../src'

import CodeBlock from '../Controls/CodeBlock'
import SelectInput from '../Controls/SelectInput'
import TransitionForm from '../Controls/TransitionForm'
import TransitionIndicator from '../Controls/TransitionIndicator'

export default class Slide extends Component {
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
    const { active, delay, duration, easing, from, to } = this.state
    return (
      <div style={styles.container}>
        <h3>{'Slide'}</h3>
        <p>{'Slides children from one direction to another direction.'}</p>
        <div className="row">
          <div className="col-lg-6">
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
                  {' String (Enum)'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' center'}
                </div>
                <div>
                  <em>{'Options:'}</em>
                  {
                    ' center | down | downLeft | downRight | left | right | up | upLeft | upRight'
                  }
                </div>
                <p>{'Target position when active == false'}</p>
              </div>
              <div className="prop">
                <div>
                  <strong>{'to'}</strong>
                </div>
                <div>
                  <em>{'Type:'}</em>
                  {' String (Enum)'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' undefined'}
                </div>
                <div>
                  <em>{'Options:'}</em>
                  {
                    ' center | down | downLeft | downRight | left | right | up | upLeft | upRight'
                  }
                </div>
                <p>{'Target position when active == true'}</p>
              </div>
            </div>
            <CodeBlock>
              <h4>{'Example'}</h4>
              {'<ReactWax.Slide\n' +
                `  active={${active}}\n` +
                `  from="${from}"\n` +
                `  to="${to}"\n` +
                `  duration={${duration}}\n` +
                `  delay={${delay}}\n` +
                `  easing="${easing}">\n` +
                '  <ShowMeWhatYouGot />\n' +
                '</ReactWax.Slide>'}
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
