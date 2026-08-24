<!-- <script setup>
import profileImage from '../../../assets/images/profile.jpeg'
</script> -->

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import profileImage from '../../../assets/images/profile.jpeg'

defineEmits(['navigate'])

const profileTags = [
    '#TechLeadership',
  '#FullStack',
  '#Data',
  '#Automation',
  '#ProblemSolving'
]

const currentTag = ref(0)
let tagInterval

onMounted(() => {
  tagInterval = setInterval(() => {
    currentTag.value = (currentTag.value + 1) % profileTags.length
  }, 2500)
})

onUnmounted(() => {
  clearInterval(tagInterval)
})
</script>

<template>
  <!-- <br> -->
  <!-- <br> -->
  <section class="hero">

    <div class="hero-content">

      <div class="status">
        <span class="status-dot"></span>
        Available for new opportunities
      </div>

      <!-- <h1>
        Álvaro Ruiz
        <span class="gradient-text">Ramírez.</span>
      </h1> -->
      <div class="hero-mobile-title">

  <h1>
    Álvaro Ruiz
    <span class="gradient-text">Ramírez.</span>
  </h1>

  <div class="hero-mobile-profile">
    <div class="profile-glow"></div>

    <div class="profile-frame">
      <img
        :src="profileImage"
        alt="Álvaro Ruiz Ramírez"
      />
    </div>
  </div>

</div>
   
 

      <h2>
        Senior Full Stack Developer · Software Engineering · Data & Automation
      </h2>

      <p class="hero-description">
        I build and lead end-to-end technology solutions across
  software engineering, data, automation and cloud, combining
  hands-on development with technical leadership and
  business-driven problem solving.
      </p>

      <!-- <div class="hero-actions">

        <a href="#about" class="primary-button">
          More About me ?
          <span>↓</span>
        </a>

        <a
          href="https://github.com/Binteak"
          target="_blank"
          rel="noopener noreferrer"
          class="secondary-button"
        >
          GitHub
          <span>↗</span>
        </a>

      </div> -->
<div class="hero-actions">

  <!-- About -->
  <button
    class="primary-button"
    @click="$emit('navigate', 'about')"
  >
    More About me
    <!-- <span>↓</span> -->
  </button>

  <!-- GitHub -->
  <a
    href="https://github.com/Binteak"
    target="_blank"
    rel="noopener noreferrer"
    class="social-button"
    aria-label="GitHub"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
    >
      <path
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.4 7.88 10.92.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>

    GitHub
  </a>


  <!-- Email -->
<a
  href="mailto:alruizra93@gmail.com"
  class="social-button"
  aria-label="Email"
  title="Email"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>

  Email
</a>

</div>

    </div>

    <div class="hero-profile">

      <div class="profile-glow"></div>

      <div class="profile-frame">
        <img
          :src="profileImage"
          alt="Álvaro Ruiz Ramírez"
        />
      </div>

      <div class="profile-badge">
  <span></span>

  <Transition name="tag-fade" mode="out-in">
    <span
      :key="profileTags[currentTag]"
      class="profile-tag"
    >
      {{ profileTags[currentTag] }}
    </span>
  </Transition>
</div>

    </div>

  </section>
</template>

<style src="./Hero.css" scoped></style>