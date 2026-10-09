<script setup>
import SectionHead from './SectionHead.vue'

const skillCategories = [
  {
    id: 1,
    title: 'Cloud & DevOps',
    skills: ['Azure DevOps', 'Azure Cloud', 'Docker', 'Terraform', 'CI/CD Pipelines', 'Infrastructure as Code']
  },
  {
    id: 2,
    title: 'Backend Development',
    skills: ['C# / .NET', 'ASP.NET Core', 'Web API', 'Entity Framework', 'Microservices']
  },
  {
    id: 3,
    title: 'Frontend Development',
    skills: ['TypeScript', 'Vue.js', 'Nuxt.js', 'React', 'HTML5', 'CSS3', 'Responsive Design']
  },
  {
    id: 4,
    title: 'Datenbanken',
    skills: ['SQL', 'Microsoft SQL Server', 'PostgreSQL', 'Database Design']
  },
  {
    id: 5,
    title: 'Tools & Methoden',
    skills: ['Git', 'Scrum', 'Agile', 'Project Management', 'HCL Terraform', 'SharePoint']
  },
  {
    id: 6,
    title: 'Sprachen',
    skills: ['Deutsch (Muttersprache)', 'Englisch (Fließend)', 'Japanisch (B1)', 'Polnisch (A2)', 'Kurdisch (A2)']
  }
]
</script>

<template>
  <section id="skills" class="skills sheet theme-ink" aria-labelledby="skills-title">
    <div class="wrap">
      <SectionHead index="04" label="Skills" lede="Technologien und Tools, mit denen ich arbeite">
        <span id="skills-title"><span class="serif">Kompetenzen</span></span>
      </SectionHead>

      <ul class="rows">
        <li v-for="(category, i) in skillCategories" :key="category.id" v-reveal class="row">
          <h3>
            <span class="row__n" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
            {{ category.title }}
          </h3>
          <ul class="pills">
            <li v-for="skill in category.skills" :key="skill">{{ skill }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.rows {
  margin-top: clamp(3rem, 7vw, 6rem);
  border-bottom: 1px solid var(--line);
}
.row {
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 1.25rem clamp(1.5rem, 4vw, 4rem);
  align-items: baseline;
  padding: clamp(1.5rem, 3vw, 2.25rem) 0;
  border-top: 1px solid var(--line);
}
/* Hover wash scales in from the left; transform-only. */
.row::before {
  content: '';
  position: absolute;
  inset: 0 calc(var(--gutter) * -0.5);
  background: var(--card);
  border-radius: 1rem;
  z-index: -1;
  opacity: 0;
  transform: scaleX(0.97);
  transition: opacity 0.4s var(--ease), transform 0.6s var(--ease);
}
.row:hover::before,
.row:focus-within::before {
  opacity: 1;
  transform: none;
}

.row h3 {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  font-size: clamp(1.6rem, 3.2vw, 2.6rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.04em;
  transition: transform 0.6s var(--ease);
}
.row:hover h3 {
  transform: translate3d(0.5rem, 0, 0);
}
.row__n {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: var(--accent);
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.pills li {
  padding: 0.5rem 1rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;
}
.pills li:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}

@media (max-width: 48rem) {
  .row {
    grid-template-columns: 1fr;
  }
}
@media (hover: none) {
  .row::before {
    display: none;
  }
}
</style>
