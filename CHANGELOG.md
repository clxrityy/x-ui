# CHANGELOGS

- **v0**
    - [0.1.0](#010)
    - [0.1.1](#011)
    - [0.2.0](#020)

---

# 0.1.0

- Initalize the project (forked from [@IgnacioNMiranda/vite-component-library-template](https://github.com/IgnacioNMiranda/vite-component-library-template))
- #### Cleanup / Setup
    - Change scripts
    - Switch from `pnpm` to `yarn`
    - Clear existing components
    - Alter `.github/` workflows
        - **NOTE:** Not automatically published on commit, will be implemented in future releases.
    - Fix `.husky/`
    - Change [`vite.config.ts`]
        - Compiles into TypeScript & CommonJS
- Create [**`<Button />`**](./src/lib/components/button/index.tsx) component.

# 0.1.1

- Published first version

# 0.2.0

- Updated [README.md](/README.md)
    - Including badges
    - Link to changelog
    - Note about original template
- Add more components
    - [`<Card />`](./src/lib/components/card/index.tsx)
    - [`<Input />`](./src/lib/components/input/index.tsx)
    - [`<Separator />`](./src/lib/components/separator/index.tsx)
- Added addition configurations to [storybook](https://storybook.js.org/)
    - Support for `.mdx` files
    - Static directory for metadata
- Added support for GitHub pages
    - Storybook now can be viewed at [clxrityy.github.io/x-ui](https://clxrityy.github.io/x-ui/)