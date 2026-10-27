# Contributing

Coding agents should start with [AGENTS.md](AGENTS.md), a self-contained guide to scope, commands and review conventions.

Use Node.js 22 and install with `npm ci`. Verify changes with `npm run build`; visually check affected layouts and interactions before proposing UI changes.

Use Conventional Commits: `feat:`, `fix:`, `docs:`, `test:`, `refactor:` or `chore:` followed by a concise lowercase description. Use the same format for pull request titles. Reference the issue, describe the resulting behaviour and state what was verified.

Issues use priority labels and title markers: P1 = launch blocker, P2 = next iteration, P3 = optional enhancement. P0 is reserved for an active critical incident. An issue proposing a feature is not a promise that it is already available.

Read [ROADMAP.md](ROADMAP.md) before planning a feature. GitHub issues carry the current acceptance criteria. Agree substantial scope changes in an issue first; do not add commercial work to the roadmap. Treat the website and plugin source/release verification as separate responsibilities.

Batchwell is an open-source-only project. Do not add paid tiers, services funnels, lead capture, license gates or mandatory accounts. Safety checks, previews and scheduling are core features. Never commit real credentials or production secrets. `VITE_` variables are public browser values. Optional AI proposals must preserve a fully usable editor without AI or an API key.

The plugin ZIP under `public/downloads/` is a separate GPL-licensed deliverable. Preserve its license and identify the version when replacing it. Completing the plugin's production audit is separate from building this marketing website.
