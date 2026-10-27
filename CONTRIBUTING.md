# Contributing

Use Node.js 22 and install with `npm ci`. Verify changes with `npm run build`; visually check affected layouts and interactions before proposing UI changes.

Use Conventional Commits: `feat:`, `fix:`, `docs:`, `test:`, `refactor:` or `chore:` followed by a concise lowercase description. Use the same format for pull request titles. Reference the issue, describe the resulting behaviour and state what was verified.

Issues use priority labels and title markers: P1 = launch blocker, P2 = next iteration, P3 = optional enhancement. P0 is reserved for an active critical incident. An issue proposing a feature is not a promise that it is already available.

Keep the current editor free. Safety checks, previews and scheduling are core features. Do not introduce mandatory AI access, API keys or account gates. Never commit real credentials, visitor enquiries or production configuration secrets. `VITE_` variables are public browser values.

The plugin ZIP under `public/downloads/` is a separate GPL-licensed deliverable. Preserve its license and identify the version when replacing it. Completing the plugin's production audit is separate from building this marketing website.
