# Signature Marketing & Tech — Website

Marketing website for **Signature Marketing & Tech Ltd** (Company No. 17439568), built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript. Every page is statically generated.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Before deploying, run `npm run build` to create a production build and `npm run lint` to lint the code.

## Deploy on Vercel

1. Push this folder to a GitHub repository and import it in Vercel. The framework is detected automatically.
2. In Vercel → Settings → Environment Variables, click **Import .env** and choose the project's local `.env` file (it is never committed). It contains:
   `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_REVALIDATE_SECRET`,
   `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO`, `CONTACT_BCC`.
3. Add the domain in Vercel → Project → Domains.
4. Submit `https://<domain>/sitemap.xml` in Google Search Console.

## Where to edit content

| What | File |
| --- | --- |
| Phone, email, address, company number | `src/lib/site.ts` |
| Service list (names, icons, menu, cards) | `src/lib/services.ts` |
| Service page content (copy, features, FAQs) | `src/content/services/*.ts` |
| Industries | `src/content/industries.ts` |
| Case studies | `src/content/case-studies.ts` |
| Testimonials | `src/content/testimonials.ts` |
| Process steps, values, tech stack | `src/content/company.ts` |
| Colours, fonts, type scale | `src/app/globals.css` (`@theme`) |
| Legal pages | `src/app/(site)/privacy-policy`, `terms-conditions`, `cookie-policy` |
| Blog schema (fields in the Studio) | `src/sanity/schemaTypes/` |
| Service page images | `public/images/services/` + `src/content/service-images.ts` (see `content/image-credits.md`) |

Adding a service, industry or case study to its data file automatically creates its page, sitemap entry, share image and menu/footer links.

## Blog (Sanity CMS + MDX files)

The blog combines two sources into one `/blog`, sorted by date, with shared categories, related posts, sitemap and SEO:

| | Sanity | MDX files |
| --- | --- | --- |
| Where you write | In the browser at `/studio` | `content/blog/*.mdx` in this repo |
| Publishing | Click **Publish**; live in seconds | Commit + push; Vercel redeploys in ~1–2 min |
| Best for | Clients and non-technical writers | Developers |

If a Sanity post and an MDX file use the same slug, the MDX file is shown.

### Writing an MDX post

1. Copy `content/blog/_template.mdx` to a new file, e.g. `content/blog/my-post.mdx`. The file name becomes the URL, `/blog/my-post`. Files starting with `_` are ignored.
2. Put the cover image in `public/blog/` (1600×900 works best) and fill in the frontmatter: `title`, `excerpt`, `date`, `category`, `author`, `cover`, `coverAlt` and the optional SEO fields.
3. Write in Markdown. Tables work, as do two extra components: `<Callout type="tip|warning" title="…">` and `<Cta href="/contact" label="…">`.
4. `draft: true` or a future `date` keeps a post hidden on the live site. It still shows while running `npm run dev`.
5. Commit and push. Vercel publishes it.

To match an existing category, use its exact name (e.g. `SEO & Local Search`).

### Sanity posts

Sanity posts are written in **Sanity Studio**, which is built into the site at `/studio`. When you publish a post, it appears on the live site within seconds. You don't need to redeploy.

### One-time setup

1. Create a free account at https://www.sanity.io and create a new project. Use the dataset name `production` and set its visibility to **Public**. With a public dataset, the website can read published posts without a token, while drafts stay private.
2. Copy the **Project ID** from https://www.sanity.io/manage.
3. In the project's **API → CORS origins**, add `http://localhost:3000` and your live domain (e.g. `https://signature24hrs.com`). Tick **Allow credentials** for both.
4. Add these environment variables to the local `.env` file and in Vercel:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_REVALIDATE_SECRET=any-long-random-string
   ```
5. Set up instant updates: in Sanity manage → **API → Webhooks**, create a webhook with:
   - URL: `https://<your-domain>/api/revalidate`
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - HTTP method: POST
   - Secret: the same value as `SANITY_REVALIDATE_SECRET`
6. Open `https://<your-domain>/studio`, sign in and start writing. Add categories and an author first, then create posts.

### Security

- Only people invited to the Sanity project (**Manage → Members**) can sign in to the Studio. Give writers the *Editor* role.
- The website only ever **reads** published content. No write token is stored in the site, and drafts are never shown.
- The revalidation webhook only accepts requests signed with your secret.
- `/studio` and `/api` are excluded from search engines.

### Writing tips

- Fill in the **Excerpt** and a **Cover image** with alt text; these power the blog cards, Google results and social previews.
- Use Heading 2 and Heading 3 in the article. A table of contents is generated automatically.
- The **SEO** tab lets you override the Google title and description.
- Tick **Feature at the top of the blog** to pin a post as the featured article.

## SEO features

- Unique title, meta description and canonical URL on every page
- Auto-generated Open Graph / social share images per service, industry and case study
- JSON-LD: Organization + ProfessionalService (with company number), WebSite, Service, BreadcrumbList, FAQPage, Article, BlogPosting
- `sitemap.xml`, `robots.txt`, web manifest, favicons
- Semantic HTML, a single H1 per page, accessible navigation, and good Core Web Vitals (static pages, self-hosted fonts, no layout-shifting images)

## Contact form

The form sends enquiries straight to `info@signature24hrs.com` through the company's own SMTP mailbox (`smtp@signature24hrs.com`), using a Next.js Server Action and `nodemailer` (`src/app/actions/contact.ts`).

- The visitor gets an automatic "we've received your enquiry" email. Set `CONTACT_AUTOREPLY=false` to turn it off.
- Replying to the enquiry email replies directly to the visitor.
- To send a hidden copy of every enquiry to other addresses, set `CONTACT_BCC` (comma-separated).
- Spam protection: a hidden honeypot field, a minimum time-on-form check and a per-IP rate limit.
- Inputs are validated on the server and HTML-escaped in the email.
- SMTP settings are server-only. Keep `SMTP_PASS` in the local `.env` file and in Vercel → Settings → Environment Variables, and never commit it.

## Before launch

- Replace the sample testimonials and case studies (`src/content/`) with real client content.
- Replace the example mockups and stock photos with real screenshots/photos where available (list in `content/image-credits.md`).
- Review the legal pages with your legal adviser.
- Change the SMTP mailbox password if it has been shared over chat, then update `SMTP_PASS` in Vercel.
- If you add analytics or ad pixels, add a cookie consent banner and update the Cookie Policy.
