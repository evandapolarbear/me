<template>
  <!-- Backdrop -->
  <Teleport to="body">
    <div class="lb-backdrop" @click.self="$emit('close')">
      <div class="lb-modal" role="dialog" aria-modal="true" :aria-label="currentPhoto.caption">

        <!-- Image area -->
        <div
          class="lb-img-wrap"
          :style="{ background: currentPhoto.color }"
        >
          <img
            v-if="currentPhoto.src"
            :src="currentPhoto.src"
            :alt="currentPhoto.caption"
            class="lb-img"
          />
        </div>

        <!-- Footer -->
        <div class="lb-footer">
          <div class="lb-meta">
            <span class="lb-caption">{{ currentPhoto.caption }}</span>
            <span class="lb-sub">{{ currentPhoto.meta }}</span>
          </div>
          <div class="lb-controls">
            <button class="lb-btn" @click="prev" aria-label="Previous photo">&#8592;</button>
            <span class="lb-counter">{{ currentIndex + 1 }} / {{ photos.length }}</span>
            <button class="lb-btn" @click="next" aria-label="Next photo">&#8594;</button>
            <button class="lb-close" @click="$emit('close')" aria-label="Close lightbox">&#215;</button>
          </div>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  photos: {
    type: Array,
    required: true
  },
  initialIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['close'])

const currentIndex = ref(props.initialIndex)

const currentPhoto = computed(() => props.photos[currentIndex.value])

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.photos.length) % props.photos.length
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.photos.length
}

function onKeydown(e) {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ── Backdrop ── */
.lb-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
}

/* ── Modal card ── */
.lb-modal {
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  border: 0.5px solid var(--color-border);
  max-width: calc(100vw - 48px);
  overflow: hidden;
}

/* ── Image ── */
.lb-img-wrap {
  line-height: 0;
}

.lb-img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 108px); /* 48px backdrop padding + ~60px footer */
}

/* ── Footer ── */
.lb-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-top: 0.5px solid var(--color-border);
}

.lb-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.lb-caption {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lb-sub {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-text-tertiary);
}

/* ── Controls ── */
.lb-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.lb-btn {
  background: var(--color-surface);
  border: 0.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 15px;
  padding: 4px 11px;
  color: var(--color-text-secondary);
  transition: background 0.12s;
}

.lb-btn:hover {
  background: var(--color-border);
}

.lb-counter {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-text-tertiary);
  min-width: 36px;
  text-align: center;
}

.lb-close {
  background: none;
  border: none;
  font-size: 24px;
  line-height: 1;
  color: var(--color-text-tertiary);
  padding: 0 0 0 4px;
  transition: color 0.12s;
}

.lb-close:hover {
  color: var(--color-text-primary);
}
</style>
