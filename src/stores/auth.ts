import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref(null)

  function login(email: string, password: string) {
    // In a real application, this would make an API call
    if (email === 'admin@example.com' && password === 'admin123') {
      isAuthenticated.value = true
      user.value = { email }
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
    user.value = null
  }

  return {
    isAuthenticated,
    user,
    login,
    logout
  }
})