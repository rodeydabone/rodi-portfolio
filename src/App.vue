<template>
  <div id="app">
    <Navigation :isScrolled="isScrolled" @navigate="scrollToSection" />
    
    <Hero />
    
    <About />
    
    <Resume />
    
    <Skills />
    
    <Certificates />
    
    <Projects />
    
    <Contact />
    
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Skills from './components/Skills.vue'
import Certificates from './components/Certificates.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    About,
    Resume,
    Skills,
    Certificates,
    Projects,
    Contact,
    Footer
  },
  setup() {
    const isScrolled = ref(false)

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      scrollToSection
    }
  }
}
</script>
