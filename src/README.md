# Source Structure

```
src/
├── base/ui/
├── docs/
├── lib/
│   ├── components/ 
│   ├── tailwind/theme.css
│   ├── index.ts
├── util/
├── config.ts
```

- [`base/ui`](#baseui)
- [`docs/`](#docs)
- [`lib/`](#lib)
    - [`components/`](#libcomponents)
    - [`tailwind/theme.css`](#libtailwindthemecss)
- [`util/`](#util)
- [`config.ts`](#configts)


---

## base/ui

The directory for all the installed components from [shadcn/ui](https://ui.shadcn.com/).

- These components are used as a base.

#### Example

```
npx shadcn@latest add button
```
- Adds `components/ui/button.tsx`

That component and it's given interfaces are then imported into the library under the button directory (`lib/components/button`).

Further customization and properties are added and then exported as a component in the library.

---

## docs

The markdown files/pages/routes that are included in the documentation 

---

## lib

This is where every aspect of the package is exported.

### lib/components

This is where all the components for the library are determined.

##### Structure of a component export:

```
lib/
├── components/
│   ├── button/
│   │   ├── index.tsx
│   │   ├── button.test.tsx
│   │   ├── button.stories.tsx
│   ├── index.ts
├── index.ts
```

- **`lib/components/button/index.tsx`** ─ The main component
- **`lib/components/button/button.test.tsx`** ─ The test file that ensures the button renders
    - `yarn test`
- **`lib/components/button/button.stories.tsx`** ─ Where the storybook displays of the component are defined
- **`lib/components/index.ts`** ─ Where all the components are imported & exported
- **`lib/index.ts`** ─ Where *everything* from the package is exported

### lib/tailwind/theme.css

This is the main exported `.css` file that ensures tailwind css features and base styles are applied to components.

---

## util

Utility functions that are necessary throughout the library, such as:

```ts
// util/cn.ts

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## config.ts

Simple configurations/constants throughout the library, such as icons, colors, etc.