import type { BaseColors, ResolvedTheme, SemanticTokens } from '@theme-types/theme.js';

const COLOR_VAR = /^var\(--color-([a-z]+)-(\d+)\)$/;
const SPACED_RGBA = /^rgba\((\d+) (\d+) (\d+) \/ ([\d.]+)\)$/;

/** One CSS value to a concrete color: `var(--color-neutral-50)` → `rgb(249, 250, 251)`. */
const resolveValue = (value: string, colors: BaseColors): string => {
  const colorVar = value.match(COLOR_VAR);

  if (colorVar) {
    const [, scale = '', step = ''] = colorVar;
    const channels = (colors as Record<string, Record<string, string>>)[scale]?.[step];

    return channels ? `rgb(${channels.split(' ').join(', ')})` : value;
  }

  const rgba = value.match(SPACED_RGBA);

  return rgba ? `rgba(${rgba.slice(1).join(', ')})` : value;
};

const resolveTree = <T>(node: T, colors: BaseColors): T => {
  if (typeof node === 'string') {
    return resolveValue(node, colors) as T;
  }

  return Object.fromEntries(
    Object.entries(node as object).map(([key, child]) => [key, resolveTree(child, colors)]),
  ) as T;
};

/**
 * The semantic tokens with concrete colors instead of CSS variables, for platforms that don't read
 * them (React Native, email clients).
 */
export const resolveTokens = (theme: ResolvedTheme): SemanticTokens =>
  resolveTree(theme.semantic, theme.base.colors);
