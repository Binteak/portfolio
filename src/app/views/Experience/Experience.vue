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
      'Looking for the next challenge: a Full Stack role (Angular · Python) where I can also apply LLMs and AI agents to real products.'
  },
  {
    period: '2018 — 2026',
    role: 'Senior Software Developer IV / Full Stack Developer',
    company: 'Ernst & Young (EY)',
    logo: eyLogo,

    projects: [
      {
        client: 'BBVA',
        logo: bbvaLogo,
        title: 'Audit Automation & Reporting · Tech Lead',
        description:
          'End-to-end automation of the EY audit process, cutting a week of manual work down to between 6 hours and 1 day depending on volume: from partitioned Parquet files in AWS ADA to the final Power BI reporting. Python, PySpark and DuckDB pipelines (chunk-based processing) build the master tables by year, month and country with full traceability, including a Sankey diagram of credit risk migration across Stages 1, 2 and 3. Direct contact with BBVA in follow-up meetings, definition of the technical solution and supervision of an intern.',
        technologies: [
          'Python',
          'PySpark',
          'DuckDB',
          'Parquet',
          'AWS',
          'Power BI',
          'SQL'
        ]
      },
      {
        client: 'EY',
        logo: eyLogo,
        title: 'AI Agent Solution Design · Internal project',
        description:
          'Six-month internal project defining agentic AI use cases for EY clients together with the Project Manager: what the person does today, which tasks an agent could take on, how to implement it and which models or agent types to use. Built a Python prototype for one of them that calculates credit risk metrics (PD, LGD, EAD) from input data and EBA technical documentation and generates the report automatically. Coordinated with several teams and the AI Department to gather technical context.',
        technologies: [
          'Python',
          'LLMs',
          'AI Agents',
          'Credit Risk',
          'EBA'
        ]
      },
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: 'Application Modernisation · Tech Lead (Full Stack + DevOps)',
        description:
          'Put into production on Red Hat OpenShift, in record time, two frontends migrated from JavaScript/Bootstrap and Django to Angular 18+ and FastAPI, taking on the DevOps role that did not exist in the project. Component-based architecture (frontend, backend, API Gateway and ConfigMaps) on the corporate Gluon framework, CI/CD pipelines with GitHub Actions (SonarQube analysis, build and Docker image published to Nexus) and secrets injected from Secret Vault. Raised frontend unit test coverage from zero to 85–90%, passing the SonarQube Quality Gate with no critical issues. Login with Microsoft Entra ID via OAuth 2.0 / OpenID Connect.',
        technologies: [
          'Angular',
          'FastAPI',
          'Red Hat OpenShift',
          'GitHub Actions',
          'Docker',
          'SonarQube',
          'OAuth 2.0 / OIDC',
          'Gluon'
        ]
      },
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: 'Credit Risk & EBA Regulatory · Tech Lead & Team Lead',
        description:
          'Four years building three internal web applications for Credit Risk and EBA regulatory reporting (two in Angular, one in Vue) with Django REST Framework on Oracle, including automated generation of the official EBA reporting templates. Tech Lead for two years and Team Lead of a three-person team for one year: sprints, roadmap and communication with the Product Owner and stakeholders. Quality ensured through unit testing, code coverage, SonarQube and Fortify in the CI/CD cycle.',
        technologies: [
          'Angular',
          'Vue',
          'Python',
          'Django REST Framework',
          'Oracle',
          'SonarQube',
          'Fortify'
        ]
      },
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: 'Climate Risk',
        description:
          'Automation of Climate Risk processes with Python, PySpark and Oracle.',
        technologies: [
          'Python',
          'PySpark',
          'Oracle'
        ]
      },
      {
        client: 'Liberbank',
        logo: liberbankLogo,
        title: 'Liberbank – Unicaja Integration',
        description:
          'Data integration and credit scoring models with SAS and SQL as part of the Liberbank and Unicaja merger.',
        technologies: [
          'SAS',
          'SQL',
          'Credit Scoring'
        ]
      }
    ],

    description:
      'Eight years building software, data and automation solutions for BBVA, Banco Santander and Liberbank, as developer, Tech Lead and Team Lead.'
  },

  {
    period: '2017 — 2018',
    role: 'Junior Data Scientist',
    company: 'Quental Technologies',
    logo: quentalLogo,

    projects: [
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: 'Innovation Department · Machine Learning',
        description:
          'Full Machine Learning cycle (data cleaning, training, evaluation and visualisation) in R and Python: anti-money laundering detection models, document verification through signature analysis, and clustering and classification for customer segmentation.',
        technologies: [
          'Python',
          'R',
          'Machine Learning',
          'Clustering',
          'Classification'
        ]
      }
    ],

    description:
      'Started my career in data science, working on Machine Learning projects for the banking sector.'
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
        9 years building software, data and automation solutions for the
        banking sector, from the business case to production.
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