<script setup>

import profileImage from '../../../assets/images/profile.jpeg'

</script>

<template>
  <section class="contact-page">

    <div class="contact-container">

      <div class="contact-content">

        <div class="section-label">
          CONTACT
        </div>

        <h1>
          Let's build something
          <span>great.</span>
        </h1>

        <p>
          Open to new opportunities, collaborations and interesting projects.
        </p>

        <div class="connect-text">
          <span class="connect-dot"></span>
          Let's connect.
        </div>

        <div class="contact-actions">

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/alvaroruizramirez/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-button"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1v11.45z"
              />
            </svg>
          </a>

          <!-- Gmail -->
        <a
  href="mailto:alruizra93@gmail.com"
  class="social-button"
  aria-label="Email"
  title="Email"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
</a>

        </div>

      </div>


      <!-- PROFILE -->
      <div class="contact-profile">

        <div class="contact-profile-glow"></div>

        <div class="contact-profile-frame">
          <img
            :src="profileImage"
            alt="Profile photo"
          />
        </div>

      </div>

    </div>

  </section>
</template>

<style src="./Contact.css" scoped></style>