import React from 'react'
import renderer from 'react-test-renderer'

import Rotate from '../src/Rotate'

test('has no rotation when inactive', () => {
  const tree = renderer.create(
    <Rotate
      active={false}
      to={180}>
      {'Children'}
    </Rotate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can rotate to 90 degrees', () => {
  const tree = renderer.create(
    <Rotate
      active
      to={90}>
      {'Children'}
    </Rotate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can rotate to 180 degrees', () => {
  const tree = renderer.create(
    <Rotate
      active
      to={180}>
      {'Children'}
    </Rotate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can rotate to 270 degrees', () => {
  const tree = renderer.create(
    <Rotate
      active
      to={270}>
      {'Children'}
    </Rotate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
