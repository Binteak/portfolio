<script setup>

import eyLogo from '../../../assets/logos/ey.jpg'
import quentalLogo from '../../../assets/logos/quental.jpg'
import santanderLogo from '../../../assets/logos/santander.jpg'
import bbvaLogo from '../../../assets/logos/bbva.jpg'

const experiences = [
  {
  period: 'FUTURE',
  role: 'Maybe you?',
  company: 'Let’s work together',
  logo: null,
  icon: '♥',

  projects: [],

  description:
    'Looking for the next challenge, an interesting project or a great team to build something meaningful together.'
},
  {
    period: '2018 — Present',
    role: 'Senior Advisory Consultant / Full Stack Developer',
    company: 'EY',
    logo: eyLogo,

    projects: [
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: 'Credit Risk & EBA Regulatory',
        description:
          'Development of technological solutions for credit risk and regulatory reporting, working with critical financial processes and enterprise environments.',
        technologies: [
          'Python',
          'PySpark',
          'Angular',
          'SQL',
          'Power BI'
        ]
      },
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: 'Climate Risk',
        description:
          'Development and automation of solutions related to climate risk, combining software engineering, data processing and regulatory requirements.',
        technologies: [
          'Python',
          'PySpark',
          'SQL',
          'Data'
        ]
      },
      {
        client: 'BBVA',
        logo: bbvaLogo,
        title: 'Audit Automation',
        description:
          'Development and automation of audit processes, creating technological solutions to reduce manual work and improve operational efficiency.',
        technologies: [
          'Python',
          'FastAPI',
          'Angular',
          'Power BI',
          'Automation'
        ]
      }
    ],

    description:
      'Senior technical profile working across software engineering, data, automation and enterprise architecture.'
  },

  {
    period: '2017 — 2018',
    role: 'Data Scientist / Software Developer',
    company: 'Quental',
    logo: quentalLogo,

    projects: [
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: 'Data & Machine Learning',
        description:
          'Participation in data and machine learning projects within the financial sector.',
        technologies: [
          'Python',
          'SQL',
          'R',
          'Machine Learning',
          'Data Mining'
        ]
      }
    ],

    description:
      'Worked on data-driven projects in financial environments, combining analytical techniques with software development and data processing.'
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

      <p class="experience-intro">
        More than 7 years of experience working on software engineering,
        data and automation projects within enterprise and financial
        environments.
      </p>

      <div class="experience-list">

        <article
          v-for="experience in experiences"
          :key="`${experience.company}-${experience.period}`"
          class="experience-item"
        >

          <div class="experience-period">
            {{ experience.period }}
          </div>

          <div class="experience-info">

            <!-- <h2>
              {{ experience.role }}
            </h2>

            <div class="experience-company">
              {{ experience.company }}
            </div> -->


            <div class="company-header">

              <!-- <div class="company-logo">
                <img
                  :src="experience.logo"
                  :alt="`${experience.company} logo`"
                />
              </div> -->

              <div class="company-logo">
              <img
                v-if="experience.logo"
                :src="experience.logo"
                :alt="`${experience.company} logo`"
              />

              <span
                v-else
                class="future-heart"
              >
                ❤
              </span>
            </div>

              <div>
                <h2>
                  {{ experience.role }}
                </h2>

                <div class="experience-company">
                  {{ experience.company }}
                </div>
              </div>

            </div>

            <p class="experience-description">
              {{ experience.description }}
            </p>

            <div class="projects">

              <div
                v-for="project in experience.projects"
                :key="`${project.client}-${project.title}`"
                class="project"
              >

                <!-- <div class="project-header">
                  <span class="project-client">
                    {{ project.client }}
                  </span>

                  <span class="project-title">
                    {{ project.title }}
                  </span>
                </div> -->

                <div class="project-header">

                  <div class="project-client-wrapper">

                    <div class="project-logo">
                      <img
                        :src="project.logo"
                        :alt="`${project.client} logo`"
                      />
                    </div>

                    <span class="project-client">
                      {{ project.client }}
                    </span>

                  </div>

                  <span class="project-title">
                    {{ project.title }}
                  </span>

                </div>

                <p>
                  {{ project.description }}
                </p>

                <div class="technology-list">

                  <span
                    v-for="technology in project.technologies"
                    :key="technology"
                  >
                    {{ technology }}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>

<style src="./Experience.css" scoped></style>