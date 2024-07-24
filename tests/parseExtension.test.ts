import { expect, it } from 'vitest'
import parseExtension from '~/utils/parseExtension'
import { ParserExtensions } from '~/types/extensions'

it('parse extension', () => {
  const extension = parseExtension('test.json')
  expect(extension).toStrictEqual(ParserExtensions.JSON)
})

it('parse extension not supported', () => {
  const extension = parseExtension('test.csv')
  expect(extension).toStrictEqual(ParserExtensions.None)
})
