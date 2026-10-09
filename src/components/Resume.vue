<script setup>
import SectionHead from './SectionHead.vue'

const experience = [
  {
    id: 0,
    title: 'Mobile App Entwickler',
    company: 'Vorwerk',
    date: 'Mai 2026 - Heute',
    details: []
  },
  {
    id: 1,
    title: '.NET-, Azure-, O365 Entwickler',
    company: 'RealCore Group GmbH (Essen) - ALDI NORD',
    date: '2023 - Heute',
    details: [
      'Azure Cloud Administrator / DevOps Entwickler',
      'Optimierung und Automatisierung der Infrastruktur für Effizienz und Skalierbarkeit',
      'Einsatz moderner Technologien wie Terraform, Docker und Azure DevOps',
      'Implementierung von CI/CD-Pipelines und Infrastructure as Code'
    ]
  },
  {
    id: 2,
    title: 'Entwickler/Tester',
    company: 'Brunel Service GmbH & Co. KG',
    date: '2021 - 2023',
    details: [
      'AgBrain GmbH (Osnabrück): Entwicklung und Wartung von Webanwendungen mit TypeScript, NuxtJs und VueJs sowie Endanwender- und API-Tests mit Cypress',
      'Qualcomm CDMA Technologies GmbH (Frankfurt): ASP.Net/C# Entwickler - Entwicklung und Unterstützung eines internen Mitarbeitermanagement-Tools mit Funktionen für Planung, Buchung und Datenverwaltung'
    ]
  },
  {
    id: 3,
    title: 'Staatlich geprüfter Softwareentwickler',
    company: 'B.I.B International College Paderborn',
    date: '2019 - 2021',
    details: [
      'Abschluss als staatlich geprüfter Softwareentwickler',
      'Schwerpunkte: Objektorientierte Programmierung, Datenbankverwaltung, Webtechnologien',
      'Praktische Projekte in teambasierten Entwicklungsumgebungen'
    ]
  },
  {
    id: 4,
    title: 'International Business Studies',
    company: 'B.I.B International College Paderborn',
    date: '2013 - 2018',
    details: [
      'Studium der internationalen Betriebswirtschaftslehre',
      'Nicht abgeschlossen - Wechsel zur Softwareentwicklung'
    ]
  }
]
</script>

<template>
  <section id="resume" class="resume sheet theme-paper" aria-labelledby="resume-title">
    <div class="wrap resume__layout">
      <div class="resume__head">
        <SectionHead index="03" label="Lebenslauf" lede="Mein Werdegang von der Ausbildung bis heute">
          <span id="resume-title">Berufs&shy;erfahrung <span class="serif">&amp; Bildung</span></span>
        </SectionHead>
      </div>

      <ol class="tl">
        <li v-for="(item, i) in experience" :key="item.id" v-reveal class="tl__item" :class="{ 'is-current': i === 0 }">
          <p class="tl__date">{{ item.date }}</p>
          <h3>{{ item.title }}</h3>
          <p class="tl__company">{{ item.company }}</p>
          <ul v-if="item.details.length">
            <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.resume__layout {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: start;
}
.resume__head {
  position: sticky;
  top: 6.5rem;
}
.resume__head :deep(.head__title) {
  font-size: clamp(2.5rem, 4.6vw, 4.25rem);
  hyphens: manual;
}

.tl {
  position: relative;
  padding-left: clamp(1.75rem, 4vw, 3rem);
}
.tl::before,
.tl::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6rem;
  bottom: 0.6rem;
  width: 1px;
  background: var(--line);
}
.tl::after {
  width: 2px;
  left: -0.5px;
  background: var(--fg);
  transform-origin: 50% 0;
  display: none;
}

.tl__item {
  position: relative;
  display: grid;
  gap: 0.5rem;
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
}
.tl__item:last-child {
  padding-bottom: 0;
}
.tl__item::before {
  content: '';
  position: absolute;
  left: calc(clamp(1.75rem, 4vw, 3rem) * -1 - 5px);
  top: 0.45rem;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--paper);
  border: 2px solid var(--fg);
  transition: background-color 0.6s var(--ease) 0.2s, transform 0.6s var(--ease) 0.2s;
}
.tl__item.is-current::before {
  background: var(--lime);
  box-shadow: 0 0 0 5px rgba(205, 245, 69, 0.4);
}

.tl__date {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.tl h3 {
  font-size: clamp(1.5rem, 2.8vw, 2.25rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.04em;
  text-wrap: balance;
}
.tl__company {
  font-weight: 500;
}
.tl ul {
  display: grid;
  gap: 0.6rem;
  margin-top: 0.75rem;
  color: var(--muted);
}
.tl ul li {
  position: relative;
  padding-left: 1.5rem;
  text-wrap: pretty;
}
.tl ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.78em;
  width: 0.7rem;
  height: 1px;
  background: currentColor;
}

/* The timeline rule "draws" as you scroll through it (progressive enhancement). */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .tl::after {
      display: block;
      transform: scaleY(0);
      animation: draw linear both;
      animation-timeline: view();
      animation-range: entry 55% cover 60%;
    }
    @keyframes draw {
      to {
        transform: scaleY(1);
      }
    }
  }
}

@media (max-width: 56rem) {
  .resume__layout {
    grid-template-columns: 1fr;
  }
  .resume__head {
    position: static;
  }
}
</style>
