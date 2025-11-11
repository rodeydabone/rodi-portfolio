<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-title">
        <h2>Kompetenzen</h2>
        <p>Technologien und Tools, mit denen ich arbeite</p>
      </div>
      
      <div class="skills-grid">
        <div class="skill-category" v-for="category in skillCategories" :key="category.id">
          <h3>{{ category.title }}</h3>
          <div class="skill-tags">
            <span class="skill-tag" v-for="skill in category.skills" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Skills',
  setup() {
    const skillCategories = ref([
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
    ])

    return {
      skillCategories
    }
  }
}
</script>
