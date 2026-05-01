# Evan Waits — Personal Site

Built with Vue 3 + Vite + Vue Router.

## Setup

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Project structure

```
src/
├── assets/css/
│   └── base.css          # Design tokens (colors, fonts, radii) — edit here first
├── components/
│   └── PhotoLightbox.vue # Reusable lightbox modal (keyboard nav, scroll lock)
├── data/
│   ├── resume.js         # ← Edit to update all resume content
│   └── photos.js         # ← Edit to add/remove photos and categories
├── views/
│   ├── ResumeView.vue    # Resume layout (sidebar + experience)
│   └── PhotosView.vue    # Photo grid with category filtering
├── App.vue               # Site shell: header, nav tabs, router outlet
└── main.js               # Router setup and app mount
```

## Adding content

### Resume
Edit `src/data/resume.js`. All sections (experience, education, skills, languages)
are plain arrays — add or remove items freely.

### Photos
Edit `src/data/photos.js`:
1. Drop image files into `public/photos/`
2. Set `src: '/photos/your-image.jpg'` on the photo object
3. Optionally set `span: 'tall'` or `span: 'wide'` for layout variety
4. Add new categories to the `CATEGORIES` array and use them on photo objects

### Adding a new page (e.g. Writing, Projects)
1. Create `src/views/WritingView.vue`
2. Add a route in `src/main.js`
3. Add a `<RouterLink>` in `App.vue`

## Design tokens
All visual constants live in `src/assets/css/base.css`.
Change fonts, colors, and radii there and they propagate everywhere.
