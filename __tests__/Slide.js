import React from 'react'
import renderer from 'react-test-renderer'

import Slide from '../src/Slide'

test('can transition down', () => {
  const tree = renderer.create(
    <Slide
      active
      direction="down">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition down-left', () => {
  const tree = renderer.create(
    <Slide
      active
      direction="downLeft">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition left', () => {
  const tree = renderer.create(
    <Slide
      active
      direction="left">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up-left', () => {
  const tree = renderer.create(
    <Slide
      active
      direction="upLeft">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up', () => {
  const tree = renderer.create(
    <Slide
      active={false}
      direction="up">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up-right', () => {
  const tree = renderer.create(
    <Slide
      active
      direction="upRight">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition right', () => {
  const tree = renderer.create(
    <Slide
      active
      direction="right">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition down-right', () => {
  const tree = renderer.create(
    <Slide
      active
      direction="downRight">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('has no translation when inactive', () => {
  const tree = renderer.create(
    <Slide
      active={false}
      direction="down">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
