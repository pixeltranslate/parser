import { flatten } from 'flat'
import type { ParseOutput } from '~/types/parse'

export default function (object: any, delimiter: string = '.'): ParseOutput<Map<string, string>> {
  const stopWatch = Date.now()
  const result = flatten(object, {
    delimiter
  })
  return { timeTaken: Date.now() - stopWatch, value: result as Map<string, string> }
}
