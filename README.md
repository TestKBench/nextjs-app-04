# NextJS App 04

Next.js **15.3.4** with App Router using modern font optimization.

## Current Version
- **Next.js**: 15.3.4
- **React**: 19.0.0

## Migration from Next.js 14.1.0

### Font Import (MIGRATED)
- Migrated from `@next/font/google` to `next/font/google`
  ```tsx
  // Old:
  import { Inter } from '@next/font/google'

  // New:
  import { Inter } from 'next/font/google'
  ```

## Installation
```bash
npm install
```

Part of **Exit Criteria Scenario 2** - Repo 4 of 10
