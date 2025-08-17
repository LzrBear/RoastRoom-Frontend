<template>
  <div class="comments">
    <h4>Comments</h4>
    <input v-model="commentText" placeholder="Add a comment" />
    <button @click="addComment">Comment</button>
    <ul>
      <li v-for="c in comments" :key="c.id">{{ c.authorName }}: {{ c.content }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePostStore } from '../stores/postStore';

export default defineComponent({
  props: {
    postId: Number,
    comments: Array
  },
  setup(props) {
    const store = usePostStore();
    const commentText = ref('');

    const addComment = async () => {
      if (!commentText.value) return;
      await store.addComment(props.postId!, commentText.value, 'Anonymous');
      commentText.value = '';
    };

    return { commentText, addComment };
  }
});
</script>
