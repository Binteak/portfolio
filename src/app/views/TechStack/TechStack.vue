<script setup>
const technologyGroups = [
  {
    title: 'Frontend',
    technologies: [
      'TypeScript',
      'JavaScript',
      'Angular',
      'Vue',
      'HTML',
      'CSS',
      'SCSS'
    ]
  },

  {
    title: 'Backend & APIs',
    technologies: [
      'Python',
      'FastAPI',
      'Django',
      'Django REST Framework',
      'REST APIs'
    ]
  },

  {
    title: 'Data & Analytics',
    technologies: [
      'PySpark',
      'Databricks',
      'Power BI',
      'Data Processing',
      'Data Visualisation',
      'Machine Learning'
    ]
  },

  {
    title: 'Databases',
    technologies: [
      'Oracle',
      'PostgreSQL',
      'SQL'
    ]
  },

  {
    title: 'Cloud & DevOps',
    technologies: [
      'AWS',
      'Red Hat OpenShift',
      'Docker',
      'Git',
      'CI/CD'
    ]
  },

  {
    title: 'Code Quality & Security',
    technologies: [
      'SonarQube',
      'Fortify',
      'Unit Testing',
      'Integration Testing',
      'Secure Development'
    ]
  },

  {
    title: 'Architecture & Engineering',
    technologies: [
      'Software Architecture',
      'Application Modernisation',
      'System Design',
      'Gluon'
    ]
  },

  {
    title: 'Automation & Regulatory',
    technologies: [
      'Process Automation',
      'Data Automation',
      'Credit Risk',
      'EBA Regulatory',
      'Climate Risk',
      'Credit Scoring'
    ]
  }
]
</script>

<template>
  <section class="tech-page">

    <div class="tech-container">

      <div class="section-label">
        TECH STACK
      </div>

      <h1>
        Technologies I
        <span>work with.</span>
      </h1>

      <p class="tech-description">
        Technologies, tools and engineering practices I use to
        design, build and deploy modern software solutions.
      </p>

      <div class="tech-groups">

        <div
          v-for="group in technologyGroups"
          :key="group.title"
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