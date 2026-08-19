<script setup>
const technologies = [
  'Vue',
  'JavaScript',
  'HTML',
  'CSS',
  'SCSS',
  'Angular',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Git',
  'Docker'
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
        A selection of technologies and tools I use to build
        modern digital products.
      </p>

      <div class="tech-grid">

        <div
          v-for="technology in technologies"
          :key="technology"
          class="tech-card"
        >
          {{ technology }}
        </div>

      </div>

    </div>

  </section>
</template>

<style src="./TechStack.css" scoped></style>