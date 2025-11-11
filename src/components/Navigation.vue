<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <a href="#" class="logo">RM</a>
      
      <ul class="nav-links" :class="{ active: mobileMenuOpen }">
        <li><a href="#home" @click="handleNavClick('home')">Home</a></li>
        <li><a href="#about" @click="handleNavClick('about')">Über mich</a></li>
        <li><a href="#resume" @click="handleNavClick('resume')">Lebenslauf</a></li>
        <li><a href="#skills" @click="handleNavClick('skills')">Skills</a></li>
        <li><a href="#certificates" @click="handleNavClick('certificates')">Zertifikate</a></li>
        <li><a href="#projects" @click="handleNavClick('projects')">Projekte</a></li>
        <li><a href="#contact" @click="handleNavClick('contact')">Kontakt</a></li>
      </ul>
      
      <div class="menu-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Navigation',
  props: {
    isScrolled: Boolean
  },
  emits: ['navigate'],
  setup(props, { emit }) {
    const mobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const handleNavClick = (sectionId) => {
      emit('navigate', sectionId)
      mobileMenuOpen.value = false
    }

    return {
      mobileMenuOpen,
      toggleMobileMenu,
      handleNavClick
    }
  }
}
</script>
