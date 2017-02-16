import React from 'react'
import renderer from 'react-test-renderer'

import Transition from '../src/Transition'

test('can be inactive', () => {
  const tree = renderer.create(
    <Transition
      active={false}
      fromValue={{ backgroundColor: 'red' }}
      toValue={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can be active', () => {
  const tree = renderer.create(
    <Transition
      active
      fromValue={{ backgroundColor: 'red' }}
      toValue={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom duration', () => {
  const tree = renderer.create(
    <Transition
      active
      duration={9999}
      fromValue={{ backgroundColor: 'red' }}
      toValue={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom easing', () => {
  const tree = renderer.create(
    <Transition
      active
      easing="easeInOut"
      fromValue={{ backgroundColor: 'red' }}
      toValue={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom style', () => {
  const tree = renderer.create(
    <Transition
      active
      style={{ color: 'yellow' }}
      fromValue={{ backgroundColor: 'red' }}
      toValue={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom timing', () => {
  const tree = renderer.create(
    <Transition
      active
      timing="cubic-bezier(0.250, 0.250, 0.750, 0.750)"
      fromValue={{ backgroundColor: 'red' }}
      toValue={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('prefers easing over timing', () => {
  const tree = renderer.create(
    <Transition
      active
      easing="easeInOut"
      timing="cubic-bezier(0.250, 0.250, 0.750, 0.750)"
      fromValue={{ backgroundColor: 'red' }}
      toValue={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})