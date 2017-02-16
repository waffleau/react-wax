import React from 'react'
import renderer from 'react-test-renderer'

import Scale from '../src/Scale'

test('has no scale when inactive', () => {
  const tree = renderer.create(
    <Scale active={false}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('has scale of 1 when active', () => {
  const tree = renderer.create(
    <Scale active>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a minimum x scale', () => {
  const tree = renderer.create(
    <Scale
      active={false}
      minX={0.1}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a minimum y scale', () => {
  const tree = renderer.create(
    <Scale
      active={false}
      minY={0.1}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a maximum x scale', () => {
  const tree = renderer.create(
    <Scale
      active
      maxX={1.1}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a maximum y scale', () => {
  const tree = renderer.create(
    <Scale
      active
      maxY={1.1}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
