<script setup>
import SectionHead from './SectionHead.vue'

const certificates = [
  {
    id: 1,
    title: 'Azure Developer Associate',
    description: 'Entwicklung von Cloud-Lösungen auf Azure',
    earned: 'Januar 2024',
    expires: 'Januar 2027',
    active: true
  },
  {
    id: 2,
    title: 'DevOps Engineer Expert',
    description: 'Expertise in DevOps-Praktiken und Azure DevOps',
    earned: 'Mai 2024',
    expires: 'Mai 2027',
    active: true
  },
  {
    id: 3,
    title: 'Azure AI Fundamentals',
    description: 'Grundlagen von KI-Diensten auf Microsoft Azure',
    earned: 'Oktober 2026',
    expires: null,
    active: false
  }
]

const exams = [
  {
    id: 1,
    title: 'Microsoft Azure AI Fundamentals',
    date: '8. Oktober 2026'
  },
  {
    id: 2,
    title: 'Designing Microsoft Azure Infrastructure Solutions',
    date: '11. Juli 2025'
  }
]
</script>

<template>
  <section id="certificates" class="certs sheet theme-paper" aria-labelledby="certs-title">
    <div class="wrap">
      <SectionHead
        index="05"
        label="Zertifikate"
        lede="Offizielle Zertifizierungen in Cloud-, DevOps- und KI-Technologien"
      >
        <span id="certs-title">Microsoft <span class="serif">Zertifikate</span></span>
      </SectionHead>

      <ul class="certs__grid">
        <li v-for="(cert, i) in certificates" :key="cert.id" v-reveal="i * 120" class="cert">
          <div class="cert__top">
            <svg class="cert__badge" viewBox="0 0 120 120" fill="none" aria-hidden="true">
              <circle class="ring" cx="60" cy="60" r="56" stroke="currentColor" stroke-width="1" stroke-dasharray="2 5" />
              <circle cx="60" cy="60" r="42" stroke="currentColor" stroke-width="1.5" />
              <path d="m41 61 13 13 25-28" stroke="var(--lime)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div v-if="cert.active" class="chips">
              <p class="chip">Aktiv</p>
              <p class="chip">Online verifizierbar</p>
            </div>
          </div>
          <p class="cert__tag">Microsoft Certified</p>
          <h3>{{ cert.title }}</h3>
          <p class="cert__desc">{{ cert.description }}</p>
          <dl class="cert__meta">
            <div>
              <dt>Erworben</dt>
              <dd>{{ cert.earned }}</dd>
            </div>
            <div v-if="cert.expires">
              <dt>Gültig bis</dt>
              <dd>{{ cert.expires }}</dd>
            </div>
          </dl>
        </li>
      </ul>

      <div class="exams">
        <h3 v-reveal class="exams__title">Bestandene Prüfungen</h3>
        <ul>
          <li v-for="(exam, i) in exams" :key="exam.id" v-reveal="i * 100" class="exam">
            <div>
              <p class="exam__kind">Prüfung</p>
              <p class="exam__name">{{ exam.title }}</p>
            </div>
            <p class="exam__meta">{{ exam.date }} · Online · PearsonVue</p>
            <p class="chip chip--solid">Bestanden</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certs__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: clamp(3rem, 7vw, 6rem);
}
.cert {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-height: clamp(20rem, 30vw, 26rem);
  padding: clamp(1.5rem, 2.4vw, 2.25rem);
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
  background: radial-gradient(22rem 18rem at 100% 0%, rgba(205, 245, 69, 0.16), transparent 70%);
}
.cert__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: auto;
  padding-bottom: 1.5rem;
}
.cert__badge {
  width: clamp(4.5rem, 7vw, 6rem);
  color: rgba(236, 235, 228, 0.7);
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
  font-size: clamp(1.6rem, 2.7vw, 2.4rem);
  font-weight: 500;
  line-height: 1.02;
  letter-spacing: -0.045em;
  text-wrap: balance;
}
.cert__desc {
  color: #a4a79f;
  text-wrap: pretty;
}
.cert__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.75rem;
  margin: 0.75rem 0 0;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(236, 235, 228, 0.16);
}
.cert__meta dt {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8d9088;
}
.cert__meta dd {
  margin: 0;
  font-weight: 500;
}

.chips {
  display: grid;
  justify-items: end;
  gap: 0.4rem;
}
.chip {
  display: inline-block;
  white-space: nowrap;
  padding: 0.3rem 0.7rem;
  border: 1px solid rgba(236, 235, 228, 0.3);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.04em;
  line-height: 1.3;
  color: var(--paper);
  text-align: center;
}
.chip--solid {
  border-color: transparent;
  background: var(--lime);
  color: var(--ink);
  font-weight: 500;
}

/* Exams */
.exams {
  margin-top: clamp(4rem, 8vw, 7rem);
}
.exams__title {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
}
.exam {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 4fr) auto;
  align-items: center;
  gap: 0.5rem 2rem;
  padding: 1.4rem 0;
  border-top: 1px solid var(--line);
}
.exams ul li:last-child {
  border-bottom: 1px solid var(--line);
}
.exam__kind {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.exam__name {
  font-size: clamp(1.15rem, 2vw, 1.6rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.03em;
  text-wrap: balance;
}
.exam__meta {
  color: var(--muted);
  font-size: 0.9375rem;
}
.exams .chip--solid {
  background: var(--ink);
  color: var(--lime);
}

@media (max-width: 62rem) {
  .certs__grid {
    grid-template-columns: 1fr;
  }
  .cert {
    min-height: 0;
  }
  .exam {
    grid-template-columns: 1fr auto;
  }
  .exam__meta {
    grid-column: 1;
    grid-row: 2;
  }
  .exam .chip {
    grid-column: 2;
    grid-row: 1;
  }
}
</style>
