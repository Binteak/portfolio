<script setup>
const projects = [
  {
    name: 'Banking Data Platform',
    description:
      'Internal banking platform for managing data workflows, including housekeeping, data upload, data quality controls and interactive dashboards.',
    technologies: ['Angular', 'Django', 'PostgreSQL'],
    link: 'https://appruiz.netlify.app/'
  },
  {
    name: 'Vinted-Style Marketplace',
    description:
      'Mobile-first marketplace application inspired by Vinted, designed for browsing, managing and discovering second-hand products.',
    technologies: ['Angular', 'Django', 'PostgreSQL'],
    link: '#'
  },
  // {
  //   name: 'Gaming Deals Telegram Bot',
  //   description:
  //     'Python Telegram bot that monitors game deals and applies custom filters to quickly identify the offers worth buying.',
  //   technologies: ['Python', 'Telegram API', 'Automation'],
  //   link: '#'
  // }
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
    v-for="(project, index) in projects"
    :key="project.name"
    class="project-card"
  >

    <div class="project-top">
      <div class="project-number">
        {{ String(index + 1).padStart(2, '0') }}
      </div>

      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        View project ↗
      </a>
    </div>

    <div class="project-content">
      <h3>
        {{ project.name }}
      </h3>

      <p>
        {{ project.description }}
      </p>
    </div>

    <div class="project-technologies">
      <span
        v-for="technology in project.technologies"
        :key="technology"
        class="project-tech"
      >
        {{ technology }}
      </span>
    </div>

  </article>


  <!-- MORE PROJECTS -->

  <article class="project-card project-coming-soon">

    <div class="coming-icon">
      +
    </div>

    <div class="coming-content">
      <h3>
        More projects
        <span>coming.</span>
      </h3>

      <p>
        Currently adding new projects
        and experiments.
      </p>
    </div>

    <div class="coming-status">
      <span></span>
      In progress
    </div>

  </article>
 <br>
 <br>
 <br>

</div>

    </div>

  </section>
</template>

<style src="./Projects.css" scoped></style>