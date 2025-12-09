<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  // Add form submission logic here
  console.log('Form submitted:', { name: name.value, email: email.value, message: message.value })
}
</script>

<template>
  <div>
    <h1 class="page-title">Contact</h1>
    <div class="content-card contact-form-container">
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nom:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-form-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.8rem;
}

label {
  display: block;
  margin-bottom: 0.7rem;
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  background-color: var(--primary-color);
  color: var(--text-color);
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: var(--accent-color);
  outline: none;
}

.submit-btn {
  background-color: var(--accent-color);
  color: var(--primary-color);
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
  align-self: flex-end;
  margin-top: 1.5rem;
}

.submit-btn:hover {
  background-color: #ffaa33; /* A slightly lighter orange */
  transform: translateY(-2px);
}
</style>