import { expect, it } from 'vitest'
import parseJSON from '~/utils/parseJSON'

it('parse json', () => {
  const input = {
    hello: {
      world: 'Hello World'
    }
  }
  const result = parseJSON(input)
  expect(result.value).toStrictEqual({ 'hello.world': 'Hello World' })
})

it('parse json already flatten object', () => {
  const input = { 'hello.world': 'Hello World' }
  const result = parseJSON(input)
  expect(result.value).toStrictEqual({ 'hello.world': 'Hello World' })
})

it('parse json null object', () => {
  expect(() => parseJSON(null)).toThrowError()
  expect(() => parseJSON(undefined)).toThrowError()
})
