import { it } from 'vitest'
import parseJSON from '~/utils/parseJSON'

it('parse json', () => {
  const result = parseJSON()

  console.log(result)
})
