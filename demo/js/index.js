import React from 'react'
import ReactDOM from 'react-dom'

import Fade from './Reference/Fade'
import Rotate from './Reference/Rotate'
import Scale from './Reference/Scale'
import Skew from './Reference/Skew'
import Slide from './Reference/Slide'

import Composition from './Examples/Composition'
import Sequencing from './Examples/Sequencing'

function render(component, id) {
  ReactDOM.render(
    React.createElement(component),
    document.getElementById(id)
  )
}

render(Fade, 'reference-fade')
render(Rotate, 'reference-rotate')
render(Scale, 'reference-scale')
render(Skew, 'reference-skew')
render(Slide, 'reference-slide')

render(Composition, 'example-composition')
render(Sequencing, 'example-sequencing')
