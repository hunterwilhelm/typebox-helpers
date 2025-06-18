import { bench } from '@ark/attest'
import { Static } from '@sinclair/typebox'
import { UnionOfString } from './UnionOfString'

console.log('UnionOfString')
{
	const values = toTuple(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
	bench('a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z', () => {
		const schema = UnionOfString(values)
		type S = Static<typeof schema>
		return {} as S
	}).types([80, 'instantiations'])
}

{
	const values = toTuple(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'])
	bench('a,b,c,d,e,f,g,h,i,j,k,l', () => {
		const schema = UnionOfString(values)
		type S = Static<typeof schema>
		return {} as S
	}).types([80, 'instantiations'])
}

{
	const values = toTuple(['a', 'b', 'c', 'd'])
	bench('a,b,c,d', () => {
		const schema = UnionOfString(values)
		type S = Static<typeof schema>
		return {} as S
	}).types([80, 'instantiations'])
}

{
	const values = toTuple(['a', 'b', 'c'])
	bench('a,b,c', () => {
		const schema = UnionOfString(values)
		type S = Static<typeof schema>
		return {} as S
	}).types([80, 'instantiations'])
}


function toTuple<const T extends unknown[]>(values: T): T {
	return values as T
}