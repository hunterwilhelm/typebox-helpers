import { Value } from '@sinclair/typebox/value'
import { describe, expect, it } from 'vitest'
import { UnionOfString } from './UnionOfString'

describe('should create a string literal union', () => {
  it('should create a string literal union', () => {
    const schema = UnionOfString(['a', 'b', 'c'])
    expect(Value.Check(schema, 'a')).toBe(true)
    expect(Value.Check(schema, 'b')).toBe(true)
    expect(Value.Check(schema, 'c')).toBe(true)
    expect(Value.Check(schema, 'd')).toBe(false)
  })
})
