<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useProjectStore } from '../stores/projects'

const router = useRouter()
const authStore = useAuthStore()
const projectStore = useProjectStore()

const newProject = ref({
  title: '',
  description: '',
  type: 'Album',
  embedId: '',
  date: new Date().getFullYear().toString()
})

const projectTypes = ['Album', 'Musique de Jeu', 'Bande Sonore', 'Performance Live']

onMounted(() => {
  projectStore.loadFromStorage()
})

const handleSave = () => {
  const json = projectStore.getProjectsAsJson()
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'projects.json'
  a.click()
  URL.revokeObjectURL(url)
}

const handleLogout = () => {
  authStore.logout()
  router.push('/admin')
}

const handleSubmit = () => {
  projectStore.addProject(newProject.value)
  newProject.value = {
    title: '',
    description: '',
    type: 'Album',
    embedId: '',
    date: new Date().getFullYear().toString()
  }
}
</script>

<template>
  <!-- Le reste du template reste inchangé -->
  <div class="admin-dashboard">
    <div class="dashboard-header content-card">
      <h1 class="page-title">Tableau de Bord</h1>
      <button @click="handleLogout" class="logout-btn">
        Se déconnecter
      </button>
    </div>

    <div class="content-card">
      <h2>Ajouter un Nouveau Projet</h2>
      <form @submit.prevent="handleSubmit" class="project-form">
        <div class="form-group">
          <label for="title">Titre:</label>
          <input 
            type="text" 
            id="title" 
            v-model="newProject.title" 
            required
            class="form-input"
          >
        </div>

        <div class="form-group">
          <label for="type">Type:</label>
          <select 
            id="type" 
            v-model="newProject.type"
            class="form-input"
          >
            <option v-for="type in projectTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="description">Description:</label>
          <textarea 
            id="description" 
            v-model="newProject.description" 
            required
            rows="4"
            class="form-input"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="embedId">ID Vidéo YouTube:</label>
          <input 
            type="text" 
            id="embedId" 
            v-model="newProject.embedId" 
            required
            class="form-input"
          >
        </div>

        <div class="form-group">
          <label for="date">Année:</label>
          <input 
            type="text" 
            id="date" 
            v-model="newProject.date" 
            required
            class="form-input"
          >
        </div>

        <button type="submit" class="submit-btn">
          Ajouter le Projet
        </button>
        <button @click="handleSave" type="button" class="submit-btn">
          Sauvegarder les changements
        </button>
      </form>
    </div>

    <div class="content-card">
      <h2>Projets Existants</h2>
      <div class="projects-list">
        <div v-for="project in projectStore.projects" :key="project.id" class="project-item">
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.type }} - {{ project.date }}</p>
          </div>
          <button 
            @click="projectStore.deleteProject(project.id)"
            class="delete-btn"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Les styles restent inchangés */
.admin-dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logout-btn {
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #6d3410;
}

.project-form {
  margin-top: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--rune-border);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.projects-list {
  margin-top: 1.5rem;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--rune-border);
}

.project-item:last-child {
  border-bottom: none;
}

.project-info h3 {
  margin: 0;
  color: var(--primary-color);
}

.project-info p {
  margin: 0.5rem 0 0;
  color: var(--text-color);
  font-size: 0.9rem;
}

.delete-btn {
  padding: 0.5rem 1rem;
  background-color: #dc2626;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #b91c1c;
}

h2 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>