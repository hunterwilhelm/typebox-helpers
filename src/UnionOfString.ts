import type { SchemaOptions, TLiteral, TSchema, TUnion } from '@sinclair/typebox'
import { Type } from '@sinclair/typebox'

/**
 * Helper type to convert an array of strings into an array of TypeBox TLiteral types
 * @template T - Tuple type extending string[] with const assertion to preserve literal types
 * @template Acc - Accumulator type to build the union type
 */
export type TUnionOfString<T extends string[], Acc extends TSchema[] = []>
  = T extends [infer L extends string, ...infer R extends string[]]
    ? TUnionOfString<R, [...Acc, TLiteral<L>]>
    : Acc
/**
 * Creates a TypeBox union type from an array of string literals.
 * This provides a convenient way to define string literal union types that can be used for runtime validation.
 *
 * @template T - Tuple type extending string[] with const assertion to preserve literal types
 * @param values - Array of string literals to create union from
 * @param options - Optional TypeBox schema options
 * @returns TypeBox union type of string literals
 *
 * @example
 * ```ts
 * const Colors = UnionOfString(['red', 'green', 'blue'])
 * // Type.Union([
 * //   Type.Literal('red'),
 * //   Type.Literal('green'),
 * //   Type.Literal('blue')
 * // ])
 * ```
 *
 * @see {@link https://github.com/sinclairzx81/typebox/discussions/315#discussioncomment-9304493 TypeBox Discussion}
 */
export function UnionOfString<const T extends string[]>(values: [...T], options: SchemaOptions = {}): TUnion<TUnionOfString<T>> {
  return Type.Union(values.map(value => Type.Literal(value)), options) as never // safe cast due to type constraints
}
