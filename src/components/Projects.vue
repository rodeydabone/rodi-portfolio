<script setup>
import SectionHead from './SectionHead.vue'

const projects = [
  {
    id: 1,
    title: 'ALDI NORD Azure Infrastructure',
    description:
      'Optimierung und Automatisierung der Cloud-Infrastruktur bei ALDI NORD. Implementierung von Infrastructure as Code mit Terraform, Docker-Containerisierung und CI/CD-Pipelines.',
    lead: 'Azure',
    color: '#cdf545',
    tags: ['Azure', 'Terraform', 'Docker', 'DevOps', 'CI/CD'],
    link: 'https://www.linkedin.com/in/rodi-alain-marten'
  },
  {
    id: 2,
    title: 'SharePoint Enterprise Solution',
    description:
      'Entwicklung einer leistungsoptimierten Softwareanwendung mit React, ASP.Core Web API und Docker. Migration zu einer Microservice-Architektur im Azure Kubernetes Cluster.',
    lead: 'React',
    color: '#6c9bff',
    tags: ['React', '.NET', 'O365', 'SharePoint', 'Docker', 'Kubernetes'],
    link: 'https://www.linkedin.com/in/rodi-alain-marten'
  },
  {
    id: 3,
    title: 'AgBrain Web Platform',
    description:
      'Entwicklung und Wartung von Webanwendungen mit TypeScript, NuxtJs und VueJs. Implementierung von umfassenden Endanwender- und API-Tests mit Cypress.',
    lead: 'Vue.js',
    color: '#ff5fa8',
    tags: ['TypeScript', 'Vue.js', 'Nuxt.js', 'Cypress', 'Testing'],
    link: 'https://www.linkedin.com/in/rodi-alain-marten'
  },
  {
    id: 4,
    title: 'Qualcomm Employee Management',
    description:
      'Entwicklung und Unterstützung eines internen Mitarbeitermanagement-Tools mit Funktionen für Planung, Buchung und Datenverwaltung.',
    lead: 'ASP.NET',
    color: '#ffb454',
    tags: ['ASP.NET', 'C#', 'SQL', 'Enterprise'],
    link: 'https://www.linkedin.com/in/rodi-alain-marten'
  },
  {
    id: 5,
    title: 'Cloud-Native Applications',
    description:
      'Entwicklung cloudnativer Anwendungen mit modernen Technologien und Best Practices für Skalierbarkeit und Performance.',
    lead: 'Cloud',
    color: '#4de0c1',
    tags: ['Azure', 'Microservices', '.NET', 'Cloud-Native'],
    link: 'https://www.linkedin.com/in/rodi-alain-marten'
  },
  {
    id: 6,
    title: 'DevOps Automation Suite',
    description:
      'Automatisierung von Deployment-Prozessen und Infrastructure Management mit modernen DevOps-Tools und -Praktiken.',
    lead: 'IaC',
    color: '#b79cff',
    tags: ['Azure DevOps', 'Terraform', 'Automation', 'IaC'],
    link: 'https://www.linkedin.com/in/rodi-alain-marten'
  }
]

const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <section id="projects" class="projects sheet theme-ink" aria-labelledby="projects-title">
    <div class="wrap">
      <SectionHead index="02" label="Projekte" lede="Eine Auswahl meiner Arbeiten und Entwicklungen">
        <span id="projects-title">Ausgewählte <span class="serif">Projekte</span></span>
      </SectionHead>

      <ol class="stack">
        <li v-for="(project, i) in projects" :key="project.id" class="card" :style="{ '--i': i, '--c': project.color }">
          <article class="card__inner">
            <div class="card__body">
              <p class="card__index">{{ pad(i + 1) }}<span> / {{ pad(projects.length) }}</span></p>
              <h3>{{ project.title }}</h3>
              <p class="card__desc">{{ project.description }}</p>
              <ul class="tags" aria-label="Technologien">
                <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
              </ul>
              <a :href="project.link" class="card__link" target="_blank" rel="noopener">
                Details auf LinkedIn
                <span class="sr-only">(öffnet in neuem Tab)</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg>
              </a>
            </div>
            <div class="card__art" aria-hidden="true">
              <span class="card__lead">{{ project.lead }}</span>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.stack {
  margin-top: clamp(3rem, 7vw, 6rem);
  display: grid;
  gap: 1.25rem;
}

.card__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  min-height: clamp(23rem, 58svh, 31rem);
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 -1.5rem 3rem -1.5rem rgba(0, 0, 0, 0.7);
  transition: border-color 0.4s;
}
.card__inner:hover {
  border-color: color-mix(in srgb, var(--c) 55%, transparent);
}

.card__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
  padding: clamp(1.5rem, 3.5vw, 3rem);
}
.card__index {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  color: var(--c);
}
.card__index span {
  color: var(--muted);
}
.card h3 {
  font-size: clamp(1.75rem, 3.6vw, 3rem);
  font-weight: 500;
  line-height: 1.02;
  letter-spacing: -0.045em;
  text-wrap: balance;
}
.card__desc {
  max-width: 34rem;
  color: var(--muted);
  text-wrap: pretty;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
}
.tags li {
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: var(--fg);
}
.card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  padding: 0.25rem 0;
  border-bottom: 1px solid var(--c);
  transition: gap 0.4s var(--ease), color 0.25s;
}
.card__link svg {
  width: 1em;
  height: 1em;
  color: var(--c);
}
.card__link:hover {
  gap: 0.9rem;
  color: var(--c);
}

/* Typographic art panel */
.card__art {
  position: relative;
  display: grid;
  align-items: end;
  overflow: hidden;
  background:
    radial-gradient(28rem 24rem at 20% 10%, color-mix(in srgb, var(--c) 38%, transparent), transparent 70%),
    linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 100% 3rem,
    linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 3rem 100%,
    var(--ink-3);
  border-left: 1px solid var(--line);
}
.card__lead {
  display: block;
  padding: 0 0 0.05em 0.06em;
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 600;
  line-height: 0.85;
  letter-spacing: -0.07em;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--c);
  white-space: nowrap;
  transition: transform 0.8s var(--ease);
}
.card__inner:hover .card__lead {
  transform: translate3d(-0.04em, -0.04em, 0);
}

/* Sticky stacking: cards pile up under the nav while scrolling. Desktop only. */
@media (min-width: 62rem) and (min-height: 42rem) {
  .stack {
    gap: clamp(5rem, 14svh, 9rem);
    padding-bottom: 2rem;
  }
  .card {
    position: sticky;
    top: calc(5.5rem + var(--i) * 1.1rem);
  }
}

@media (max-width: 62rem) {
  .card__inner {
    grid-template-columns: 1fr;
    min-height: 0;
  }
  .card__art {
    order: -1;
    min-height: 9rem;
    border-left: 0;
    border-bottom: 1px solid var(--line);
  }
  .card__lead {
    font-size: clamp(3.5rem, 16vw, 6rem);
  }
  .tags {
    margin-top: 0.25rem;
  }
}
</style>
