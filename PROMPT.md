**MINIONS RISKS — RISK REGISTER**

You are tasked with creating the complete initial foundation for **minions-risks** — structured risk management. This is part of the Minions ecosystem, a universal structured object system designed for building AI-native tools.

---

**PROJECT OVERVIEW**

`minions-risks` is a structured system for identifying, assessing, mitigating, and monitoring risks across projects, products, and organizations.

This project is built on the Minions SDK (`minions-sdk`), which provides the foundational primitives: Minion (structured object instance), MinionType (schema), and Relation (typed link between minions).

The system supports both TypeScript and Python SDKs with cross-language interoperability (both serialize to the same JSON format). All documentation includes dual-language code examples with tabbed interfaces.

---

**MINIONS SDK REFERENCE — REQUIRED DEPENDENCY**

This project depends on `minions-sdk`, a published package that provides the foundational primitives. The GH Agent building this project MUST install it from the public registries and use the APIs documented below — do NOT reimplement minions primitives from scratch.

**Installation:**
```bash
# TypeScript (npm)
npm install minions-sdk

# Python (PyPI) — package name is minions-sdk, but you import as "minions"
pip install minions-sdk
```

**TypeScript SDK — Core Imports:**
```typescript
import {
  type Minion, type MinionType, type Relation,
  type FieldDefinition, type FieldValidation, type FieldType,
  type CreateMinionInput, type UpdateMinionInput, type CreateRelationInput,
  type ValidationError, type ValidationResult,
  validateField, validateFields,
  noteType, linkType, fileType, contactType,
  agentType, teamType, thoughtType, promptTemplateType, testCaseType, taskType,
  builtinTypes, TypeRegistry, RelationGraph,
  createMinion, updateMinion, softDelete, hardDelete, restoreMinion,
  migrateMinion, generateId, now, SPEC_VERSION,
} from 'minions-sdk';
```

**Python SDK — Core Imports:**
```python
from minions import (
    Minion, MinionType, Relation, FieldDefinition, FieldValidation,
    CreateMinionInput, UpdateMinionInput, CreateRelationInput,
    ValidationError, ValidationResult,
    validate_field, validate_fields,
    note_type, link_type, file_type, contact_type,
    agent_type, team_type, thought_type, prompt_template_type,
    test_case_type, task_type, builtin_types,
    TypeRegistry, RelationGraph,
    create_minion, update_minion, soft_delete, hard_delete, restore_minion,
    migrate_minion, generate_id, now, SPEC_VERSION,
)
```

**Key Concepts:**
- `MinionType` = schema (list of `FieldDefinition`s). `Minion` = instance. `Relation` = typed link.
- 12 field types: `string`, `number`, `boolean`, `date`, `select`, `multi-select`, `url`, `email`, `textarea`, `tags`, `json`, `array`
- 12 relation types: `parent_of`, `depends_on`, `implements`, `relates_to`, `inspired_by`, `triggers`, `references`, `blocks`, `alternative_to`, `part_of`, `follows`, `integration_link`
- `TypeRegistry` auto-loads 10 built-in types; register custom types with `registry.register(myType)`
- `createMinion(input, type)` validates fields and returns `{ minion, validation }` (TS) or `(minion, validation)` (Python)
- Both SDKs serialize to identical camelCase JSON; Python `to_dict()` / `from_dict()` handles conversion

**IMPORTANT:** Do NOT recreate these primitives. Import from `minions-sdk` (npm) / `minions` (PyPI). Build domain-specific types ON TOP of the SDK.


---

**CORE PRIMITIVES**

This project defines the following Minion Types:

1. **`risk`** — An identified risk (Fields: `title` (string, required), `description` (textarea, required), `impact` (select: low/medium/high/critical), `probability` (select: low/medium/high), `status` (select: identified/mitigating/accepted/resolved), `owner` (string))
2. **`mitigation`** — A risk reduction strategy (Fields: `description` (textarea, required), `cost` (number), `effectiveness` (select: low/medium/high), `status` (select: planned/in-progress/completed)) — Relations: `references` → risk
3. **`trigger`** — A condition that activates a risk (Fields: `description` (textarea, required), `indicator` (string), `isTriggered` (boolean)) — Relations: `references` → risk
4. **`impact`** — A potential consequence (Fields: `description` (textarea, required), `area` (select: financial/operational/reputational/legal), `severity` (number, 1-10)) — Relations: `references` → risk
5. **`owner`** — Risk responsible party (Fields: `name` (string, required), `responsibility` (textarea), `contactEmail` (email)) — Relations: `references` → risk

---

**BEYOND STANDARD PATTERN**

- Risk matrix visualization (impact × probability)
- Trigger monitoring and automatic alert escalation
- Portfolio-level risk aggregation
- Risk trending over time

---

**CLI COMMANDS**

```bash
risks add "Key person dependency" --impact high --probability medium
risks matrix
risks mitigate <id> "Cross-train second engineer"
risks triggered <id>
risks report
```

---

**AGENT SKILL VALUE**

Agents can proactively identify, assess, and monitor risks, triggering alerts when conditions change.

---

**DUAL SDK REQUIREMENTS**

Critical cross-language compatibility requirements:

**Serialization Parity**
- Both TypeScript and Python SDKs must serialize minions to identical JSON format
- Field names, types, and structure must match exactly

**API Consistency**
- Same method names (adjusted for language conventions: TypeScript camelCase, Python snake_case)
- Same parameters and return types

**Documentation Parity**
- Every code example must have both TypeScript and Python versions
- Use Astro Starlight tabs: `<Tabs><TabItem label="TypeScript">...</TabItem><TabItem label="Python">...</TabItem></Tabs>`

---

**PROJECT STRUCTURE**

Standard Minions ecosystem monorepo structure:

```
minions-risks/
  packages/
    core/                 # TypeScript core library
      src/
        types.ts
        index.ts
      test/
      package.json
    python/               # Python SDK
      minions_risks/
        __init__.py
        types.py
      tests/
      pyproject.toml
    cli/                  # CLI tool
      src/
        commands/
        index.ts
      package.json
  apps/
    docs/                 # Astro Starlight documentation
  spec/
    v0.1.md
  examples/
    typescript/
    python/
  .github/
    workflows/
      ci.yml
      publish.yml
  README.md
  LICENSE                # AGPL-3.0
  package.json
```

---

**WHAT YOU NEED TO CREATE**

**1. THE SPECIFICATION** (`/spec/v0.1.md`)
Write a complete markdown specification covering all minion types, field schemas, relation patterns, and domain-specific algorithms.

**2. THE CORE LIBRARY** (`/packages/core`)
A framework-agnostic TypeScript library built on `minions-sdk`. Full type definitions, domain-specific classes, and utilities.

**3. THE PYTHON SDK** (`/packages/python`)
Complete Python port with identical functionality. Published to PyPI as `minions-risks`.

**4. THE CLI** (`/packages/cli`)
All commands listed above, with interactive modes and JSON output support.

**5. THE DOCUMENTATION SITE** (`/apps/docs`)
Built with Astro Starlight. Landing page, getting started, concepts, API reference, guides — all with dual TypeScript/Python examples.

---

**DELIVERABLES**

Produce all files necessary to bootstrap this project completely. Every file should be production quality — not stubs, not placeholders.

1. Full specification (`/spec/v0.1.md`)
2. TypeScript core library (`/packages/core`)
3. Python SDK (`/packages/python`)
4. CLI tool (`/packages/cli`)
5. Documentation site (`/apps/docs`)
6. README with concrete examples
7. Examples in both TypeScript and Python
8. CI/CD setup (lint, test, publish for both languages)

---

**START SYSTEMATICALLY**

1. Write the specification first — nail down the schemas and domain algorithms
2. Implement TypeScript core library with full type definitions
3. Port to Python maintaining exact serialization compatibility
4. Build CLI using the core library
5. Write documentation with dual-language examples throughout
6. Create working examples

This is a foundational tool for the Minions ecosystem. Get it right.
