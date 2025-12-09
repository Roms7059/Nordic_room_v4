<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async () => {
  if (authStore.login(email.value, password.value)) {
    router.push('/admin/dashboard')
  } else {
    error.value = 'Identifiants invalides'
  }
}
</script>

<template>
  <div class="admin-login">
    <div class="login-card content-card">
      <h1 class="page-title">Administration</h1>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required
            class="form-input"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Mot de passe:</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required
            class="form-input"
          >
        </div>
        
        <p v-if="error" class="error-message">{{ error }}</p>
        
        <button type="submit" class="submit-btn">
          Se connecter
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.admin-login {
  max-width: 500px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.login-card {
  padding: 2rem;
}

.login-form {
  margin-top: 2rem;
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

.error-message {
  color: #dc2626;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: var(--accent-color);
}
</style>