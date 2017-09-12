import React, { Component } from 'react'

import ReactWax from '../../../src'

import CodeBlock from '../Controls/CodeBlock'
import NumberInput from '../Controls/NumberInput'
import TransitionForm from '../Controls/TransitionForm'
import TransitionIndicator from '../Controls/TransitionIndicator'

export default class Translate extends Component {
  state = {
    active: false,
    delay: 0,
    duration: 600,
    easing: 'easeInOut',
    fromX: 0,
    fromY: 0,
    toX: 100,
    toY: 0
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  render() {
    const {
      active,
      delay,
      duration,
      easing,
      fromX,
      fromY,
      toX,
      toY
    } = this.state
    return (
      <div style={styles.container}>
        <h3>{'Translate'}</h3>
        <p>{'Translates children from one position to another.'}</p>
        <div className="row">
          <div className="col-lg-6">
            <div style={styles.transition}>
              <ReactWax.Translate
                active={active}
                duration={duration}
                delay={delay}
                easing={easing}
                from={[fromX, fromY]}
                to={[toX, toY]}>
                <TransitionIndicator />
              </ReactWax.Translate>
            </div>
            <NumberInput
              label="From X"
              value={fromX}
              onChange={this.handleChange.bind(this, 'fromX')} />
            <NumberInput
              label="From Y"
              value={fromY}
              onChange={this.handleChange.bind(this, 'fromY')} />
            <NumberInput
              label="To X"
              value={toX}
              onChange={this.handleChange.bind(this, 'toX')} />
            <NumberInput
              label="To Y"
              value={toY}
              onChange={this.handleChange.bind(this, 'toY')} />
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
                  {' Array[2]'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' [0, 0]'}
                </div>
                <p>
                  {
                    'Target translation when active == false. Accepts an array of [x, y] values.'
                  }
                </p>
              </div>
              <div className="prop">
                <div>
                  <strong>{'to'}</strong>
                </div>
                <div>
                  <em>{'Type:'}</em>
                  {' Array[2]'}
                </div>
                <div>
                  <em>{'Default:'}</em>
                  {' undefined'}
                </div>
                <p>
                  {
                    'Target translation when active == true. Accepts an array of [x, y] values.'
                  }
                </p>
              </div>
            </div>
            <CodeBlock>
              <h4>{'Example'}</h4>
              {'<ReactWax.Scale\n' +
                `  active={${active}}\n` +
                `  from={[${fromX}, ${fromY}]}\n` +
                `  to={[${toX}, ${toY}]}\n` +
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
