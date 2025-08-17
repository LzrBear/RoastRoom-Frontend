<template>
  <div>
    <h2>Posts</h2>
    <input v-model="newPost" placeholder="Write a roast..." />
    <button @click="addNewPost">Add Post</button>
    <PostItem v-for="post in store.posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { usePostStore } from '../stores/postStore';
import PostItem from './PostItem.vue';

export default defineComponent({
  components: { PostItem },
  setup() {
    const store = usePostStore();
    const newPost = ref('');

    const addNewPost = async () => {
      if (!newPost.value) return;
      await store.addPost(newPost.value, 'Anonymous');
      newPost.value = '';
    };

    onMounted(() => store.fetchPosts());

    return { store, newPost, addNewPost };
  }
});
</script>
