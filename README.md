# Astro Web Structure

A starter template for Astro Web created by Nahuel Gomez.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` files in the `src/pages/` directory. Each page is
exposed as a route based on its file name.

There's no special convention about `src/components/`, but that's where we
recommend put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |

## Want to learn more?

Check [Astro documentation](https://docs.astro.build).

## Contact

Any questions or comments?

- Github - [@nahuelgomez](https://github.com/nahuelgomez)
- LinkedIn - [@nahuelgomez](https://www.linkedin.com/in/nahuel-gomez-suarez/)
