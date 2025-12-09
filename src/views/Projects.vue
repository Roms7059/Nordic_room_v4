<script setup lang="ts">
import { useProjectStore } from '../stores/projects'
import { storeToRefs } from 'pinia'

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)
</script>

<template>
  <div>
    <h1 class="page-title">Mes Créations</h1>
    <div class="projects-container">
      <div v-for="project in projects" :key="project.id" class="content-card project-card">
        <span class="project-type">{{ project.type }}</span>
        <h3>{{ project.title }}</h3>
        <div class="video-container">
          <iframe
            :src="'https://www.youtube.com/embed/' + project.embedId"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p class="project-description">{{ project.description }}</p>
        <span class="project-date">{{ project.date }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.project-card {
  position: relative;
  /* Hover effect is now handled by the .content-card parent style */
  padding: 2rem;
}

.project-type {
  background: var(--accent-color);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin: 1.5rem 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.project-description {
  margin: 1rem 0;
  line-height: 1.7;
  font-size: 0.95rem;
}

.project-date {
  display: block;
  color: var(--accent-color);
  font-size: 0.85rem;
  margin-top: 1rem;
  font-weight: 500;
}

h3 {
  color: var(--text-color);
  margin: 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
}
</style>