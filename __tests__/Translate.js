import React from 'react'
import renderer from 'react-test-renderer'

import Translate from '../src/Translate'

test('can transition down', () => {
  const tree = renderer.create(
    <Translate
      active
      to={[0, 100]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition down-left', () => {
  const tree = renderer.create(
    <Translate
      active
      to={[-100, 100]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition left', () => {
  const tree = renderer.create(
    <Translate
      active
      to={[-100, 0]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up-left', () => {
  const tree = renderer.create(
    <Translate
      active
      to={[-100, -100]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up', () => {
  const tree = renderer.create(
    <Translate
      active={false}
      to={[0, -100]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up-right', () => {
  const tree = renderer.create(
    <Translate
      active
      to={[100, -100]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition right', () => {
  const tree = renderer.create(
    <Translate
      active
      to={[100, 0]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition down-right', () => {
  const tree = renderer.create(
    <Translate
      active
      to={[100, 100]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('has no translation when inactive', () => {
  const tree = renderer.create(
    <Translate
      active={false}
      to={[0, 0]}>
      {'Children'}
    </Translate>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
