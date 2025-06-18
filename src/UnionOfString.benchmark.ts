import type { Static } from '@sinclair/typebox'
import { bench } from '@ark/attest'
import { UnionOfString } from './UnionOfString'

{
  const values = toTuple(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
  bench('a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z', () => {
    const _schema = UnionOfString(values)
    type S = Static<typeof _schema>
    return {} as S
  }).types([80, 'instantiations'])
}

{
  const values = toTuple(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'])
  bench('a,b,c,d,e,f,g,h,i,j,k,l', () => {
    const _schema = UnionOfString(values)
    type S = Static<typeof _schema>
    return {} as S
  }).types([80, 'instantiations'])
}

{
  const values = toTuple(['a', 'b', 'c', 'd'])
  bench('a,b,c,d', () => {
    const _schema = UnionOfString(values)
    type S = Static<typeof _schema>
    return {} as S
  }).types([80, 'instantiations'])
}

{
  const values = toTuple(['a', 'b', 'c'])
  bench('a,b,c', () => {
    const _schema = UnionOfString(values)
    type S = Static<typeof _schema>
    return {} as S
  }).types([80, 'instantiations'])
}

function toTuple<const T extends unknown[]>(values: T): T {
  return values as T
}
