import React, {PureComponent} from 'react'

export default class Motivation extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <h1 id="motivation">
          {'Motivation'}
        </h1>
        <p>
          {
            'Transitions in CSS are pretty easy, but not well understood. ' +
            'There are some gotchas too, like animating the wrong properties can lead to poor performance on mobile. ' +
            'On top of that, React presents an interesting challenge for transitions, as it takes this thing that\'s ' +
            'not well understood and provides an unintuitive abstraction layer on top. Declarative animations ' +
            'are powerful, but difficult to understand, and in many ways contrary to way you\'re trained to think in React.'
          }
        </p>
        <p>
          {
            'Wax aims to create a simple and performant component library for animations, ' +
            'which leverages composition to make transitions easy to understand.'
          }
        </p>
      </div>
    )
  }
}

const styles = {
  container: {
    marginBottom: 60
  }
}
