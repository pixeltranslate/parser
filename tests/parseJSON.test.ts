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
