<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Resume from './components/Resume.vue'
import Skills from './components/Skills.vue'
import Certificates from './components/Certificates.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import LegalPage from './components/LegalPage.vue'

const BASE_TITLE = document.title
const LEGAL_TITLES = {
  impressum: 'Impressum – Rodi Marten',
  datenschutz: 'Datenschutzerklärung – Rodi Marten'
}

// Tiny hash router: "#/impressum" and "#/datenschutz" show the legal pages,
// everything else (including section anchors like "#about") is the one-page site.
function parseRoute() {
  const name = location.hash.replace(/^#\//, '')
  return location.hash.startsWith('#/') && name in LEGAL_TITLES ? name : 'home'
}

const route = ref(parseRoute())
const isHome = computed(() => route.value === 'home')

async function onHashChange() {
  const previous = route.value
  route.value = parseRoute()
  await nextTick()
  document.title = isHome.value ? BASE_TITLE : LEGAL_TITLES[route.value]
  if (!isHome.value) {
    active.value = ''
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('legal')?.focus({ preventScroll: true })
  } else if (previous !== 'home') {
    const target = document.getElementById(location.hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }
}

const active = ref('home')
const compact = ref(false)
const topSentinel = ref(null)

let sectionObserver
let topObserver

onMounted(() => {
  window.addEventListener('hashchange', onHashChange)
  if (!isHome.value) document.title = LEGAL_TITLES[route.value]

  // A section becomes "active" while it crosses a thin band in the middle of the viewport.
  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id
      }
    },
    { rootMargin: '-45% 0px -54% 0px' }
  )
  document.querySelectorAll('main > section[id]').forEach((el) => sectionObserver.observe(el))

  topObserver = new IntersectionObserver(([entry]) => {
    compact.value = !entry.isIntersecting
  })
  topObserver.observe(topSentinel.value)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', onHashChange)
  sectionObserver?.disconnect()
  topObserver?.disconnect()
})
</script>

<template>
  <a class="skip-link" :href="isHome ? '#main' : '#legal'">Zum Inhalt springen</a>
  <div class="scroll-progress" aria-hidden="true"></div>
  <div ref="topSentinel" class="top-sentinel" aria-hidden="true"></div>

  <Navigation :active="active" :compact="compact" />

  <main v-show="isHome" id="main">
    <Hero />
    <About />
    <Projects />
    <Resume />
    <Skills />
    <Certificates />
    <Contact />
  </main>

  <LegalPage v-if="!isHome" :page="route" />

  <Footer />
</template>

<style>
.top-sentinel {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 80px;
  pointer-events: none;
}
</style>
