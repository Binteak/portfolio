<script setup>
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
        @click="emit('navigate', 'about')"
      >
        About
      </button>

      <button
        @click="emit('navigate', 'techstack')"
      >
        Tech Stack
      </button>

      <button
        @click="emit('navigate', 'experience')"
      >
        Experience
      </button>

      <button
        @click="emit('navigate', 'projects')"
      >
        Projects
      </button>

    </div>

    <!-- Contact -->
    <button
      class="nav-button"
      @click="emit('navigate', 'contact')"
    >
      Contact <span>→</span>
    </button>

  </nav>
</template>

<style src="./Navbar.css" scoped></style>