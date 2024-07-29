import { ParserExtensions } from '~/types/extensions'

/**
 * It will check if the value that was provided as a parameter is a supported extension by this package
 *
 * @param value = example: test.json
 */
export default function (value: string) {
  try {
    const strippedExtension = value.split('.')[1].toLowerCase()
    return Object.values(ParserExtensions).filter(value => value === strippedExtension)[0] || ParserExtensions.None
  }
  catch {
    return ParserExtensions.None
  }
}
