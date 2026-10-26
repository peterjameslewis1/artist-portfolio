# Artist Portfolio

A small Vite site for a painter / illustrator: Home, Gallery, About, Exhibitions and Contact tabs.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

- **Artworks and CV**: `src/data.js`. Put images in `public/images/` and set `src: 'images/my-painting.jpg'`. Any artwork with `src: null` shows a blank placeholder.
- **Name, bio, contact details**: `index.html` (search for "Your Name").
- **Colours and fonts**: the variables at the top of `src/style.css`.

## Deploy to GitHub Pages (free)

1. Create a GitHub repo and push this folder to its `main` branch.
2. In the repo go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and deploys automatically. The site appears at `https://<username>.github.io/<repo>/`.

The contact form opens the visitor's email app (GitHub Pages has no server). To receive submissions directly, swap it for a free service such as Formspree.

https://peterjameslewis1.github.io/artist-portfolio/#about
