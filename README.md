# @inzumer/tokens

Design tokens, themes, CSS variables and the Tailwind preset of the Inzumer design system. Part of
the Inzumer shared packages (one repository per package: `inzumer-<name>` published as
`@inzumer/<name>`). The components live in
[`@inzumer/ui-library`](https://github.com/inzumer/inzumer-ui-library).

## Install

```sh
pnpm add @inzumer/tokens
```

## Usage

```ts
// CSS entry points (import only what you need)
import '@inzumer/tokens/css/reset';
import '@inzumer/tokens/css/variables';
import '@inzumer/tokens/css/typography';
import '@inzumer/tokens/css/scrollbar';
```

```ts
// tailwind.config.ts
import { DefaultPreset } from '@inzumer/tokens/tailwind';

export default { presets: [DefaultPreset], content: ['./src/**/*.{ts,tsx}'] };
```

With Tailwind 4, load that config from your CSS:

```css
@import 'tailwindcss';
@config './tailwind.config.ts';
```

```tsx
// Change the color values at runtime
import { InzumerProvider } from '@inzumer/tokens';
```

| Export                          | Contents                                            |
| ------------------------------- | --------------------------------------------------- |
| `@inzumer/tokens`               | Base and semantic tokens, themes, `InzumerProvider` |
| `@inzumer/tokens/tailwind`      | `DefaultPreset` (colors, fonts, spacing, radius)    |
| `@inzumer/tokens/css/reset`     | Modern reset (`html { font-size: 62.5% }`)          |
| `@inzumer/tokens/css/variables` | Semantic CSS variables for light and dark mode      |
| `@inzumer/tokens/css/*`         | `typography` and `scrollbar` styles                 |

The full guide (layers, theming, overriding styles) is in the
[ui-library Storybook docs](https://github.com/inzumer/inzumer-ui-library/tree/main/docs).

## Development

```sh
pnpm install
pnpm check   # typecheck, lint, format check and build
```

To try a change in `inzumer-ui-library` before publishing, link it from there:
`pnpm link ../inzumer-tokens`.

## Releases

Add a changeset with `pnpm changeset` for every change that should be published. Merging to `main`
opens the "Version Packages" PR; merging that PR publishes to npm (needs the `NPM_TOKEN` secret).
