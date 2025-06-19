import type { SchemaOptions, TLiteral, TLiteralValue, TUnion } from '@sinclair/typebox'
import { Type } from '@sinclair/typebox'

/**
 * Helper type to convert an array of strings into an array of TypeBox TLiteral types
 * @template T - Tuple type extending TLiteralValue[] with const assertion to preserve literal types
 */
export type TUnionOf<T extends TLiteralValue[]> = {
  [K in keyof T]: T[K] extends TLiteralValue ? TLiteral<T[K]> : never
}

/**
 * Creates a TypeBox union type from an array of literals.
 * This provides a convenient way to define literal union types that can be used for runtime validation.
 *
 * @template T - Tuple type extending TLiteralValue[] with const assertion to preserve literal types
 * @param values - Array of literals to create union from
 * @param options - Optional TypeBox schema options
 * @returns TypeBox union type of string literals
 *
 * @example
 * ```ts
 * const Colors = UnionOf([1, 'red', true])
 * // Type.Union([
 * //   Type.Literal(1),
 * //   Type.Literal('red'),
 * //   Type.Literal(true)
 * // ])
 * ```
 *
 * @see {@link https://github.com/sinclairzx81/typebox/discussions/315#discussioncomment-9304493 TypeBox Discussion}
 */
export function UnionOf<const T extends TLiteralValue[]>(values: [...T], options: SchemaOptions = {}): TUnion<TUnionOf<T>> {
  return Type.Union(values.map(value => Type.Literal(value)), options) as never // safe cast due to type constraints
}
