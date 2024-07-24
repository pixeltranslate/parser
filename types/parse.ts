/**
 * @timeTaken will be show in milliseconds
 */
declare interface ParseOutput<T> {
  timeTaken: number
  value: T
}

export type { ParseOutput }
