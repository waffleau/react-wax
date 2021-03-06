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

test('default scale of 1 when active', () => {
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
      from={[.1, .1]}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a minimum y scale', () => {
  const tree = renderer.create(
    <Scale
      active={false}
      from={[.1, .1]}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a maximum x scale', () => {
  const tree = renderer.create(
    <Scale
      active
      to={[1.1, 1.1]}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a maximum y scale', () => {
  const tree = renderer.create(
    <Scale
      active
      to={[1.1, 1.1]}>
      {'Children'}
    </Scale>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
