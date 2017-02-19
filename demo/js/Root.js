import React, {Component} from 'react'

import Layout from './Layout/Layout'

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
