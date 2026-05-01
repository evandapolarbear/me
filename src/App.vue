<template>
  <div class="site">
    <header class="site-header">
      <div class="header-inner">
        <div class="identity">
          <span class="name">Evan Waits</span>
          <span class="role">Staff Software Engineer · Tech Lead · Photographer</span>
        </div>
        <nav class="nav">
          <RouterLink to="/resume" class="nav-link">Resume</RouterLink>
          <RouterLink to="/photos" class="nav-link">Photos</RouterLink>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Header ── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg);
  border-bottom: 0.5px solid var(--color-border);
  height: var(--nav-height);
  display: flex;
  align-items: flex-end;
}

.header-inner {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 0;
}

/* ── Identity ── */
.identity {
  display: flex;
  flex-direction: column;
  padding-bottom: 14px;
  gap: 2px;
}

.name {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
}

.role {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 300;
  color: var(--color-text-tertiary);
  letter-spacing: 0.02em;
}

/* ── Nav tabs ── */
.nav {
  display: flex;
  gap: 0;
}

.nav-link {
  display: block;
  padding: 10px 18px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: var(--color-text-tertiary);
  border: 0.5px solid transparent;
  border-bottom: none;
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  transition: color 0.15s;
  position: relative;
  bottom: -0.5px;
}

.nav-link:hover {
  color: var(--color-text-secondary);
}

.nav-link.router-link-active {
  color: var(--color-text-primary);
  background: var(--color-bg);
  border-color: var(--color-border);
}

/* ── Main ── */
.site-main {
  flex: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 32px 80px;
}
</style>
