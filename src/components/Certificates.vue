<script setup>
import SectionHead from './SectionHead.vue'

const certificates = [
  {
    id: 1,
    title: 'Azure Developer Associate',
    description: 'Entwicklung von Cloud-Lösungen auf Azure'
  },
  {
    id: 2,
    title: 'DevOps Engineer Expert',
    description: 'Expertise in DevOps-Praktiken und Azure DevOps'
  }
]
</script>

<template>
  <section id="certificates" class="certs sheet theme-paper" aria-labelledby="certs-title">
    <div class="wrap">
      <SectionHead
        index="05"
        label="Zertifikate"
        lede="Offizielle Zertifizierungen in Cloud- und DevOps-Technologien"
      >
        <span id="certs-title">Microsoft <span class="serif">Zertifikate</span></span>
      </SectionHead>

      <ul class="certs__grid">
        <li v-for="(cert, i) in certificates" :key="cert.id" v-reveal="i * 120" class="cert">
          <svg class="cert__badge" viewBox="0 0 120 120" fill="none" aria-hidden="true">
            <circle class="ring" cx="60" cy="60" r="56" stroke="currentColor" stroke-width="1" stroke-dasharray="2 5" />
            <circle cx="60" cy="60" r="42" stroke="currentColor" stroke-width="1.5" />
            <path d="m41 61 13 13 25-28" stroke="var(--lime)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="cert__tag">Microsoft Certified</p>
          <h3>{{ cert.title }}</h3>
          <p class="cert__desc">{{ cert.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.certs__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: clamp(3rem, 7vw, 6rem);
}
.cert {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: clamp(20rem, 38vw, 28rem);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  background: var(--ink);
  color: var(--paper);
  border-radius: var(--radius);
  overflow: hidden;
  isolation: isolate;
}
.cert::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(26rem 20rem at 100% 0%, rgba(205, 245, 69, 0.16), transparent 70%);
}
.cert__badge {
  width: clamp(5.5rem, 10vw, 8rem);
  color: rgba(236, 235, 228, 0.7);
  margin-bottom: auto;
}
.ring {
  transform-origin: 60px 60px;
  transition: transform 1.6s var(--ease);
}
.cert:hover .ring {
  transform: rotate(40deg);
}
.cert__tag {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--lime);
}
.cert h3 {
  font-size: clamp(1.9rem, 4vw, 3.25rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.045em;
  text-wrap: balance;
}
.cert__desc {
  color: #a4a79f;
  max-width: 30rem;
}

@media (max-width: 48rem) {
  .certs__grid {
    grid-template-columns: 1fr;
  }
  .cert {
    min-height: 0;
    gap: 0.6rem;
  }
  .cert__badge {
    margin-bottom: 1.5rem;
  }
}
</style>
