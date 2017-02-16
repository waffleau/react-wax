import React from 'react'
import renderer from 'react-test-renderer'

import Fade from '../src/Fade'

test('has opacity 0 when inactive', () => {
  const tree = renderer.create(
    <Fade active={false}>
      {'Children'}
    </Fade>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('has opacity 1 when active', () => {
  const tree = renderer.create(
    <Fade active>
      {'Children'}
    </Fade>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a minimum opacity', () => {
  const tree = renderer.create(
    <Fade
      active={false}
      minOpacity={0.1}>
      {'Children'}
    </Fade>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a maximum opacity', () => {
  const tree = renderer.create(
    <Fade
      active
      maxOpacity={0.9}>
      {'Children'}
    </Fade>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
