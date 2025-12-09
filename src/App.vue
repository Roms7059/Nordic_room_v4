<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'
import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = ref({
  background: {
    color: 'transparent',
  },
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: '#FF8C00', // accent color
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      out_mode: 'out',
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: false,
      },
      onClick: {
        enable: false,
      },
    },
  },
});
</script>

<template>
  <Particles id="tsparticles" :options="options" />
  <nav class="nav-menu">
    <ul>
      <li><RouterLink to="/">Accueil</RouterLink></li>
      <li><RouterLink to="/bio">Bio</RouterLink></li>
      <li><RouterLink to="/projects">Projets</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>