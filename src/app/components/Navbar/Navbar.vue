<script setup>
import { ref, computed } from 'vue'
import { lang, setLang } from '../../../i18n'

const props = defineProps({
  currentPage: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['navigate'])

const menuOpen = ref(false)

const content = {
  en: {
    about: 'About',
    techstack: 'Tech Stack',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    toggleMenu: 'Toggle navigation menu',
    language: 'Language'
  },
  es: {
    about: 'Sobre mí',
    techstack: 'Tecnologías',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    toggleMenu: 'Abrir o cerrar el menú',
    language: 'Idioma'
  }
}

const c = computed(() => content[lang.value])

const links = ['about', 'techstack', 'experience', 'projects']

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
      ARR<span>.</span>
    </button>


    <!-- =====================================================
         DESKTOP LINKS
    ====================================================== -->

    <div class="nav-links">

      <button
        v-for="link in links"
        :key="link"
        :class="{ active: currentPage === link }"
        @click="navigate(link)"
      >
        {{ c[link] }}
      </button>

    </div>


    <!-- =====================================================
         RIGHT SIDE: LANGUAGE + CONTACT + MOBILE MENU BUTTON
    ====================================================== -->

    <div class="nav-right">

      <div
        class="lang-switch"
        role="group"
        :aria-label="c.language"
      >
        <button
          :class="{ active: lang === 'en' }"
          :aria-pressed="lang === 'en'"
          @click="setLang('en')"
        >
          EN
        </button>
        <button
          :class="{ active: lang === 'es' }"
          :aria-pressed="lang === 'es'"
          @click="setLang('es')"
        >
          ES
        </button>
      </div>

      <button
        class="nav-button"
        :class="{ active: currentPage === 'contact' }"
        @click="navigate('contact')"
      >
        {{ c.contact }}
        <span>→</span>
      </button>

      <button
        class="menu-toggle"
        :class="{ open: menuOpen }"
        @click="toggleMenu"
        :aria-label="c.toggleMenu"
        :aria-expanded="menuOpen"
      >

        <span></span>
        <span></span>
        <span></span>

      </button>

    </div>


    <!-- =====================================================
         MOBILE MENU
    ====================================================== -->

    <div
      v-if="menuOpen"
      class="mobile-menu"
    >

      <button
        v-for="link in links"
        :key="link"
        :class="{ active: currentPage === link }"
        @click="navigate(link)"
      >
        {{ c[link] }}
      </button>

      <button
        class="mobile-contact"
        :class="{ active: currentPage === 'contact' }"
        @click="navigate('contact')"
      >
        {{ c.contact }}
        <span>→</span>
      </button>

    </div>

  </nav>
</template>


<style src="./Navbar.css" scoped></style>
