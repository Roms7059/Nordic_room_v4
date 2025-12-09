<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    type: string
    image: string
  }
}>()
</script>

<template>
  <div class="featured-project">
    <div class="project-image">
      <img :src="project.image" :alt="project.title">
    </div>
    <div class="project-info">
      <span class="project-type">{{ project.type }}</span>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.featured-project {
  background: var(--card-background);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--secondary-color);
}

.project-image img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.project-info {
  padding: 1.5rem;
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

h3 {
  margin: 0.5rem 0;
  color: var(--text-color);
  font-size: 1.3rem;
  font-weight: 600;
}

p {
  color: var(--text-color);
  line-height: 1.7;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}
</style>