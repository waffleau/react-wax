import React, {Component} from 'react'

import Layout from './Layout/Layout'

import CodeBlock from './Controls/CodeBlock'
import Motivation from './Sections/Motivation'
import Installation from './Sections/Installation'
import Usage from './Sections/Usage'

import ReferenceFade from './Reference/Fade'
import ReferenceRotate from './Reference/Rotate'
import ReferenceScale from './Reference/Scale'
import ReferenceSkew from './Reference/Skew'
import ReferenceSlide from './Reference/Slide'

import ExampleComposition from './Examples/Composition'
import ExampleSequencing from './Examples/Sequencing'

export default class Root extends Component {
  render() {
    return (
      <Layout>
        <Motivation />
        <Installation />
        <Usage />
        <h1>{'API Reference'}</h1>
        <p>{'There are some props which can be used on all components:'}</p>
        <CodeBlock>
          {
            'duration: number (600) - how long the transition runs for\n' +
            'delay: number (0) - offset the start and end of a transition\n' +
            'easing: string (\'linear\') - predefined transition timing curve\n' +
            '        options: [linear, easeIn, easeOut, easeInOut]\n' +
            'style: object (null) - styles which will be applied to the transition container\n' +
            'timing: string (null) - CSS timing function (escape hatch) - https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\n'
          }
        </CodeBlock>
        <ReferenceFade />
        <ReferenceRotate />
        <ReferenceScale />
        <ReferenceSkew />
        <ReferenceSlide />
        <h1>{'Advanced Usage'}</h1>
        <ExampleComposition />
        <ExampleSequencing />
      </Layout>
    )
  }
}
