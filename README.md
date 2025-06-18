<div align="center">
  <a href="https://www.npmjs.com/package/@hunterstack/typebox-helpers">
    <img alt="weekly downloads" src="https://img.shields.io/npm/dw/@hunterstack/typebox-helpers?logo=npm" />
  </a>
  <a href="https://github.com/hunterwilhelm/typebox-helpers/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/hunterwilhelm/typebox-helpers?logo=open-source-initiative" />
  </a>
</div>

# TypeBox Helpers

A collection of tree-shakable TypeBox helper utilities to make working with TypeBox even easier.

## Installation

```bash
npm install @hunterstack/typebox-helpers
```

## Features

- Tree-shakable utilities
- Type-safe helpers
- Zero dependencies (except TypeBox)

## Usage

### UnionOfString

Create TypeBox union types from string arrays with full type safety:

```typescript
import { UnionOfString } from '@hunterstack/typebox-helpers'

const Colors = UnionOfString(['red', 'green', 'blue'])
// TUnion<[TLiteral<"red">, TLiteral<"green">, TLiteral<"blue">]>
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run benchmarks
npm run bench

# Build
npm run build
```

## License

MIT
