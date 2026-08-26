<script setup>
const projects = [
 {
  name: 'ARR. Personal Portfolio',
  description:'You are here!. An interactive developer portfolio showcasing projects, technology stacks, professional experience and an interactive CV, all in one place.',
  technologies: ['Vue', 'Vite', 'JavaScript', 'CSS'],
  link: '#',
  github: 'https://github.com/Binteak/portfolio'
},

{
  name: 'Banking Data Platform',
  description:
    'Web-based banking data platform for managing data workflows, including data ingestion, housekeeping, data quality controls and interactive risk reporting.',
  technologies: ['Angular', 'TypeScript', 'Python/Django', 'PostgreSQL'],
  link: 'https://banking-data-platform-frontend.onrender.com/',
  github: 'https://github.com/Binteak/bankingDataPlatform_frontend'
},

{
  name: 'City Events App',
  description:
    'Mobile-first event discovery platform for finding concerts, activities and local events based on your city and interests.',
  technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL'],
  link: 'Creating..',
  github: ''
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

        <!-- PROJECTS -->

        <article
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card"
        >

          <div class="project-top">

            <div class="project-number">
              {{ String(index + 1).padStart(2, '0') }}
            </div>

              <div class="project-actions">

  <!-- VIEW DEMO -->
  <a
    v-if="project.link && project.link !== '#'"
    :href="project.link"
    target="_blank"
    rel="noopener noreferrer"
    class="project-action demo-action"
  >
    <i class="pi pi-external-link"></i>
    <span>View Demo</span>
  </a>

  <!-- GITHUB -->
 <a
  v-if="project.github && project.github !== '#'"
  :href="project.github"
  target="_blank"
  rel="noopener noreferrer"
  class="project-action github-action"
  aria-label="View GitHub repository"
  title="GitHub repository"
>
  <svg
    class="github-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56
      0-.27-.01-1.18-.01-2.14-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69
      -1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26
      3.35.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29
      1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0
      c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84
      1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18 0 1.58-.01
      2.85-.01 3.24 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12
      23.5 5.65 18.35.5 12 .5Z"
    />
  </svg>
</a>
</div>

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