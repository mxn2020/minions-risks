# minions-risks

**Risk register, likelihood, impact, and mitigation plans**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-risks/sdk minions-sdk

# Python
pip install minions-risks

# CLI (global)
npm install -g @minions-risks/cli
```

---

## CLI

```bash
# Show help
risks --help
```

---

## Python SDK

```python
from minions_risks import create_client

client = create_client()
```

---

## Project Structure

```
minions-risks/
  packages/
    core/           # TypeScript core library (@minions-risks/sdk on npm)
    python/         # Python SDK (minions-risks on PyPI)
    cli/            # CLI tool (@minions-risks/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [risks.minions.help](https://risks.minions.help)
- Blog: [risks.minions.blog](https://risks.minions.blog)
- App: [risks.minions.wtf](https://risks.minions.wtf)

---

## License

[MIT](LICENSE)
