# CLAUDE.md

`inzumer-tokens`: the `@inzumer/tokens` package (design tokens, themes, CSS variables and the
Tailwind preset of the Inzumer design system). Shared packages follow `inzumer-<name>` →
`@inzumer/<name>`; consumers are `@inzumer/ui-library` (repo `inzumer-ui-library`) and the Inzumer
projects (Milimon, Zamuner).

- Tokens come in three layers: base values (`src/tokens/base`), semantic tokens
  (`src/tokens/semantic`) and themes (`src/themes`). Components only use semantic CSS variables.
- Renaming or removing a variable, preset key or export breaks consumers: prefer additive changes,
  and use a `major` changeset (with a migration note) when a break is unavoidable.
- `pnpm check` runs typecheck, lint, format check and build; `pnpm format` formats.
- Conventional Commits for commits and PR titles; work on branches and open PRs to `main`.
- Every published change needs a changeset. Never commit or push unless asked.
