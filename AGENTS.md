# AGENTS.md

## Repo Shape
- This repo is a single VitePress docs site. The only package manifest is root `package.json`; there is no monorepo/workspace tooling.
- The site source is `docs/`. VitePress wiring lives in `docs/.vitepress/config.mjs`.
- Main content buckets are `docs/guide/{git,php,nginx,linux,db,tools,web,docker,go,jenkins,crawler}`.

## Commands
- Install deps with `npm install`.
- Local dev server: `npm run docs:dev`
- Production build / main verification step: `npm run docs:build`
- No test, lint, typecheck, or formatter scripts are configured in `package.json`.

## VitePress Wiring
- Site base is `"/notes/"` in `docs/.vitepress/config.mjs`; keep that in mind when changing deploy or asset paths.
- Homepage entrypoint is `docs/index.md`.
- Section landing pages use `index.md`, not `README.md`. Adding a new folder page should follow that convention.
- Sidebar entries are manually enumerated in `docs/.vitepress/config.mjs`. Adding, renaming, or deleting a doc page often requires updating both the Markdown file and the sidebar config.
- Static assets now live under `docs/public/`. Prefer `/img/...` style paths in Markdown so VitePress can resolve them under the configured base.

## Deploy Gotcha
- `deploy.sh` builds the site, `cd`s into `docs/.vitepress/dist`, initializes a fresh git repo there, and force-pushes to `git@github.com:linjiangl/nodes.git master:gh-pages`.
- The deploy remote is `nodes.git`, not this repo's `notes.git`. Verify intent before using or editing the deploy script.

## Local-Only Config
- Root `opencode.json` is gitignored and currently contains provider credentials. Treat it as local-only; do not commit secrets or copy live values into docs.
- If editing `docs/guide/tools/ai/cli.md`, keep example keys and endpoints as placeholders, matching the current redacted style.
