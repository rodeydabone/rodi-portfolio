<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Resume from './components/Resume.vue'
import Skills from './components/Skills.vue'
import Certificates from './components/Certificates.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const active = ref('home')
const compact = ref(false)
const topSentinel = ref(null)

let sectionObserver
let topObserver

onMounted(() => {
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
  sectionObserver?.disconnect()
  topObserver?.disconnect()
})
</script>

<template>
  <a class="skip-link" href="#main">Zum Inhalt springen</a>
  <div class="scroll-progress" aria-hidden="true"></div>
  <div ref="topSentinel" class="top-sentinel" aria-hidden="true"></div>

  <Navigation :active="active" :compact="compact" />

  <main id="main">
    <Hero />
    <About />
    <Projects />
    <Resume />
    <Skills />
    <Certificates />
    <Contact />
  </main>

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
