<script setup>
const props = defineProps({
  currentPage: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['navigate'])
</script>

<template>
  <nav class="navbar">

    <!-- Logo -->
    <button
      class="logo"
      @click="emit('navigate', 'home')"
    >
      Portfolio<span>.</span>
    </button>

    <!-- Links -->
    <div class="nav-links">

      <button
        :class="{ active: currentPage === 'about' }"
        @click="emit('navigate', 'about')"
      >
        About
      </button>

      <button
        :class="{ active: currentPage === 'techstack' }"
        @click="emit('navigate', 'techstack')"
      >
        Tech Stack
      </button>

      <button
        :class="{ active: currentPage === 'experience' }"
        @click="emit('navigate', 'experience')"
      >
        Experience
      </button>

      <button
        :class="{ active: currentPage === 'projects' }"
        @click="emit('navigate', 'projects')"
      >
        Projects
      </button>

    </div>

    <!-- Contact -->
    <button
  class="nav-button"
  :class="{ active: currentPage === 'contact' }"
  @click="emit('navigate', 'contact')"
>
  Contact
  <span>→</span>
</button>

  </nav>
</template>

<style src="./Navbar.css" scoped></style>