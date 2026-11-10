<script setup>
import { computed } from 'vue'
import { lang } from '../../../i18n'

const content = {
  en: {
    label: 'ABOUT ME',
    title: 'Building software',
    highlight: 'with purpose.',
    intro:
      'Senior Full Stack Developer with 9 years in the banking sector, building products end to end, from the business case to production. With a degree in Statistics and Business, I started as a Data Scientist and spent 8 years at EY working for BBVA, Banco Santander and Liberbank: Angular and Vue applications with Python backends, data pipelines on AWS and deployments on OpenShift with CI/CD.',
    whoTitle: 'Who I am',
    who:
      "A Full Stack Developer (Angular · Python) who combines hands-on engineering with technical leadership. I've worked as Tech Lead and Team Lead, dealing directly with clients, and I enjoy turning complex requirements into reliable software.",
    whatTitle: 'What I do',
    what:
      "I design and build complete solutions: data, APIs, interfaces and deployment. Lately I've been applying LLMs in my own projects, such as an AI agent with tool use and RAG over its own knowledge base (Claude or Gemini) and a document extraction tool, both containerised and deployed with CI/CD.",
    specialized: 'SPECIALIZED IN',
    specializations: [
      { icon: '</>', title: 'Full Stack', text: 'Angular, Vue, TypeScript, Python, FastAPI & Django' },
      { icon: '◈', title: 'Data & Analytics', text: 'PySpark, DuckDB, Databricks, AWS & Power BI' },
      { icon: '◉', title: 'Banking & Regulatory', text: 'Credit Risk, EBA Reporting & Audit Automation' },
      { icon: '⚙', title: 'DevOps & Quality', text: 'Docker, Kubernetes, OpenShift, GitHub Actions & SonarQube' }
    ],
    beyond: 'BEYOND THE CODE',
    beyond1:
      'I enjoy working at the intersection of technology, business and people: understanding the problem, structuring the solution and helping the team deliver it.',
    beyond2:
      "I've led teams, planned sprints and roadmaps, mentored junior profiles and worked side by side with Product Owners and stakeholders in demanding enterprise environments."
  },
  es: {
    label: 'SOBRE MÍ',
    title: 'Software hecho',
    highlight: 'con propósito.',
    intro:
      'Senior Full Stack Developer con 9 años en el sector bancario, construyendo productos de principio a fin, del caso de negocio a producción. Graduado en Estadística y Empresa, empecé como Data Scientist y he pasado 8 años en EY trabajando para BBVA, Banco Santander y Liberbank: aplicaciones Angular y Vue con backends en Python, pipelines de datos en AWS y despliegues en OpenShift con CI/CD.',
    whoTitle: 'Quién soy',
    who:
      'Un Full Stack Developer (Angular · Python) que combina el desarrollo con el liderazgo técnico. He sido Tech Lead y Team Lead, con trato directo con cliente, y disfruto convirtiendo requisitos complejos en software fiable.',
    whatTitle: 'Qué hago',
    what:
      'Diseño y construyo soluciones completas: datos, APIs, interfaces y despliegue. Últimamente aplico LLMs en proyectos propios, como un agente de IA con tool use y RAG sobre una base de conocimiento propia (Claude o Gemini) y una herramienta de extracción de documentos, ambos en contenedores y desplegados con CI/CD.',
    specialized: 'ESPECIALIZADO EN',
    specializations: [
      { icon: '</>', title: 'Full Stack', text: 'Angular, Vue, TypeScript, Python, FastAPI y Django' },
      { icon: '◈', title: 'Datos y analítica', text: 'PySpark, DuckDB, Databricks, AWS y Power BI' },
      { icon: '◉', title: 'Banca y regulación', text: 'Riesgo de crédito, reporting EBA y automatización de auditoría' },
      { icon: '⚙', title: 'DevOps y calidad', text: 'Docker, Kubernetes, OpenShift, GitHub Actions y SonarQube' }
    ],
    beyond: 'MÁS ALLÁ DEL CÓDIGO',
    beyond1:
      'Me gusta trabajar donde se cruzan la tecnología, el negocio y las personas: entender el problema, estructurar la solución y ayudar al equipo a entregarla.',
    beyond2:
      'He liderado equipos, planificado sprints y roadmaps, acompañado a perfiles junior y trabajado codo con codo con Product Owners y stakeholders en entornos corporativos exigentes.'
  }
}

const c = computed(() => content[lang.value])
</script>

<template>
  <section class="about-page">

    <div class="about-container">

      <!-- HEADER -->

      <div class="section-label">
        {{ c.label }}
      </div>

      <h1>
        {{ c.title }}
        <span>{{ c.highlight }}</span>
      </h1>

      <p class="about-description">
        {{ c.intro }}
      </p>


      <!-- MAIN CARDS -->

      <div class="about-content">

        <div class="about-card">

          <div class="card-number">
            01
          </div>

          <h3>
            {{ c.whoTitle }}
          </h3>

          <p>
            {{ c.who }}
          </p>

        </div>


        <div class="about-card">

          <div class="card-number">
            02
          </div>

          <h3>
            {{ c.whatTitle }}
          </h3>

          <p>
            {{ c.what }}
          </p>

        </div>

      </div>


      <!-- SPECIALIZATIONS -->

      <div class="specializations">

        <div class="section-label small-label">
          {{ c.specialized }}
        </div>

        <div class="specialization-grid">

          <div
            v-for="item in c.specializations"
            :key="item.icon"
            class="specialization"
          >
            <span class="specialization-icon">
              {{ item.icon }}
            </span>

            <div>
              <strong>{{ item.title }}</strong>
              <p>
                {{ item.text }}
              </p>
            </div>
          </div>

        </div>

      </div>


      <!-- BEYOND THE CODE -->

      <div class="about-footer">

        <div class="section-label">
          {{ c.beyond }}
        </div>

        <p>
          {{ c.beyond1 }}
        </p>
 <br>
  <p>
          {{ c.beyond2 }}
        </p>

      
      </div>

    </div>



  </section>
</template>

<style src="./About.css" scoped></style>