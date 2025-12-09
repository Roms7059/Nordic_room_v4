<script setup lang="ts">
import FeaturedProject from '../components/FeaturedProject.vue'
import SocialLinks from '../components/SocialLinks.vue'
import { useProjectStore } from '../stores/projects'
import { storeToRefs } from 'pinia'

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)

const featuredProjects = projects.value.slice(0, 2); // Get the first two projects from the store
</script>

<template>
  <div>
    <section class="hero content-card">
      <h1 class="page-title">Aurélien Bouchet: Sound Designer & Ingénieur du Son</h1>
      <p class="hero-text">
        Passionné par la création d'ambiances sonores qui donnent vie aux images et aux émotions. 
        Spécialisé en sound design, mixage, et son à l'image, avec une expertise sur Pro Tools (101 - 110 - 201 | 210 M | 210 P | 205 - 210 D). 
        Découvrez un univers où chaque son compte.
      </p>
      <SocialLinks />
    </section>

    <section class="latest-works">
      <h2>Projets Récents</h2>
      <div class="projects-grid">
        <FeaturedProject 
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-text {
  max-width: 800px;
  margin: 2rem auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
}

.latest-works {
  margin-top: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

h2 {
  color: var(--text-color);
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
}
</style>