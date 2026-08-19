<script setup>
import { ref } from 'vue'

import Navbar from './app/components/Navbar/Navbar.vue'
import Hero from './app/components/Hero/Hero.vue'

import About from './app/views/About/About.vue'
import TechStack from './app/views/TechStack/TechStack.vue'
import Experience from './app/views/Experience/Experience.vue'
import Projects from './app/views/Projects/Projects.vue'
import Contact from './app/views/Contact/Contact.vue'

const pages = [
  'home',
  'about',
  'techstack',
  'experience',
  'projects',
  'contact'
]

const currentPage = ref('home')

const changePage = (page) => {
  currentPage.value = page
}

const nextPage = () => {
  const currentIndex = pages.indexOf(currentPage.value)

  if (currentIndex < pages.length - 1) {
    currentPage.value = pages[currentIndex + 1]
  }
}

const previousPage = () => {
  const currentIndex = pages.indexOf(currentPage.value)

  if (currentIndex > 0) {
    currentPage.value = pages[currentIndex - 1]
  }
}
</script>

<template>
  <div class="app">

    <!-- Background -->
    <div class="background-glow background-glow-one"></div>
    <div class="background-glow background-glow-two"></div>
    <div class="grid"></div>

    <!-- Navbar -->
    <Navbar @navigate="changePage" />

    <!-- Pages -->
    <main class="page-container">

      <Hero v-if="currentPage === 'home'" />

      <About v-else-if="currentPage === 'about'" />

      <TechStack v-else-if="currentPage === 'techstack'" />

      <Experience v-else-if="currentPage === 'experience'" />

      <Projects v-else-if="currentPage === 'projects'" />

      <Contact v-else-if="currentPage === 'contact'" />

    </main>

    <!-- Navigation dots -->
    <div class="page-dots">

      <button
        v-for="page in pages"
        :key="page"
        class="page-dot"
        :class="{ active: currentPage === page }"
        @click="changePage(page)"
        :aria-label="`Go to ${page}`"
      ></button>

    </div>

  </div>
</template>

<style scoped>
.page-container {
  position: relative;
  z-index: 2;

  width: 100%;
  min-height: 100vh;
}

.page-dots {
  position: fixed;

  z-index: 1001;

  bottom: 30px;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 9px;

  padding: 10px 14px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;

  background: rgba(7, 7, 10, 0.65);

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.page-dot {
  width: 7px;
  height: 7px;

  padding: 0;

  border: none;
  border-radius: 50%;

  background: rgba(167, 139, 250, 0.35);

  cursor: pointer;

  transition:
    width 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.page-dot:hover {
  background: rgba(167, 139, 250, 0.7);

  transform: scale(1.2);
}

.page-dot.active {
  width: 9px;
  height: 9px;

  background: #8b5cf6;

  box-shadow:
    0 0 10px rgba(139, 92, 246, 0.8),
    0 0 20px rgba(139, 92, 246, 0.35);
}

@media (max-width: 500px) {
  .page-dots {
    bottom: 20px;
  }
}
</style>