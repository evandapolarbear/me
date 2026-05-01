/**
 * photos.js — add your photos here.
 *
 * Each photo object:
 *   src      — path to image (relative to /public, e.g. '/photos/iceland.jpg')
 *              or a full URL. Leave as null to show a placeholder color.
 *   color    — placeholder background color shown before/instead of image.
 *   caption  — title shown in the lightbox.
 *   meta     — subtitle shown in the lightbox (category · location · year).
 *   category — used for filter pills. Must match a value in CATEGORIES below.
 *   span     — optional layout: 'tall' (2 rows) or 'wide' (2 cols).
 */

export const CATEGORIES = ['All', 'Landscape', 'Portrait', 'Street']

export const photos = [
  {
    src: '/photos/allTheGreen.jpg',
    color: '#c8c6be',
    caption: 'Car in an Illegal Tree',
    meta: 'Film · Sacramento · 2026',
    // category: 'Landscape',
    // span: 'tall'
  },
  {
    src: '/photos/carSign.jpg',
    color: '#9ecfbc',
    caption: 'Lil Girl Protesting',
    meta: 'Film · Sacramento · 2026',
    // category: 'Street'
  },
  {
    src: '/photos/b&wTrainTrackProtest.jpg',
    color: '#c8c6be',
    caption: 'B&W Train Track Protest',
    meta: 'Film · Sacramento · 2026',
    // category: 'Street',
    // span: 'tall'
  },
  {
    src: '/photos/carWindowWoodlandOne.jpg',
    color: '#9ecfbc',
    caption: 'Woodland Window One',
    meta: 'Film · Sacramento · 2026',
    // category: 'Street'
  },
  {
    src: '/photos/carWindowWoodlandTwo.jpg',
    color: '#9ecfbc',
    caption: 'Woodland Window Two',
    meta: 'Film · Sacramento · 2026',
    // category: 'Street'
  },
]
