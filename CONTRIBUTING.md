# Contributing to TypeBox Helpers

Thank you for your interest in contributing to TypeBox Helpers! This document provides guidelines and instructions for contributing.

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/typebox-helpers.git
   cd typebox-helpers
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Run tests to ensure everything works:
   ```bash
   npm test
   ```

4. Run benchmarks to check performance:
   ```bash
   npm run bench
   ```

5. Commit your changes with a descriptive commit message

6. Push your branch and create a Pull Request

## Code Style

- Follow the existing code style
- Use TypeScript for all new code
- Write tests for new features
- Add benchmarks for performance-critical code
- Update documentation as needed

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the version numbers in package.json following [SemVer](https://semver.org/)
3. The PR will be merged once you have the sign-off of at least one maintainer

## Testing

We use Vitest for testing. Make sure all tests pass before submitting a PR:

```bash
npm test
```

## Benchmarking

We use custom benchmarks to ensure performance. Run benchmarks before and after your changes:

```bash
npm run bench
```

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License. 