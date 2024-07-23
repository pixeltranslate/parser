import type { ParseOutput } from '~/types/parse'

export default function (): ParseOutput {
  const stopWatch = Date.now()

  return { timeTaken: Date.now() - stopWatch }
}
