import type { TLiteral, TUnion } from '@sinclair/typebox'
import { attest, getPrimaryTsVersionUnderTest } from '@ark/attest'
import { Value } from '@sinclair/typebox/value'
import { t } from 'elysia'
import { describe, expect, it } from 'vitest'
import { UnionOf } from './UnionOf'

describe('should create a string literal union', () => {
  it('should create a string literal union', () => {
    const schema = UnionOf(['a', 'b', 'c'])
    expect(Value.Check(schema, 'a')).toBe(true)
    expect(Value.Check(schema, 'b')).toBe(true)
    expect(Value.Check(schema, 'c')).toBe(true)
    expect(Value.Check(schema, 'd')).toBe(false)
    if (getPrimaryTsVersionUnderTest().startsWith('5')) {
      attest<TUnion<[TLiteral<'a'>, TLiteral<'b'>, TLiteral<'c'>]>>(schema)
    }
  })
  it('should work with tuple of numbers', () => {
    const schema = UnionOf([1, 2, 3])
    expect(Value.Check(schema, 1)).toBe(true)
    expect(Value.Check(schema, 2)).toBe(true)
    expect(Value.Check(schema, 3)).toBe(true)
    expect(Value.Check(schema, 4)).toBe(false)
  })
  it('should work with tuple of booleans', () => {
    const schema = UnionOf([true, false])
    expect(Value.Check(schema, true)).toBe(true)
    expect(Value.Check(schema, false)).toBe(true)
    expect(Value.Check(schema, 4)).toBe(false)
  })
  it('should work with tuple of mixed types', () => {
    const schema = UnionOf([1, 'b', true])
    expect(Value.Check(schema, 1)).toBe(true)
    expect(Value.Check(schema, 'b')).toBe(true)
    expect(Value.Check(schema, true)).toBe(true)
    expect(Value.Check(schema, 4)).toBe(false)
  })

  it('should work with elysia', () => {
    const schema = t.Object({
      status: UnionOf(['a', 'b', 'c']),
    })
    expect(Value.Check(schema, { status: 'a' })).toBe(true)
    expect(Value.Check(schema, { status: 'b' })).toBe(true)
    expect(Value.Check(schema, { status: 'c' })).toBe(true)
    expect(Value.Check(schema, { status: 'd' })).toBe(false)
  })
})
