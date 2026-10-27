# Community roadmap

Batchwell is an open-source-only project, maintained through public issues and pull requests. There is no monetisation roadmap, paid edition, services funnel or lead-capture initiative. Core editing, scheduling and safety features remain free.

This document explains direction. Linked issues contain the current scope and acceptance criteria; a proposal is not a release promise. There are no committed dates. Maintainers and contributors should agree the approach in an issue before starting substantial work.

## P1 — release foundations

| Work | Issue | Completion evidence |
| --- | --- | --- |
| Deploy and document the live site | [#1](https://github.com/ask-shiv/batchwell/issues/1) | Live assets, downloads, community links and error responses verified; rollback documented |
| Automate browser and server checks | [#2](https://github.com/ask-shiv/batchwell/issues/2) | Desktop/mobile navigation, demo, FAQ, community links and downloads covered in CI |
| Accessibility and privacy review | [#3](https://github.com/ask-shiv/batchwell/issues/3) | Keyboard, labels, contrast, motion, external font requests and hosting privacy reviewed |
| Publish maintainable plugin source and releases | [#4](https://github.com/ask-shiv/batchwell/issues/4) | Editable PHP source, audit follow-ups, compatible licenses, version checksums and repeatable release process available |

The website currently ships a plugin ZIP rather than editable PHP source. Do not present website CI as plugin certification. The plugin's remaining migration, compatibility and execution checks are prerequisites for broader promotion.

## P2 — participation and documentation

Improve the community contribution path in [#5](https://github.com/ask-shiv/batchwell/issues/5): installation guidance, a first-contribution guide, useful bug reports and clear support expectations. This replaces the obsolete commercial-enquiry proposal. Support happens in public issues, with no guaranteed response time. Do not post credentials, private catalogue data or personal customer details in issues.

## P3 — optional research

[#6](https://github.com/ask-shiv/batchwell/issues/6) investigates optional bring-your-own-key AI assistance. Proceed only after validating a concrete use case and agreeing a privacy/security design. Provider usage, if enabled by the user, may incur third-party charges; it is not a Batchwell paid tier. No provider integration or external catalogue-data transmission is implemented by this roadmap.

Any future assistant must propose changes for validation and human approval. Keep provider credentials server-side and preserve the complete non-AI workflow.

## Scope and contribution rules

The current plugin supports CSV regular-price and explicit shipping-weight changes for supported simple products and variations. It does not edit stock quantities, names, variation terms, orders or existing subscriptions. Broader editing is a proposal to evaluate, not an advertised feature.

Use Conventional Commits and link the relevant issue in each PR. Verify the affected behavior and document limitations. Retain MIT licensing for website source and GPL-2.0-or-later for the bundled plugin. See [CONTRIBUTING.md](CONTRIBUTING.md).
