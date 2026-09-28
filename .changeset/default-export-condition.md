---
'@inzumer/tokens': patch
---

The `.` and `./tailwind` entry points also export under the `default` condition, so tools that load config files with `require` (Tailwind 3 through jiti) can import `@inzumer/tokens/tailwind` by name.
