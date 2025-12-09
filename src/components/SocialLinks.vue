<script setup lang="ts">
const socialLinks = [
  { icon: 'youtube', url: '#', label: 'YouTube' },
  { icon: 'instagram', url: '#', label: 'Instagram' },
  { icon: 'spotify', url: '#', label: 'Spotify' }
]
</script>

<template>
  <div class="social-links">
    <a 
      v-for="link in socialLinks" 
      :key="link.label"
      :href="link.url"
      :aria-label="link.label"
      class="social-link"
    >
      <font-awesome-icon :icon="['fab', link.icon]" />
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.5rem;
}

.social-link {
  color: var(--text-color);
  font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-link:hover {
  color: var(--accent-color);
  transform: translateY(-5px);
}
</style>