import type { TLiteral, TObject, TUnion } from '@sinclair/typebox'
import { attest, getPrimaryTsVersionUnderTest } from '@ark/attest'
import { Value } from '@sinclair/typebox/value'
import { t } from 'elysia'
import { describe, expect, it } from 'vitest'
import { UnionOfString } from './UnionOfString'

describe('should create a string literal union', () => {
  it('should create a string literal union', () => {
    const schema = UnionOfString(['a', 'b', 'c'])
    expect(Value.Check(schema, 'a')).toBe(true)
    expect(Value.Check(schema, 'b')).toBe(true)
    expect(Value.Check(schema, 'c')).toBe(true)
    expect(Value.Check(schema, 'd')).toBe(false)

    if (getPrimaryTsVersionUnderTest().startsWith('5')) {
      attest<TUnion<[TLiteral<'a'>, TLiteral<'b'>, TLiteral<'c'>]>>(schema)
    }
  })

  it('should work with elysia', () => {
    const schema = t.Object({
      status: UnionOfString(['a', 'b', 'c']),
    })
    expect(Value.Check(schema, { status: 'a' })).toBe(true)
    expect(Value.Check(schema, { status: 'b' })).toBe(true)
    expect(Value.Check(schema, { status: 'c' })).toBe(true)
    expect(Value.Check(schema, { status: 'd' })).toBe(false)

    if (getPrimaryTsVersionUnderTest().startsWith('5')) {
      attest<TObject<{ status: TUnion<[TLiteral<'a'>, TLiteral<'b'>, TLiteral<'c'>]> }>>(schema)
    }
  })
})
