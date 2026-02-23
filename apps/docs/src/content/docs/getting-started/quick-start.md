---
title: Quick Start
description: Get up and running with Minions Risks in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-risks/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_risks import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
risks info
```
