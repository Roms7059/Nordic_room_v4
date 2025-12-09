import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import projectsData from '../data/projects.json'

export interface Project {
  id: string
  title: string
  description: string
  type: string
  embedId: string
  date: string
}

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<Project[]>(projectsData.projects)

  // Sauvegarder les changements dans le localStorage comme backup
  watch(projects, (newProjects) => {
    localStorage.setItem('projects', JSON.stringify(newProjects))
  }, { deep: true })

  // Charger les projets depuis le localStorage si disponible
  const loadFromStorage = () => {
    const stored = localStorage.getItem('projects')
    if (stored) {
      projects.value = JSON.parse(stored)
    }
  }

  // Charger les projets au démarrage
  loadFromStorage()

  function addProject(project: Omit<Project, 'id'>) {
    const newProject = {
      ...project,
      id: Date.now().toString()
    }
    projects.value.unshift(newProject)
  }

  function deleteProject(id: string) {
    projects.value = projects.value.filter(p => p.id !== id)
  }

  function getProjectsAsJson() {
    return JSON.stringify({ projects: projects.value }, null, 2)
  }

  return {
    projects,
    addProject,
    deleteProject,
    loadFromStorage,
    getProjectsAsJson
  }
})