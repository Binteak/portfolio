<script setup>
import profileImage from '../../../assets/images/profile.jpeg'
</script>

<template>
  <section class="hero">

    <div class="hero-content">

      <div class="status">
        <span class="status-dot"></span>
        Available for new opportunities
      </div>

      <h1>
        Álvaro Ruiz
        <span class="gradient-text">Ramírez.</span>
      </h1>

      <h2>
        Full-Stack Developer
      </h2>

      <p class="hero-description">
        I build modern digital experiences combining
        clean interfaces, solid architecture and
        data-driven solutions.
      </p>

      <div class="hero-actions">

        <a href="#about" class="primary-button">
          About me
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
        Building things with code
      </div>

    </div>

  </section>
</template>

<style src="./Hero.css" scoped></style>