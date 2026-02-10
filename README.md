# NextJS App 04

Next.js **14.1.0** with App Router using legacy font optimization.

## Current Version
- **Next.js**: 14.1.0
- **React**: 18.2.0

## Breaking Changes for Next.js 15

### 1. Font Import (PRIMARY ISSUE)
- Uses old `@next/font/google` package
- **Fix**: Change to `next/font/google`
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
