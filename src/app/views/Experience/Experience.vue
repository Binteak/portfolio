<script setup>
import { computed } from 'vue'
import { lang } from '../../../i18n'

import eyLogo from '../../../assets/logos/ey.jpg'
import quentalLogo from '../../../assets/logos/quental.jpg'
import santanderLogo from '../../../assets/logos/santander.jpg'
import bbvaLogo from '../../../assets/logos/bbva.jpg'
import liberbankLogo from '../../../assets/logos/liberbank.jpg'

// Textos bilingües: { en, es }. Los campos sin traducir son iguales en ambos idiomas.
const experienceList = [
  {
    period: { en: 'FUTURE', es: 'FUTURO' },
    role: { en: 'Maybe you?', es: '¿Quizá tú?' },
    company: { en: 'Let’s work together', es: 'Trabajemos juntos' },
    logo: null,
    projects: [],
    description: {
      en: 'Looking for the next challenge: a Full Stack role (Angular · Python) where I can also apply LLMs and AI agents to real products.',
      es: 'Busco el siguiente reto: un puesto Full Stack (Angular · Python) en el que también pueda aplicar LLMs y agentes de IA a productos reales.'
    }
  },
  {
    period: { en: '2018 — 2026', es: '2018 — 2026' },
    role: {
      en: 'Senior Software Developer IV / Full Stack Developer',
      es: 'Senior Software Developer IV / Full Stack Developer'
    },
    company: { en: 'Ernst & Young (EY)', es: 'Ernst & Young (EY)' },
    logo: eyLogo,

    projects: [
      {
        client: 'BBVA',
        logo: bbvaLogo,
        title: {
          en: 'Audit Automation & Reporting · Tech Lead',
          es: 'Automatización de auditoría y reporting · Tech Lead'
        },
        description: {
          en: 'End-to-end automation of the EY audit process, cutting a week of manual work down to between 6 hours and 1 day depending on volume: from partitioned Parquet files in AWS ADA to the final Power BI reporting. Python, PySpark and DuckDB pipelines (chunk-based processing) build the master tables by year, month and country with full traceability, including a Sankey diagram of credit risk migration across Stages 1, 2 and 3. Direct contact with BBVA in follow-up meetings, definition of the technical solution and supervision of an intern.',
          es: 'Automatización de extremo a extremo del proceso de auditoría de EY, que pasó de una semana de trabajo manual a entre 6 horas y 1 día según el volumen: de los Parquet particionados en AWS ADA al reporting final en Power BI. Pipelines con Python, PySpark y DuckDB (procesamiento por chunks) que construyen las tablas maestras por año, mes y país con trazabilidad completa, incluido un diagrama Sankey de migración de riesgo de crédito entre Stage 1, 2 y 3. Interlocución con BBVA en reuniones de seguimiento, definición de la solución técnica y supervisión de un becario.'
        },
        technologies: ['Python', 'PySpark', 'DuckDB', 'Parquet', 'AWS', 'Power BI', 'SQL']
      },
      {
        client: 'EY',
        logo: eyLogo,
        title: {
          en: 'AI Agent Solution Design · Internal project',
          es: 'Diseño de soluciones con agentes de IA · Proyecto interno'
        },
        description: {
          en: 'Six-month internal project defining agentic AI use cases for EY clients together with the Project Manager: what the person does today, which tasks an agent could take on, how to implement it and which models or agent types to use. Built a Python prototype for one of them that calculates credit risk metrics (PD, LGD, EAD) from input data and EBA technical documentation and generates the report automatically. Coordinated with several teams and the AI Department to gather technical context.',
          es: 'Proyecto interno de seis meses definiendo, junto al Project Manager, casos de uso de IA agéntica para clientes de EY: qué hace hoy la persona, qué tareas podría asumir un agente, cómo implantarlo y qué modelos o tipos de agente usar. Desarrollé en Python un prototipo de uno de ellos que calcula métricas de riesgo de crédito (PD, LGD, EAD) a partir de los datos de entrada y la documentación técnica de la EBA y genera el reporte automáticamente. Coordinación con varios equipos y con el Departamento de IA para recoger el contexto técnico.'
        },
        technologies: ['Python', 'LLMs', 'AI Agents', 'Credit Risk', 'EBA']
      },
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: {
          en: 'Application Modernisation · Tech Lead (Full Stack + DevOps)',
          es: 'Modernización de aplicaciones · Tech Lead (Full Stack + DevOps)'
        },
        description: {
          en: 'Put into production on Red Hat OpenShift, in record time, two frontends migrated from JavaScript/Bootstrap and Django to Angular 18+ and FastAPI, taking on the DevOps role that did not exist in the project. Component-based architecture (frontend, backend, API Gateway and ConfigMaps) on the corporate Gluon framework, CI/CD pipelines with GitHub Actions (SonarQube analysis, build and Docker image published to Nexus) and secrets injected from Secret Vault. Raised frontend unit test coverage from zero to 85–90%, passing the SonarQube Quality Gate with no critical issues. Login with Microsoft Entra ID via OAuth 2.0 / OpenID Connect.',
          es: 'Puesta en producción en Red Hat OpenShift, en tiempo récord, de dos frontends migrados de JavaScript/Bootstrap y Django a Angular 18+ y FastAPI, asumiendo el rol DevOps que no existía en el proyecto. Arquitectura por componentes (frontend, backend, API Gateway y ConfigMaps) sobre el framework corporativo Gluon, pipelines CI/CD con GitHub Actions (análisis SonarQube, build e imagen Docker publicada en Nexus) y secretos inyectados desde Secret Vault. Cobertura de tests unitarios del frontend de cero a un 85–90%, superando el Quality Gate de SonarQube sin incidencias críticas. Login con Microsoft Entra ID mediante OAuth 2.0 / OpenID Connect.'
        },
        technologies: ['Angular', 'FastAPI', 'Red Hat OpenShift', 'GitHub Actions', 'Docker', 'SonarQube', 'OAuth 2.0 / OIDC', 'Gluon']
      },
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: {
          en: 'Credit Risk & EBA Regulatory · Tech Lead & Team Lead',
          es: 'Riesgo de crédito y regulación EBA · Tech Lead y Team Lead'
        },
        description: {
          en: 'Four years building three internal web applications for Credit Risk and EBA regulatory reporting (two in Angular, one in Vue) with Django REST Framework on Oracle, including automated generation of the official EBA reporting templates. Tech Lead for two years and Team Lead of a three-person team for one year: sprints, roadmap and communication with the Product Owner and stakeholders. Quality ensured through unit testing, code coverage, SonarQube and Fortify in the CI/CD cycle.',
          es: 'Cuatro años desarrollando tres aplicaciones web internas de riesgo de crédito y reporting regulatorio EBA (dos en Angular y una en Vue) con Django REST Framework sobre Oracle, incluida la generación automática de las plantillas oficiales de reporting EBA. Tech Lead durante dos años y Team Lead de un equipo de tres personas durante uno: sprints, roadmap e interlocución con el Product Owner y los stakeholders. Calidad asegurada con testing unitario, code coverage, SonarQube y Fortify en el ciclo CI/CD.'
        },
        technologies: ['Angular', 'Vue', 'Python', 'Django REST Framework', 'Oracle', 'SonarQube', 'Fortify']
      },
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: { en: 'Climate Risk', es: 'Riesgo climático' },
        description: {
          en: 'Automation of Climate Risk processes with Python, PySpark and Oracle.',
          es: 'Automatización de procesos de riesgo climático con Python, PySpark y Oracle.'
        },
        technologies: ['Python', 'PySpark', 'Oracle']
      },
      {
        client: 'Liberbank',
        logo: liberbankLogo,
        title: { en: 'Liberbank – Unicaja Integration', es: 'Integración Liberbank – Unicaja' },
        description: {
          en: 'Data integration and credit scoring models with SAS and SQL as part of the Liberbank and Unicaja merger.',
          es: 'Integración de datos y modelos de credit scoring con SAS y SQL dentro de la fusión de Liberbank y Unicaja.'
        },
        technologies: ['SAS', 'SQL', 'Credit Scoring']
      }
    ],

    description: {
      en: 'Eight years building software, data and automation solutions for BBVA, Banco Santander and Liberbank, as developer, Tech Lead and Team Lead.',
      es: 'Ocho años construyendo soluciones de software, datos y automatización para BBVA, Banco Santander y Liberbank, como desarrollador, Tech Lead y Team Lead.'
    }
  },

  {
    period: { en: '2017 — 2018', es: '2017 — 2018' },
    role: { en: 'Junior Data Scientist', es: 'Junior Data Scientist' },
    company: { en: 'Quental Technologies', es: 'Quental Technologies' },
    logo: quentalLogo,

    projects: [
      {
        client: 'Banco Santander',
        logo: santanderLogo,
        title: {
          en: 'Innovation Department · Machine Learning',
          es: 'Departamento de Innovación · Machine Learning'
        },
        description: {
          en: 'Full Machine Learning cycle (data cleaning, training, evaluation and visualisation) in R and Python: anti-money laundering detection models, document verification through signature analysis, and clustering and classification for customer segmentation.',
          es: 'Ciclo completo de Machine Learning (limpieza de datos, entrenamiento, evaluación y visualización) en R y Python: modelos de detección de blanqueo de capitales, verificación de documentos mediante análisis de firmas y clustering y clasificación para segmentación de clientes.'
        },
        technologies: ['Python', 'R', 'Machine Learning', 'Clustering', 'Classification']
      }
    ],

    description: {
      en: 'Started my career in data science, working on Machine Learning projects for the banking sector.',
      es: 'Empecé mi carrera en ciencia de datos, en proyectos de Machine Learning para el sector bancario.'
    }
  }
]

const content = {
  en: {
    label: 'EXPERIENCE',
    title: "Where I've",
    highlight: 'worked.',
    intro:
      '9 years building software, data and automation solutions for the banking sector, from the business case to production.',
    logo: 'logo'
  },
  es: {
    label: 'EXPERIENCIA',
    title: 'Dónde he',
    highlight: 'trabajado.',
    intro:
      'Nueve años construyendo soluciones de software, datos y automatización para el sector bancario, del caso de negocio a producción.',
    logo: 'logo'
  }
}

const c = computed(() => content[lang.value])

const experiences = computed(() =>
  experienceList.map((experience, index) => ({
    key: index,
    period: experience.period[lang.value],
    role: experience.role[lang.value],
    company: experience.company[lang.value],
    logo: experience.logo,
    description: experience.description[lang.value],
    projects: experience.projects.map((project, projectIndex) => ({
      key: projectIndex,
      client: project.client,
      logo: project.logo,
      title: project.title[lang.value],
      description: project.description[lang.value],
      technologies: project.technologies
    }))
  }))
)
</script>

<template>
  <section class="experience-page">

    <div class="experience-container">

      <div class="section-label">
        {{ c.label }}
      </div>

      <h1>
        {{ c.title }}
        <span>{{ c.highlight }}</span>
      </h1>

      <p class="experience-intro">
        {{ c.intro }}
      </p>

      <div class="experience-list">

        <article
          v-for="experience in experiences"
          :key="experience.key"
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
                :key="project.key"
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