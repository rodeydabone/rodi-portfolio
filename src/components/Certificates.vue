<template>
  <section id="certificates" class="certificates">
    <div class="container">
      <div class="section-title">
        <h2>Microsoft Zertifikate</h2>
        <p>Offizielle Zertifizierungen in Cloud- und DevOps-Technologien</p>
      </div>
      
      <div class="certificates-grid">
        <div class="certificate-card" v-for="cert in certificates" :key="cert.id">
          <div class="certificate-icon">
            {{ cert.icon }}
          </div>
          <h3>{{ cert.title }}</h3>
          <p>{{ cert.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Certificates',
  setup() {
    const certificates = ref([
      {
        id: 1,
        title: 'Azure Developer Associate',
        description: 'Microsoft Certified - Entwicklung von Cloud-Lösungen auf Azure',
        icon: '🎖️'
      },
      {
        id: 2,
        title: 'DevOps Engineer Expert',
        description: 'Microsoft Certified - Expertise in DevOps-Praktiken und Azure DevOps',
        icon: '⚙️'
      }
    ])

    return {
      certificates
    }
  }
}
</script>
