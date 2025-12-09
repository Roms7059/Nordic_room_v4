<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
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