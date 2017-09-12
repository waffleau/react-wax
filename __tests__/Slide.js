import React from 'react'
import renderer from 'react-test-renderer'

import Slide from '../src/Slide'

test('can transition down', () => {
  const tree = renderer.create(
    <Slide
      active
      to="bottom">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition down-left', () => {
  const tree = renderer.create(
    <Slide
      active
      to="bottomLeft">
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
      to="topLeft">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up', () => {
  const tree = renderer.create(
    <Slide
      active={false}
      to="top">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('can transition up-right', () => {
  const tree = renderer.create(
    <Slide
      active
      to="topRight">
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
      to="bottomRight">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('has no translation when inactive', () => {
  const tree = renderer.create(
    <Slide
      active={false}
      to="center">
      {'Children'}
    </Slide>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
