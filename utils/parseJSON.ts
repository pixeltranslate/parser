import { flatten } from 'flat'
import type { ParseOutput } from '~/types/parse'

/**
 * Parses an object (nested json) into a flatten map
 * Example: {
 *     hello: {
 *         world: "Hello World"
 *     }
 * }
 * Would be converted to : {"hello.world": "Hello World}
 *
 * If the object you pass as the parameter is already a nested json, it will basically do nothing.
 * If the object is invalid (undefined), it will throw an error
 *
 * @param object = the nested json
 * @param delimiter = the output delimited
 */
export default function (object: any, delimiter: string = '.'): ParseOutput<Map<string, string>> {
  const stopWatch = Date.now()
  const result = flatten(object, {
    delimiter
  })
  return { timeTaken: Date.now() - stopWatch, value: result as Map<string, string> }
}
