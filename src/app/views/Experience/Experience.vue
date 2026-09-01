<script setup>

import eyLogo from '../../../assets/logos/ey.jpg'
import quentalLogo from '../../../assets/logos/quental.jpg'
import santanderLogo from '../../../assets/logos/santander.jpg'
import bbvaLogo from '../../../assets/logos/bbva.jpg'
import liberbankLogo from '../../../assets/logos/liberbank.jpg'


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
          'Development of internal Full Stack applications for credit risk and EBA regulatory reporting, working with critical financial processes and enterprise environments. Successfully delivered three applications across four consecutive regulatory cycles, leading a team of three people for one year.',
        technologies: [
          'Vue',
          'Python',
          'Django REST Framework',
          'Angular',
          'SQL',
          'Oracle',
        ]
      },

      {
  client: 'BBVA',
  logo: bbvaLogo,
  title: 'Backstop Audit Automation',
  description:
    'Development and automation of audit processes for the Backstop regulatory framework, using Python and PySpark to process and transform large datasets. Worked within BBVA’s AWS ADA environment to access and process data, reducing manual effort and improving the efficiency and traceability of audit workflows.',
  technologies: [
    'Python',
    'PySpark',
    'FastAPI',
    'Angular',
    'SQL',
    'AWS',
    'Automation'
  ]
},
    {
  client: 'BBVA',
  logo: bbvaLogo,
  title: 'Audit Reporting & Power BI',
  description:
    'Development of data processing and reporting solutions for audit activities, working with data from BBVA’s AWS ADA environment and using PySpark to transform and analyse datasets before generating Power BI dashboards and visualisations for audit analysis and decision-making.',
  technologies: [
    'Python',
    'PySpark',
    'Power BI',
    'AWS',
    'SQL',
    'Data Processing',
    'Data Visualisation'
  ]
},
      {
  client: 'Banco Santander',
  logo: santanderLogo,
  title: 'Application Modernisation',
  description:
    'Modernisation of existing applications, migrating frontend components to newer Angular versions and developing new backend services with Python and FastAPI. Worked with Databricks for data processing and followed the project CI/CD process through pull requests, Gluon-based component templates, SonarQube and Fortify quality checks, container image generation and deployment management on Red Hat OpenShift. Also worked with application secrets and environment configuration within OpenShift workflows.',
  technologies: [
    'Angular',
    'Python',
    'FastAPI',
    'Databricks',
    'Red Hat OpenShift',
    'Gluon',
    'SonarQube',
    'Fortify',
    'CI/CD'
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
          'Oracle',
          'Data Processing'
        ]
      },

 
      {
        client: 'Liberbank',
        logo: liberbankLogo,
        title: 'Liberbank – Unicaja Integration',
        description:
          'Development of credit scoring models using SAS as part of the technological and data integration activities related to the Liberbank and Unicaja merger, supporting the integration of banking systems and credit risk processes.',
        technologies: [
          'SAS',
          'Credit Risk',
          'Scoring',
          'Banking Integration'
        ]
      },
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