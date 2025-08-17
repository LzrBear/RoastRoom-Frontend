<template>
  <div>
    <h2>Register / Login</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="register">Register</button>
    <button @click="login">Login</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { apiAuth } from '../api/postApi';

export default defineComponent({
  setup() {
    const username = ref('');
    const password = ref('');
    const message = ref('');

    const register = async () => {
      try {
        await apiAuth.register(username.value, password.value);
        message.value = 'Registered successfully!';
      } catch (err) {
        message.value = 'Registration failed';
      }
    };

    const login = async () => {
      try {
        await apiAuth.login(username.value, password.value);
        message.value = 'Logged in successfully!';
      } catch (err) {
        message.value = 'Login failed';
      }
    };

    return { username, password, message, register, login };
  }
});
</script>
