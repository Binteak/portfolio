<script setup>
import { ref } from 'vue'

const props = defineProps({
  currentPage: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['navigate'])

const menuOpen = ref(false)

function navigate(page) {
  emit('navigate', page)
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="navbar">

    <!-- =====================================================
         LOGO
    ====================================================== -->

    <button
      class="logo"
      @click="navigate('home')"
    >
      Portfolio<span>.</span>
    </button>


    <!-- =====================================================
         DESKTOP LINKS
    ====================================================== -->

    <div class="nav-links">

      <button
        :class="{ active: currentPage === 'about' }"
        @click="navigate('about')"
      >
        About
      </button>

      <button
        :class="{ active: currentPage === 'techstack' }"
        @click="navigate('techstack')"
      >
        Tech Stack
      </button>

      <button
        :class="{ active: currentPage === 'experience' }"
        @click="navigate('experience')"
      >
        Experience
      </button>

      <button
        :class="{ active: currentPage === 'projects' }"
        @click="navigate('projects')"
      >
        Projects
      </button>

    </div>


    <!-- =====================================================
         DESKTOP CONTACT
    ====================================================== -->

    <button
      class="nav-button"
      :class="{ active: currentPage === 'contact' }"
      @click="navigate('contact')"
    >
      Contact
      <span>→</span>
    </button>


    <!-- =====================================================
         MOBILE MENU BUTTON
    ====================================================== -->

    <button
      class="menu-toggle"
      :class="{ open: menuOpen }"
      @click="toggleMenu"
      aria-label="Toggle navigation menu"
      :aria-expanded="menuOpen"
    >

      <span></span>
      <span></span>
      <span></span>

    </button>


    <!-- =====================================================
         MOBILE MENU
    ====================================================== -->

    <div
      v-if="menuOpen"
      class="mobile-menu"
    >

      <button
        :class="{ active: currentPage === 'about' }"
        @click="navigate('about')"
      >
        About
      </button>

      <button
        :class="{ active: currentPage === 'techstack' }"
        @click="navigate('techstack')"
      >
        Tech Stack
      </button>

      <button
        :class="{ active: currentPage === 'experience' }"
        @click="navigate('experience')"
      >
        Experience
      </button>

      <button
        :class="{ active: currentPage === 'projects' }"
        @click="navigate('projects')"
      >
        Projects
      </button>

      <button
        class="mobile-contact"
        :class="{ active: currentPage === 'contact' }"
        @click="navigate('contact')"
      >
        Contact
        <span>→</span>
      </button>

    </div>

  </nav>
</template>


<style src="./Navbar.css" scoped></style>