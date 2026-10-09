<script setup>
import { ref, watch, nextTick, onUnmounted } from 'vue'

defineProps({
  active: { type: String, default: 'home' },
  compact: Boolean
})

const links = [
  { id: 'about', label: 'Über mich' },
  { id: 'projects', label: 'Projekte' },
  { id: 'resume', label: 'Lebenslauf' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Zertifikate' }
]

const open = ref(false)
const toggle = ref(null)
const menu = ref(null)

function onKeydown(e) {
  if (e.key === 'Escape') {
    open.value = false
    toggle.value?.focus()
    return
  }
  if (e.key !== 'Tab' || !menu.value) return
  const items = [toggle.value, ...menu.value.querySelectorAll('a')]
  const first = items[0]
  const last = items[items.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

function cleanup() {
  document.documentElement.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
}

watch(open, async (isOpen) => {
  if (isOpen) {
    document.documentElement.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
    await nextTick()
    menu.value?.querySelector('a')?.focus()
  } else {
    cleanup()
  }
})

onUnmounted(cleanup)
</script>

<template>
  <header class="nav" :class="{ 'is-compact': compact, 'is-open': open }">
    <div class="nav__bar">
      <a href="#home" class="nav__logo" aria-label="Rodi Marten – Zum Seitenanfang" @click="open = false">
        RM<i aria-hidden="true"></i>
      </a>

      <nav class="nav__links" aria-label="Hauptnavigation">
        <ul>
          <li v-for="link in links" :key="link.id">
            <a :href="'#' + link.id" :aria-current="active === link.id ? 'true' : null">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <a href="#contact" class="nav__cta" :aria-current="active === 'contact' ? 'true' : null">Kontakt</a>

      <button
        ref="toggle"
        class="nav__toggle"
        type="button"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="menu"
        @click="open = !open"
      >
        <span class="sr-only">{{ open ? 'Menü schließen' : 'Menü öffnen' }}</span>
        <span class="nav__burger" aria-hidden="true"><i></i><i></i></span>
      </button>
    </div>

    <div id="menu" ref="menu" class="menu" :inert="open ? null : ''">
      <ul>
        <li v-for="(link, i) in links" :key="link.id" :style="{ '--i': i }">
          <a :href="'#' + link.id" @click="open = false">
            <span>{{ String(i + 1).padStart(2, '0') }}</span>{{ link.label }}
          </a>
        </li>
        <li :style="{ '--i': links.length }">
          <a href="#contact" @click="open = false"><span>{{ String(links.length + 1).padStart(2, '0') }}</span>Kontakt</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  padding-top: 0.9rem;
  pointer-events: none;
}
.nav > * {
  pointer-events: auto;
}

.nav__bar {
  width: min(100% - var(--gutter) * 2, 60rem);
  margin-inline: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.45rem 0.45rem 1.25rem;
  background: rgba(11, 12, 14, 0.62);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  backdrop-filter: blur(16px) saturate(1.4);
  border: 1px solid rgba(236, 235, 228, 0.14);
  border-radius: 999px;
  color: var(--paper);
  transition: transform 0.6s var(--ease), background-color 0.4s;
  position: relative;
  z-index: 2;
}
.is-compact .nav__bar {
  background: rgba(11, 12, 14, 0.82);
  transform: scale(0.97);
}

.nav__logo {
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;
  padding-block: 0.4rem;
  margin-right: auto;
}
.nav__logo i {
  width: 6px;
  height: 6px;
  margin-bottom: 0.45rem;
  border-radius: 50%;
  background: var(--lime);
}

.nav__links ul {
  display: flex;
  gap: 0.15rem;
}
.nav__links a,
.nav__cta {
  position: relative;
  display: block;
  padding: 0.6rem 0.95rem;
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(236, 235, 228, 0.72);
  transition: color 0.25s, background-color 0.25s;
}
.nav__links a:hover,
.nav__cta:hover {
  color: var(--paper);
  background: rgba(236, 235, 228, 0.08);
}
.nav__links a[aria-current='true'] {
  color: var(--paper);
  background: rgba(236, 235, 228, 0.1);
}
.nav__links a[aria-current='true']::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0.2rem;
  width: 4px;
  height: 4px;
  margin-left: -2px;
  border-radius: 50%;
  background: var(--lime);
}
.nav__cta {
  background: var(--lime);
  color: var(--ink);
  font-weight: 600;
}
.nav__cta:hover {
  background: var(--paper);
  color: var(--ink);
}
.nav__cta[aria-current='true'] {
  background: var(--paper);
  color: var(--ink);
}

.nav__toggle {
  display: none;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: 50%;
  background: rgba(236, 235, 228, 0.1);
  place-items: center;
}
.nav__burger {
  display: grid;
  gap: 5px;
}
.nav__burger i {
  width: 18px;
  height: 1.5px;
  background: currentColor;
  transition: transform 0.4s var(--ease);
}
.is-open .nav__burger i:first-child {
  transform: translateY(3.25px) rotate(45deg);
}
.is-open .nav__burger i:last-child {
  transform: translateY(-3.25px) rotate(-45deg);
}

.menu {
  display: none;
}

@media (max-width: 56rem) {
  .nav__links,
  .nav__cta {
    display: none;
  }
  .nav__toggle {
    display: grid;
  }
  .nav__bar {
    padding-block: 0.4rem;
  }

  .menu {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 1;
    padding: 6.5rem var(--gutter) 2rem;
    background: var(--ink);
    color: var(--paper);
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, -1rem, 0);
    transition: opacity 0.4s var(--ease), transform 0.5s var(--ease), visibility 0s 0.5s;
    overflow-y: auto;
  }
  .is-open .menu {
    visibility: visible;
    opacity: 1;
    transform: none;
    transition-delay: 0s;
  }
  .menu ul {
    display: grid;
    border-top: 1px solid rgba(236, 235, 228, 0.14);
  }
  .menu li {
    border-bottom: 1px solid rgba(236, 235, 228, 0.14);
    opacity: 0;
    transform: translate3d(0, 1rem, 0);
    transition: opacity 0.5s var(--ease), transform 0.6s var(--ease);
  }
  .is-open .menu li {
    opacity: 1;
    transform: none;
    transition-delay: calc(var(--i) * 45ms + 120ms);
  }
  .menu a {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    padding: 1.1rem 0;
    font-size: clamp(2rem, 9vw, 3rem);
    font-weight: 500;
    letter-spacing: -0.04em;
  }
  .menu a span {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    letter-spacing: 0.06em;
    color: var(--lime);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav__bar,
  .menu,
  .menu li,
  .nav__burger i {
    transition-duration: 0.01ms;
    transition-delay: 0s;
  }
}
</style>
