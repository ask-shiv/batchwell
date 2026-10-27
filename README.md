# Batchwell

A React marketing site for the free WooCommerce Scheduled Price Manager plugin, with optional paid services as the business funnel. Batchwell is a proposed brand, not a registered trademark or a verified available domain.

## Run

Use Node.js 22 LTS. Run `npm ci`, then `npm run dev`. For production run `npm run build` and `npm start`. The small Node HTTP server serves the compiled site and honours `PORT`; it does not collect enquiries, store shop data or connect to WooCommerce.

## SiteGround deployment

SiteGround's Node.js Projects are supported on GrowBig, GoGeek and Cloud, according to its October 2026 documentation. In Client Area → Websites → Node.js Projects, create a project and connect the repository or upload `batchwell-siteground-source.zip`. Use this project folder as the application root, Node.js 22, install command `npm ci`, build command `npm run build`, and start command `npm start` (or entry file `server.mjs`, depending on the deployment screen). The server listens on the host-provided `PORT`. Verify these settings against the actual dashboard. No deployment has been performed on your account.

This site has no server-side business state, so it can also be hosted as static files. Upload the **contents** of `batchwell-static-site.zip` into the selected site's document root. Avoid overwriting an existing site. The marketing page uses anchors rather than client-side routes, so no SPA rewrite is required.

Source: https://www.siteground.com/blog/hosting-node-js-projects-with-siteground

## Before public launch

- Choose the final name and confirm domain/trademark suitability. No domain has been purchased.
- Enquiries default to `siobhan@epicurecreative.co.uk`, as supplied by the owner. Set `VITE_CONTACT_EMAIL` in the build environment to change it and rebuild. This is public browser configuration, never a secret. The email action opens the visitor’s email app with their project brief; it does not send automatically.
- Contact currently uses a mailto draft, not an email-sending backend. Booking links navigate to the configured provider. Add a privacy notice and business identity before collecting personal data through a hosted form or booking provider.
- The supplied 1.2.1 plugin is an early release. Its remaining production audit gates still apply; the site does not claim public marketplace approval or universal compatibility. Complete those gates before promoting the download widely.
- The visual product window and interactive example are illustrations. They are not screenshots of a general grid editor, which the plugin does not currently offer.
- Typography uses Google Fonts with local system fallbacks. Self-host those fonts if your privacy or availability requirements call for it. No analytics, cookies, payment processing or lead database was added.
- Download archive must be kept in sync with future plugin releases and published version labels. Keep author attribution and GPL licensing in the plugin ZIP.

## Structure

`src/main.jsx` contains page content and demo/enquiry interactions. `src/style.css` contains desktop/mobile layout. `public/downloads/` contains the real plugin ZIP. `server.mjs` serves compiled production assets. `npm run build` generates `dist/`.

Verification: production build, desktop/mobile browser inspection, demo field toggle and approval, enquiry dialog open/close and browser-native focus containment. The service recipient is siobhan@epicurecreative.co.uk. This is a website, not a hosted remote bulk-editing application.
