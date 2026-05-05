<template>
  <div class="resume">
    <!-- Sidebar -->
    <aside class="sidebar">
      <section class="sidebar-section">
        <h2 class="section-label">Contact</h2>
        <p class="item">{{ identity.email }}</p>
        <p class="item">{{ identity.phone }}</p>
        <p class="item">{{ identity.location }}</p>
        <template v-if="identity.links.length">
          <a
            v-for="link in identity.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="item link"
          >{{ link.label }}</a>
        </template>
      </section>

      <hr class="rule" />

      <section class="sidebar-section">
        <h2 class="section-label">Education</h2>
        <div
          v-for="edu in education"
          :key="edu.institution + edu.degree"
          class="edu-item"
        >
          <p class="item-strong">{{ edu.degree }}</p>
          <p class="item">{{ edu.institution }}</p>
          <p class="item muted">{{ edu.start }} – {{ edu.end }}</p>
        </div>
      </section>

      <hr class="rule" />

      <section class="sidebar-section">
        <h2 class="section-label">Skills</h2>
        <div class="tag-list">
          <span v-for="skill in skills" :key="skill" class="tag">{{ skill }}</span>
        </div>
      </section>

      <hr class="rule" />

      <section class="sidebar-section">
        <h2 class="section-label">Languages &amp; Frameworks</h2>
        <div class="tag-list">
          <span v-for="lang in languages" :key="lang" class="tag">{{ lang }}</span>
        </div>
      </section>
    </aside>

    <!-- Main experience -->
    <section class="experience">
      <h2 class="section-label">Experience</h2>
      <article
        v-for="job in experience"
        :key="job.title + job.start"
        class="job"
      >
        <div class="job-header">
          <span class="job-title">{{ job.title }}</span>
          <span class="job-date">{{ job.start }} – {{ job.end }}</span>
        </div>
        <p class="job-company">{{ job.company }} · {{ job.location }}</p>
        <p class="job-desc">{{ job.description }}</p>
      </article>
    </section>
  </div>
</template>

<script setup>
import { identity, experience, education, skills, languages } from '@/data/resume.js'
</script>

<style scoped>
.resume {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 48px;
}

@media (max-width: 640px) {
  .resume {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .job-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
}

/* ── Sidebar ── */
.sidebar-section { margin-bottom: 4px; }

.rule {
  border: none;
  border-top: 0.5px solid var(--color-border);
  margin: 20px 0;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
  margin-bottom: 10px;
}

.item {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.item.muted { color: var(--color-text-tertiary); font-size: 13px; }

.item.link {
  display: block;
  color: var(--color-text-secondary);
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: var(--color-border-md);
}

.item-strong {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-primary);
  line-height: 1.5;
}

.edu-item { margin-bottom: 14px; }
.edu-item:last-child { margin-bottom: 0; }

.tag-list { display: flex; flex-wrap: wrap; gap: 5px; }

.tag {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.03em;
  color: var(--color-text-secondary);
  background: var(--color-surface);
  border: 0.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 3px 8px;
}

/* ── Experience ── */
.experience { padding-top: 0; }

.job {
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 0.5px solid var(--color-border);
}

.job:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 3px;
  gap: 12px;
}

.job-title {
  font-size: 17px;
  font-weight: 500;
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

.job-date {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-text-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
}

.job-company {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
}

.job-desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}
</style>
