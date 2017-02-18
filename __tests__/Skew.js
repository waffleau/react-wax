import React from 'react'
import renderer from 'react-test-renderer'

import Skew from '../src/Skew'

test('has no scale when inactive', () => {
  const tree = renderer.create(
    <Skew
      active={false}
      to={[10, 10]}>
      {'Children'}
    </Skew>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a minimum x skew', () => {
  const tree = renderer.create(
    <Skew
      active={false}
      from={[.1, .1]}
      to={[10, 10]}>
      {'Children'}
    </Skew>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a minimum y skey', () => {
  const tree = renderer.create(
    <Skew
      active={false}
      from={[.1, .1]}
      to={[10, 10]}>
      {'Children'}
    </Skew>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a maximum x skew', () => {
  const tree = renderer.create(
    <Skew
      active
      to={[1.1, 1.1]}>
      {'Children'}
    </Skew>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can specify a maximum y skew', () => {
  const tree = renderer.create(
    <Skew
      active
      to={[10, 10]}>
      {'Children'}
    </Skew>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
