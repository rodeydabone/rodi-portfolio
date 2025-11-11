<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-title">
        <h2>Projekte</h2>
        <p>Eine Auswahl meiner Arbeiten und Entwicklungen</p>
      </div>
      
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-image">
            {{ project.icon }}
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span class="project-tag" v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
            <div class="project-links">
              <a :href="project.link" class="project-link primary" target="_blank" rel="noopener">
                Details ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Projects',
  setup() {
    const projects = ref([
      {
        id: 1,
        title: 'ALDI NORD Azure Infrastructure',
        description: 'Optimierung und Automatisierung der Cloud-Infrastruktur bei ALDI NORD. Implementierung von Infrastructure as Code mit Terraform, Docker-Containerisierung und CI/CD-Pipelines.',
        icon: '☁️',
        tags: ['Azure', 'Terraform', 'Docker', 'DevOps', 'CI/CD'],
        link: 'https://www.linkedin.com/in/rodi-alain-marten'
      },
      {
        id: 2,
        title: 'SharePoint Enterprise Solution',
        description: 'Entwicklung einer leistungsoptimierten Softwareanwendung mit React, ASP.Core Web API und Docker. Migration zu einer Microservice-Architektur im Azure Kubernetes Cluster.',
        icon: '📊',
        tags: ['React', '.NET', 'O365', 'SharePoint', 'Docker', 'Kubernetes'],
        link: 'https://www.linkedin.com/in/rodi-alain-marten'
      },
      {
        id: 3,
        title: 'AgBrain Web Platform',
        description: 'Entwicklung und Wartung von Webanwendungen mit TypeScript, NuxtJs und VueJs. Implementierung von umfassenden Endanwender- und API-Tests mit Cypress.',
        icon: '🌐',
        tags: ['TypeScript', 'Vue.js', 'Nuxt.js', 'Cypress', 'Testing'],
        link: 'https://www.linkedin.com/in/rodi-alain-marten'
      },
      {
        id: 4,
        title: 'Qualcomm Employee Management',
        description: 'Entwicklung und Unterstützung eines internen Mitarbeitermanagement-Tools mit Funktionen für Planung, Buchung und Datenverwaltung.',
        icon: '👥',
        tags: ['ASP.NET', 'C#', 'SQL', 'Enterprise'],
        link: 'https://www.linkedin.com/in/rodi-alain-marten'
      },
      {
        id: 5,
        title: 'Cloud-Native Applications',
        description: 'Entwicklung cloudnativer Anwendungen mit modernen Technologien und Best Practices für Skalierbarkeit und Performance.',
        icon: '🚀',
        tags: ['Azure', 'Microservices', '.NET', 'Cloud-Native'],
        link: 'https://www.linkedin.com/in/rodi-alain-marten'
      },
      {
        id: 6,
        title: 'DevOps Automation Suite',
        description: 'Automatisierung von Deployment-Prozessen und Infrastructure Management mit modernen DevOps-Tools und -Praktiken.',
        icon: '⚙️',
        tags: ['Azure DevOps', 'Terraform', 'Automation', 'IaC'],
        link: 'https://www.linkedin.com/in/rodi-alain-marten'
      }
    ])

    return {
      projects
    }
  }
}
</script>
