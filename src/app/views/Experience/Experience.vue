<script setup>
const experiences = [
  {
    period: '2024 — Present',
    role: 'Senior Developer',
    company: 'Company Name',
    description:
      'Building scalable applications and working with modern frontend technologies.'
  },
  {
    period: '2021 — 2024',
    role: 'Frontend Developer',
    company: 'Company Name',
    description:
      'Developed web applications focused on usability, performance and clean architecture.'
  },
  {
    period: '2019 — 2021',
    role: 'Junior Developer',
    company: 'Company Name',
    description:
      'Started my professional journey developing web applications and learning modern technologies.'
  }
]
</script>

<template>
  <section class="experience-page">

    <div class="experience-container">

      <div class="section-label">
        EXPERIENCE
      </div>

      <h1>
        Where I've
        <span>worked.</span>
      </h1>

      <div class="experience-list">

        <article
          v-for="experience in experiences"
          :key="experience.period"
          class="experience-item"
        >

          <div class="experience-period">
            {{ experience.period }}
          </div>

          <div class="experience-info">

            <h3>
              {{ experience.role }}
            </h3>

            <span>
              {{ experience.company }}
            </span>

            <p>
              {{ experience.description }}
            </p>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>

<style src="./Experience.css" scoped></style>