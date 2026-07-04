# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

`AGENTS.md` is the parallel instructions file for other coding agents and contains the same project guidance in more detail — keep the two in sync when adding project-wide rules.

## What this repo is

A single VitePress docs site (no monorepo / workspace tooling). VitePress `2.0.0-alpha.17`. All content is in Chinese (`lang: 'zh-CN'`, title 小白手册). The only package manifest is root `package.json`.

## Commands

- `npm install` — install deps
- `npm run docs:dev` — local dev server
- `npm run docs:build` — production build; this is the main verification step (catches broken Markdown/config)
- `npm run docs:preview` — preview the built site

No test, lint, typecheck, or formatter scripts are configured.

## Architecture

- Site source lives in `docs/`; VitePress wiring is `docs/.vitepress/config.mjs`.
- Site **base is `/notes/`** — keep this in mind when touching deploy or asset paths.
- Homepage entrypoint is `docs/index.md` (`layout: home`).
- Content buckets: `docs/guide/{git,php,nginx,linux,db/{mysql,redis},docker,go,jenkins,crawler,web/{react,uniapp,vue},tools/{ai,mac,office,proxy,sublime,vscode,wsl}}`.
- **Section landing pages use `index.md`, not `README.md`.** New folder pages should follow this convention.
- The **sidebar is manually enumerated** in `config.mjs` via `page()` / `section()` helpers. Adding, renaming, or deleting a doc page requires updating **both** the Markdown file and the sidebar config.
- Static assets live under `docs/public/`. Prefer `/img/...`-style paths in Markdown so VitePress resolves them under the configured base.

## Deploy gotcha

`deploy.sh` builds the site, `cd`s into `docs/.vitepress/dist`, initializes a fresh git repo there, and force-pushes to `git@github.com:linjiangl/nodes.git HEAD:gh-pages`. The deploy remote is **`nodes.git`, not this repo's `notes.git`** — verify intent before using or editing the script.

## Local-only / secrets

- Root `opencode.json` is gitignored and contains provider credentials. Treat as local-only; do not commit secrets or copy live values into docs.
- When editing `docs/guide/tools/ai/cli.md`, keep example keys and endpoints as redacted placeholders matching the current style.
