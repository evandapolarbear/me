<template>
  <div class="photos-page">
    <!-- Filter pills -->
    <div class="filter-bar">
      <button
        v-for="cat in CATEGORIES"
        :key="cat"
        class="filter-pill"
        :class="{ active: activeCategory === cat }"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Photo grid -->
    <div class="photo-grid">
      <div
        v-for="(photo, index) in filteredPhotos"
        :key="photo.caption + index"
        class="photo-cell"
        :class="[photo.span ? `span-${photo.span}` : '']"
        :style="{ background: photo.color }"
        @click="openLightbox(globalIndex(photo))"
      >
        <img
          v-if="photo.src"
          :src="photo.src"
          :alt="photo.caption"
          class="photo-img"
        />
        <div class="photo-hover">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="white" stroke-width="1.5"/>
            <line x1="10" y1="6" x2="10" y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="6" y1="10" x2="14" y2="10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <PhotoLightbox
      v-if="lightboxIndex !== null"
      :photos="photos"
      :initial-index="lightboxIndex"
      @close="lightboxIndex = null"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CATEGORIES, photos } from '@/data/photos.js'
import PhotoLightbox from '@/components/PhotoLightbox.vue'

const activeCategory = ref('All')
const lightboxIndex = ref(null)

const filteredPhotos = computed(() =>
  activeCategory.value === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory.value)
)

// When filtered, find the real index in the full photos array for the lightbox
function globalIndex(photo) {
  return photos.indexOf(photo)
}

function openLightbox(index) {
  lightboxIndex.value = index
}
</script>

<style scoped>
/* ── Filter bar ── */
.filter-bar {
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-pill {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.04em;
  padding: 4px 12px;
  border-radius: 20px;
  border: 0.5px solid var(--color-border);
  background: transparent;
  color: var(--color-text-secondary);
  transition: all 0.15s;
}

.filter-pill:hover {
  border-color: var(--color-border-md);
  color: var(--color-text-primary);
}

.filter-pill.active {
  background: var(--color-text-primary);
  border-color: var(--color-text-primary);
  color: var(--color-bg);
}

/* ── Grid ── */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 6px;
}

.photo-cell {
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: opacity 0.15s;
}

.photo-cell:hover { opacity: 0.92; }
.photo-cell:hover .photo-hover { opacity: 1; }

.span-tall {
  grid-row: span 2;
  aspect-ratio: unset;
}

.span-wide {
  grid-column: span 2;
}

.photo-img {
  width: 100%;
  height: auto;
  display: block;
}

.photo-hover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s;
  background: rgba(0, 0, 0, 0.08);
}
</style>
