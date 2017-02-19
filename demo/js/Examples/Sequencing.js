import React, {Component} from 'react'

import ReactWax from '../../../src'

import Button from '../Controls/Button'
import CodeBlock from '../Controls/CodeBlock'
import TransitionIndicator from '../Controls/TransitionIndicator'

export default class Sequencing extends Component {
  state = {
    active: false
  }

  handleToggle = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render() {
    const {active} = this.state
    return (
      <div style={styles.container} id="sequencing">
        <h3>{'Sequencing'}</h3>
        <div className="row">
          <div className="col-lg-3">
            <div style={styles.transition}>
              <ReactWax.Fade active={active} delayLeave={1200}>
                <ReactWax.Slide active={active} delay={600} to="right">
                  <ReactWax.Scale active={active} delayEnter={1200} from={.5} to={1}>
                    <TransitionIndicator />
                  </ReactWax.Scale>
                </ReactWax.Slide>
              </ReactWax.Fade>
            </div>
            <Button
              label="Toggle"
              onClick={this.handleToggle} />
          </div>
          <div className="col-lg-9">
            <CodeBlock>
              {
                `<ReactWax.Fade active={${active}} delayLeave={1200}>\n` +
                `  <ReactWax.Slide active={${active}} delay={600} to="right">\n` +
                `    <ReactWax.Scale active={${active}} delayEnter={1200} from={.5} to={1}>\n` +
                '      <ShowMeWhatYouGot />\n' +
                '    </ReactWax.Scale>\n' +
                '  </ReactWax.Slide>\n' +
                '</ReactWax.Fade>'
              }
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
    marginBottom: 20,
    height: 100,
    width: 100
  }
}
