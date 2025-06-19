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

### UnionOf

Create TypeBox union types from any literal values (strings, numbers, booleans) with full type safety:

```typescript
import { UnionOf } from '@hunterstack/typebox-helpers'

const Status = UnionOf(['active', 'inactive', 'pending'])
// TUnion<[TLiteral<"active">, TLiteral<"inactive">, TLiteral<"pending">]>

const Numbers = UnionOf([1, 2, 3, 4, 5])
// TUnion<[TLiteral<1>, TLiteral<2>, TLiteral<3>, TLiteral<4>, TLiteral<5>]>

const Mixed = UnionOf([1, 'red', true])
// TUnion<[TLiteral<1>, TLiteral<"red">, TLiteral<true>]>
```

## Testing

This package is thoroughly tested with a comprehensive approach:

### Runtime Tests
- **Vitest** for runtime validation testing
- Tests ensure schemas correctly validate expected values and reject invalid ones
- Integration tests with frameworks like Elysia
- Covers all literal types: strings, numbers, booleans, and mixed unions

### Type Tests
- **@ark/attest** for type inference checking performance
- Ensures TypeScript types are correctly inferred
- Validates that generated schemas match expected TypeBox types
- Prevents type regressions and ensures full type safety

### Benchmarks
- Performance benchmarks using @ark/attest
- Monitors schema creation and validation performance
- Automated performance regression detection

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run benchmarks
npm run bench
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
