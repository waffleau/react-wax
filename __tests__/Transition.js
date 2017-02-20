import React from 'react'
import renderer from 'react-test-renderer'

import Transition from '../src/Transition'

test('can be inactive', () => {
  const tree = renderer.create(
    <Transition
      active={false}
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can be active', () => {
  const tree = renderer.create(
    <Transition
      active
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom delay', () => {
  const tree = renderer.create(
    <Transition
      active
      delay={2222}
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom entry delay', () => {
  const tree = renderer.create(
    <Transition
      active
      delayEnter={2222}
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom exit delay', () => {
  const tree = renderer.create(
    <Transition
      active
      delayLeave={2222}
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
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
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom entry duration', () => {
  const tree = renderer.create(
    <Transition
      active
      durationEntry={9999}
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom exit duration', () => {
  const tree = renderer.create(
    <Transition
      active
      durationLeave={9999}
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
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
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
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
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('accepts an array of numbers describing easing', () => {
  const tree = renderer.create(
    <Transition
      active
      easing={[.1, .3, .7, .9]}
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom entry easing', () => {
  const tree = renderer.create(
    <Transition
      active
      easingEntry="easeInOut"
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can have a custom exit easing', () => {
  const tree = renderer.create(
    <Transition
      active
      easingLeave="easeInOut"
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
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
      from={{ backgroundColor: 'red' }}
      to={{ backgroundColor: 'blue' }}>
      {'Children'}
    </Transition>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
