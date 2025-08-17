<template>
  <div id="app">
    <h1>RoastRoom</h1>
    <AuthForm />
    <PostList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthForm from './components/AuthForm.vue';
import PostList from './components/PostList.vue';

export default defineComponent({
  components: { AuthForm, PostList }
});
</script>
