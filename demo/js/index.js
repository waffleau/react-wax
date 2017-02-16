import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ReactShift from '../../src'
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
    src="https://res.cloudinary.com/teepublic/image/private/s--1UWIFLXd--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1476459650/production/designs/733956_1.jpg" />
)

export default class Root extends Component {
  render() {
    return (
      <div>
        <TransitionGroup name="Fade">
          {(active, duration) => (
            <ReactShift.Fade
              active={active}
              duration={duration}>
              {indicator}
            </ReactShift.Fade>
          )}
        </TransitionGroup>
        <TransitionGroup name="Slide">
          {(active, duration) => (
            <ReactShift.Slide
              active={active}
              duration={duration}
              direction="right">
              {indicator}
            </ReactShift.Slide>
          )}
        </TransitionGroup>
        <TransitionGroup name="Scale">
          {(active, duration) => (
            <ReactShift.Scale
              active={active}
              duration={duration}>
              {indicator}
            </ReactShift.Scale>
          )}
        </TransitionGroup>
        <TransitionGroup name="Rotate">
          {(active, duration) => (
            <ReactShift.Rotate
              active={active}
              angle={180}
              duration={duration}>
              {indicator}
            </ReactShift.Rotate>
          )}
        </TransitionGroup>
        <TransitionGroup name="Fade + Scale">
          {(active, duration) => (
            <ReactShift.Scale
              active={active}
              duration={duration}>
              <ReactShift.Fade
                active={active}
                duration={duration}>
                {indicator}
              </ReactShift.Fade>
            </ReactShift.Scale>
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
