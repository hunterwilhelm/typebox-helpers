import type { Static } from '@sinclair/typebox'
import { bench } from '@ark/attest'
import { UnionOf } from './UnionOf'

{
  const values = toTuple([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])
  bench('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26', () => {
    const _schema = UnionOf(values)
    type S = Static<typeof _schema>
    return {} as S
  }).types([80, 'instantiations'])
}

{
  const values = toTuple([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  bench('1,2,3,4,5,6,7,8,9,10', () => {
    const _schema = UnionOf(values)
    type S = Static<typeof _schema>
    return {} as S
  }).types([80, 'instantiations'])
}

{
  const values = toTuple([1, 2, 3, 4, 5])
  bench('1,2,3,4,5', () => {
    const _schema = UnionOf(values)
    type S = Static<typeof _schema>
    return {} as S
  }).types([80, 'instantiations'])
}

{
  const values = toTuple([1, 'b', true])
  bench('1,b,true', () => {
    const _schema = UnionOf(values)
    type S = Static<typeof _schema>
    return {} as S
  }).types([80, 'instantiations'])
}

function toTuple<const T extends unknown[]>(values: T): T {
  return values as T
}
