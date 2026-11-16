# portfolio

Personal website of Gerwin Lambraño Torres, Python backend engineer. It shows the projects I have built, the stack I work with and how to reach me, in English and Spanish.

Work in progress.

## Stack

- [Astro](https://astro.build), with pages rendered at build time and only the JavaScript each interaction needs.
- TypeScript in strict mode.
- Plain CSS with design tokens for the light and dark themes.

## Run it locally

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

| Script            | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Starts the dev server                  |
| `npm run build`   | Builds the static site into `dist/`    |
| `npm run preview` | Serves the build locally               |
| `npm run check`   | Type-checks Astro and TypeScript files |
| `npm run format`  | Formats the code with Prettier         |

Every push and pull request runs the formatting check, the type check and the build in GitHub Actions.

## License

The code is under the [MIT License](LICENSE). The texts, photos and personal data in the site are mine and are not covered by that license.
