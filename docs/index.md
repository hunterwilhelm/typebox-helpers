---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Typebox Helpers"
  tagline: "UnionOfString and more to come!"
---

## Usage

### UnionOfString

Create TypeBox union types from string arrays with full type safety:

```ts
import { UnionOfString } from '@hunterstack/typebox-helpers'

const Colors = UnionOfString(['red', 'green', 'blue'])
// TUnion<[TLiteral<"red">, TLiteral<"green">, TLiteral<"blue">]>
```

## Installation

```bash
npm install @hunterstack/typebox-helpers
```

## Features

- Tree-shakable utilities
- Type-safe helpers
- Zero dependencies (except TypeBox)
