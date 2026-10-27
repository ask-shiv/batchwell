# Batchwell

**Batchwell is a free, open-source community project.** There are no paid tiers, commercial services, lead-generation funnels or plans to monetise it. Contributions, bug reports and ideas are welcome.

This React website introduces the free WooCommerce Scheduled Price Manager plugin: bulk-edit regular prices and shipping weights in CSV, review the changes, then apply them now or schedule them for later.

This repository contains the website and a downloadable plugin archive, not a hosted catalogue editor or the plugin's editable PHP source. The current plugin does not edit stock quantities, product names, variation terms, historical orders or existing subscription contracts.

Website source is available under the [MIT license](LICENSE). The downloadable plugin remains GPL-2.0-or-later. Publishing its editable source and release process is a launch priority, tracked in [#4](https://github.com/ask-shiv/batchwell/issues/4); the archive alone is not the intended long-term contribution workflow.

## Roadmap

Read [ROADMAP.md](ROADMAP.md) for priorities and scope. The [GitHub issues](https://github.com/ask-shiv/batchwell/issues) hold the current acceptance criteria. Priorities reflect community maintenance work, not subscription tiers or promised delivery dates.

- **P1:** reliable deployment, automated browser checks, accessibility/privacy review and a reproducible plugin release with editable source.
- **P2:** clearer documentation, onboarding and community contribution paths.
- **P3:** investigate optional bring-your-own-key AI assistance only if it solves a validated need. The editor must remain fully usable without it.

Stock-quantity editing and broader catalogue fields are not implemented or committed roadmap features. Propose them in an issue before expanding the product's advertised scope.

## Development

Use Node.js 22 LTS:

```sh
npm ci
npm run dev
```

Build with `npm run build`. Run the production server with `npm start`; it serves `dist/` and honours `PORT`. Run `python3 package-release.py` after building to generate source and static deployment ZIPs under `release/`. No contact keys, booking configuration, account or external API is required.

## Deployment

For a SiteGround Node.js project, use Node.js 22, install command `npm ci`, build command `npm run build` and start command `npm start`. Use this repository as the application root. The server listens on the host-provided port. Alternatively upload the contents of the generated static ZIP into a separate site's document root. Do not overwrite an existing site accidentally. No SiteGround deployment has been performed by this repository.

## Contributing and support

Read [CONTRIBUTING.md](CONTRIBUTING.md), browse [open issues](https://github.com/ask-shiv/batchwell/issues) or [report a bug](https://github.com/ask-shiv/batchwell/issues/new). Community support has no guaranteed response time. This project has no commercial services funnel, paid tiers or lead collection.

Use Conventional Commits and reference the relevant issue in pull requests. CI builds and packages the website; browser coverage is tracked separately. Keep all product claims aligned with the downloadable plugin's actual capabilities.

## Release notes and privacy

The included v1.2.1 plugin is an early release. Test it on staging first. The outstanding plugin production audit must be completed before broad promotion. Keep the archive, version labels and license notices in sync when updating it.

The interactive example uses sample data and stays in your browser. The website has no enquiry form, analytics, tracking cookies, payment processing or lead database. Typography currently loads from Google Fonts with system fallbacks; requests to that provider and ordinary hosting access logs remain relevant to privacy review.

## Structure and license

`src/main.jsx` contains the page and interactive demo. `src/Atmosphere.jsx` contains decorative catalogue artwork. `src/style.css` contains the styles. `server.mjs` serves production assets and `public/downloads/` contains the plugin archive.

Website source: [MIT](LICENSE). Included plugin: GPL-2.0-or-later, with its license preserved inside the ZIP. Third-party dependencies retain their licenses. Batchwell is independent of WooCommerce and makes no claim of endorsement or trademark registration.
