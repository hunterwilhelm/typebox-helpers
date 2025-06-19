---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Typebox Helpers"
  tagline: "UnionOf and more to come!"
---

## Usage

### UnionOf

Create TypeBox union types from arrays with full type safety:

```ts
import { UnionOf } from '@hunterstack/typebox-helpers'

const Numbers = UnionOf([1, 2, 3, 4, 5])
// TUnion<[TLiteral<1>, TLiteral<2>, TLiteral<3>, TLiteral<4>, TLiteral<5>]>

const Mixed = UnionOf([1, 'red', true])
// TUnion<[TLiteral<1>, TLiteral<"red">, TLiteral<true>]>
```

## Installation

```bash
npm install @hunterstack/typebox-helpers
```

## Features

- Tree-shakable utilities
- Type-safe helpers
- Zero dependencies (except TypeBox)
