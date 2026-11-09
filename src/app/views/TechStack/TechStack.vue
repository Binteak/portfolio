<script setup>
import { computed } from 'vue'
import { lang } from '../../../i18n'

const groupTitlesEs = {
  'Frontend': 'Frontend',
  'Backend & APIs': 'Backend y APIs',
  'Data & Machine Learning': 'Datos y Machine Learning',
  'Databases': 'Bases de datos',
  'Cloud & DevOps': 'Cloud y DevOps',
  'Testing & Quality': 'Testing y calidad',
  'Applied AI': 'IA aplicada',
  'Methodology & Leadership': 'Metodología y liderazgo'
}

const technologiesEs = {
  'Signals & Standalone Components': 'Signals y Standalone Components',
  'Responsive Design': 'Diseño responsive',
  'Unit Testing': 'Testing unitario',
  'SOLID Principles': 'Principios SOLID',
  'Document Data Extraction': 'Extracción de datos de documentos',
  'Mentoring': 'Mentoría'
}

const content = {
  en: {
    label: 'TECH STACK',
    title: 'Technologies I',
    highlight: 'work with.',
    description:
      'Technologies, tools and engineering practices I use to design, build and deploy modern software solutions.'
  },
  es: {
    label: 'TECNOLOGÍAS',
    title: 'Tecnologías con las que',
    highlight: 'trabajo.',
    description:
      'Tecnologías, herramientas y prácticas de ingeniería que uso para diseñar, construir y desplegar soluciones de software modernas.'
  }
}

const c = computed(() => content[lang.value])

const translatedGroups = computed(() =>
  technologyGroups.map((group) => ({
    key: group.title,
    title: lang.value === 'es' ? groupTitlesEs[group.title] ?? group.title : group.title,
    technologies: group.technologies.map((technology) =>
      lang.value === 'es' ? technologiesEs[technology] ?? technology : technology
    )
  }))
)

const technologyGroups = [
  {
    title: 'Frontend',
    technologies: [
      'Angular',
      'Signals & Standalone Components',
      'RxJS',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'PrimeNG',
      'Vuetify',
      'Tailwind CSS',
      'HTML5 / CSS3 / SCSS',
      'Chart.js',
      'ApexCharts',
      'Leaflet',
      'Responsive Design'
    ]
  },
  {
    title: 'Backend & APIs',
    technologies: [
      'Python',
      'FastAPI',
      'Django',
      'Django REST Framework',
      'REST APIs',
      'Pydantic',
      'SQLAlchemy',
      'OAuth 2.0 / OpenID Connect',
      'Microsoft Entra ID'
    ]
  },
  {
    title: 'Data & Machine Learning',
    technologies: [
      'PySpark',
      'Pandas',
      'NumPy',
      'DuckDB',
      'Parquet',
      'Databricks',
      'Power BI',
      'R',
      'SAS',
      'Machine Learning'
    ]
  },
  {
    title: 'Databases',
    technologies: [
      'PostgreSQL',
      'Oracle',
      'MySQL',
      'Redis',
      'SQL'
    ]
  },
  {
    title: 'Cloud & DevOps',
    technologies: [
      'Docker',
      'Docker Compose',
      'Kubernetes',
      'Red Hat OpenShift',
      'GitHub Actions',
      'CI/CD',
      'Nexus',
      'nginx',
      'AWS',
      'Git',
      'Render'
    ]
  },
  {
    title: 'Testing & Quality',
    technologies: [
      'Unit Testing',
      'pytest',
      'Vitest',
      'Karma / Jasmine',
      'Code Coverage',
      'SonarQube',
      'Fortify',
      'SOLID Principles'
    ]
  },
  {
    title: 'Applied AI',
    technologies: [
      'LLM APIs (Claude, OpenAI)',
      'Tool Use / Function Calling',
      'Document Data Extraction',
      'GitHub Copilot',
      'Claude Code'
    ]
  },
  {
    title: 'Methodology & Leadership',
    technologies: [
      'Agile',
      'Scrum',
      'Jira',
      'Tech Lead',
      'Team Lead',
      'Mentoring'
    ]
  }
]
</script>

<template>
  <section class="tech-page">

    <div class="tech-container">

      <div class="section-label">
        {{ c.label }}
      </div>

      <h1>
        {{ c.title }}
        <span>{{ c.highlight }}</span>
      </h1>

      <p class="tech-description">
        {{ c.description }}
      </p>

      <div class="tech-groups">

        <div
          v-for="group in translatedGroups"
          :key="group.key"
          class="tech-group"
        >

          <div class="tech-group-header">
            <span class="tech-group-dot"></span>
            {{ group.title }}
          </div>

          <div class="tech-grid">

            <div
              v-for="technology in group.technologies"
              :key="technology"
              class="tech-card"
            >
              <span class="tech-indicator"></span>
              {{ technology }}
            </div>

          </div>

        </div>

      </div>

             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
           <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

    </div>

    

  </section>
</template>

<style src="./TechStack.css" scoped></style>