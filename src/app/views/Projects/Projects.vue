<script setup>
const projects = [
  {
    name: 'StayJaén',
    description:
      'A modern accommodation platform focused on discovering and booking places to stay in Jaén.',
    technologies: 'Angular · FastAPI · PostgreSQL'
  },
  {
    name: 'Project Two',
    description:
      'A modern web application built with a focus on performance and user experience.',
    technologies: 'Vue · JavaScript · CSS'
  },
  {
    name: 'Project Three',
    description:
      'An experimental project exploring modern web technologies and interaction design.',
    technologies: 'Vue · API · SCSS'
  }
]
</script>

<template>
  <section class="projects-page">

    <div class="projects-container">

      <div class="section-label">
        PROJECTS
      </div>

      <h1>
        Things I've
        <span>built.</span>
      </h1>

      <div class="projects-grid">

        <article
          v-for="project in projects"
          :key="project.name"
          class="project-card"
        >

          <div class="project-number">
            0{{ projects.indexOf(project) + 1 }}
          </div>

          <h3>
            {{ project.name }}
          </h3>

          <p>
            {{ project.description }}
          </p>

          <span class="project-tech">
            {{ project.technologies }}
          </span>

        </article>

      </div>

    </div>

  </section>
</template>

<style src="./Projects.css" scoped></style>