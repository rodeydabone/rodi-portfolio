<template>
  <section id="resume" class="resume">
    <div class="container">
      <div class="section-title">
        <h2>Berufserfahrung & Bildung</h2>
        <p>Mein Werdegang von der Ausbildung bis heute</p>
      </div>
      
      <div class="resume-content">
        <div class="timeline">
          <div class="timeline-item" v-for="item in experience" :key="item.id">
            <div class="timeline-content">
              <div class="timeline-header">
                <div>
                  <h3>{{ item.title }}</h3>
                  <p class="company">{{ item.company }}</p>
                </div>
                <span class="timeline-date">{{ item.date }}</span>
              </div>
              <ul>
                <li v-for="(detail, index) in item.details" :key="index">
                  {{ detail }}
                </li>
              </ul>
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
  name: 'Resume',
  setup() {
    const experience = ref([
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
    ])

    return {
      experience
    }
  }
}
</script>
