# Ladi Technologies — website

Static website for **laditechnologies.com**, built to the Ladi Technologies brand identity (Dark Turquoise #003629, Vivid Olive #AEC513, Dark Green #007E2D; Poppins + Inter). No build step, no framework, so GitHub Pages can serve it as-is.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About — mission, vision, values, story |
| `services.html` | Eight service disciplines with indicative pricing |
| `solutions.html` | Platforms (Odoo, Dynamics 365, Power Platform, Microsoft 365, Zoho) |
| `industries.html` | Industries served |
| `insights.html` | Insights (articles marked "Coming soon") |
| `contact.html` | Contact form and details |
| `404.html` | Not-found page (GitHub Pages uses it automatically) |

Also included: `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, favicons and a social share image (`assets/img/og-image.png`).

## Publish on GitHub Pages

1. Create a repository on GitHub (for example `laditechnologies.com` or `ladi-website`). It can be public, or private on a paid GitHub plan.
2. Upload **the contents of this folder** (not the folder itself) to the root of the `main` branch. Make sure the hidden `.nojekyll` file and the `CNAME` file are included.
3. In the repository go to **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder `/ (root)` → Save
   - **Custom domain:** `laditechnologies.com` (already set by the `CNAME` file) → Save
4. At your domain registrar / DNS provider, add these records:

   | Type | Host / Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<your-github-username>.github.io` |

   Optional IPv6 (AAAA, host `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
   Remove any other A/AAAA records for `@` (for example an old hosting provider's).
5. Wait for DNS to propagate (minutes to a few hours), then tick **Enforce HTTPS** in Settings → Pages.
6. Recommended: verify the domain under your GitHub account (**Settings → Pages → Add a domain**) to prevent domain takeover.

**Important:** if you keep email on this domain (e.g. info@laditechnologies.com), do **not** change the existing MX, SPF or DKIM records — only the A and `www` CNAME records above.

## Contact form

GitHub Pages hosts static files only, so the form currently opens the visitor's email app with the enquiry pre-filled and addressed to **info@laditechnologies.com**.

To receive submissions directly instead (no email app needed), connect a form service such as Formspree:

1. Create a form at formspree.io and copy its endpoint (e.g. `https://formspree.io/f/abcd1234`).
2. In `contact.html`, change `<form id="contact-form" ...>` to include `action="https://formspree.io/f/abcd1234" method="POST"`.
3. In `assets/js/main.js`, delete the "Contact form" block so the browser submits normally.

## Editing content

Edit the HTML files directly. Shared styles are in `assets/css/styles.css` (brand colours are CSS variables at the top). Header and footer are repeated in each page — update all pages when changing navigation, phone numbers or office addresses.

Things to update when ready:

- `insights.html` — replace the "Coming soon" cards with real articles.
- Pricing on `services.html` is indicative (USD) and was taken from the previous website; confirm before publishing.
- `sitemap.xml` — update `lastmod` dates when pages change.

## Company details used

Ladi Technologies Limited · RC 9422048 · info@laditechnologies.com

- **Head Office:** Hotel De Kajola, Lagos, Nigeria · +234 816 688 9977
- **Jalingo Office:** New Ideal Model School, No. 12 Old Kpantisawa Road, Jalingo, Taraba State · +234 806 650 5023

Fonts: Poppins and Inter (SIL Open Font License), loaded from Google Fonts.
