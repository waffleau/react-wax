import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Transitions from '../src'
import TransitionGroup from './TransitionGroup'

const styles = {
  indicator: {
    display: 'block',
    backgroundColor: 'red',
    height: 100,
    width: 100
  }
}

const indicator = (
  <img
    style={styles.indicator}
    src="react.svg" />
)

export default class Root extends Component {
  render() {
    return (
      <div>
        <TransitionGroup name="Fade">
          {(active, duration) => (
            <Transitions.Fade
              active={active}
              duration={duration}>
              {indicator}
            </Transitions.Fade>
          )}
        </TransitionGroup>
        <TransitionGroup name="Slide">
          {(active, duration) => (
            <Transitions.Slide
              active={active}
              duration={duration}
              direction="right">
              {indicator}
            </Transitions.Slide>
          )}
        </TransitionGroup>
        <TransitionGroup name="Scale">
          {(active, duration) => (
            <Transitions.Scale
              active={active}
              duration={duration}>
              {indicator}
            </Transitions.Scale>
          )}
        </TransitionGroup>
        <TransitionGroup name="Rotate">
          {(active, duration) => (
            <Transitions.Rotate
              active={active}
              angle={180}
              duration={duration}>
              {indicator}
            </Transitions.Rotate>
          )}
        </TransitionGroup>
        <TransitionGroup name="Fade + Scale">
          {(active, duration) => (
            <Transitions.Scale
              active={active}
              duration={duration}>
              <Transitions.Fade
                active={active}
                duration={duration}>
                {indicator}
              </Transitions.Fade>
            </Transitions.Scale>
          )}
        </TransitionGroup>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
