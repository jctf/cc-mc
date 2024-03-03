# Mastercard Design System ( Code Challenge )

## Overview

This project is a UI application developed using the Atomic Design structure. It utilizes various UI packages organized
according to the Atomic Design principles for efficient development and maintenance.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root folder of the project.
3. Install dependencies using npm:

```
npm install
```

Start the development server:

```
npm run dev
```

#### storybook should be visible under [localhost](`http://localhost:6006/?path=/story/ui-molecules-password--primary`)

### Dependencies

The project relies on the following dependencies:

- [use-form-hook](https://react-hook-form.com/) : A custom React hook used in combination with yup and resolver to
  handle
  form validation efficiently.
- [yup](https://github.com/jquense/yup?tab=readme-ov-file): A JavaScript schema builder for value parsing and
  validation.
- [classnames](https://github.com/JedWatson/classnames#readme): A simple JavaScript utility for conditionally joining
  classNames together.

### Folder Structure

The project follows the Atomic Design structure, which organizes UI components into atoms, molecules for a better
scalability and reusability.

```lua
Copy code
src/
|--apps
   |--docs
packages/
|-- ui
   |--src/
      |-- atoms/
      |-- molecules/
```

### Apps & Packages

- `apps/docs`: Component documentation site with Storybook
- `packages/ui`: Mastercard Core React components
- `packages/typescript-config`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config`: ESLint preset

### Publishing

When exporting and publishing packages, use the `@mastercard` scope for npm. This ensures proper organization and
identification within the Mastercard namespace.

### Powered by:

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

### Useful Commands

- `npm run build` - Build all packages, including the Storybook site
- `npm run dev` - Run all packages locally and preview with Storybook
- `npm run lint` - Lint all packages
- `npm run changeset` - Generate a changeset
- `npm run clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

