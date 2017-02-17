import React from 'react'
import renderer from 'react-test-renderer'

import Slide from '../src/Slide'

test('can transition down', () => {
  const tree = renderer.create(
    <Slide
      active
      to="down">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition down-left', () => {
  const tree = renderer.create(
    <Slide
      active
      to="downLeft">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition left', () => {
  const tree = renderer.create(
    <Slide
      active
      to="left">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up-left', () => {
  const tree = renderer.create(
    <Slide
      active
      to="upLeft">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up', () => {
  const tree = renderer.create(
    <Slide
      active={false}
      to="up">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up-right', () => {
  const tree = renderer.create(
    <Slide
      active
      to="upRight">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition right', () => {
  const tree = renderer.create(
    <Slide
      active
      to="right">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition down-right', () => {
  const tree = renderer.create(
    <Slide
      active
      to="downRight">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('has no translation when inactive', () => {
  const tree = renderer.create(
    <Slide
      active={false}
      to="down">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
