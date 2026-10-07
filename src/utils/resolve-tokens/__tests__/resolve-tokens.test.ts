import { describe, expect, it } from 'vitest';
import { DarkTheme } from '@themes/dark.js';
import { DefaultTheme } from '@themes/default.js';
import { createTheme } from '@utils/create-theme.js';
import { resolveTokens } from '../resolve-tokens.js';

describe('resolveTokens', () => {
  it('should turn color variables into rgb colors', () => {
    const tokens = resolveTokens(DefaultTheme);

    expect(tokens.surface.primary).toBe('rgb(249, 250, 251)');
    expect(tokens.button.primary.background).toBe('rgb(37, 99, 235)');
  });

  it('should resolve the dark theme with its own steps', () => {
    expect(resolveTokens(DarkTheme).surface.primary).toBe('rgb(3, 7, 18)');
  });

  it('should write spaced rgba with commas and keep keywords', () => {
    const tokens = resolveTokens(DefaultTheme);

    expect(tokens.surface.overlay).toBe('rgba(0, 0, 0, 0.5)');
    expect(tokens.button.ghost.background).toBe('transparent');
  });

  it('should follow the base colors of a custom theme', () => {
    const theme = createTheme({ colors: { primary: { 600: '1 2 3' } } });

    expect(resolveTokens(theme).button.primary.background).toBe('rgb(1, 2, 3)');
  });

  it('should leave unknown variables as they are', () => {
    const theme = {
      ...DefaultTheme,
      semantic: {
        ...DefaultTheme.semantic,
        surface: { ...DefaultTheme.semantic.surface, primary: 'var(--color-brand-1)' },
      },
    };

    expect(resolveTokens(theme).surface.primary).toBe('var(--color-brand-1)');
  });
});
