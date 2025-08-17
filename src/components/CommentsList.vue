<template>
  <div class="mt-3">
    <h6>Comments</h6>

    <!-- Render each comment -->
    <div v-for="comment in comments" :key="comment.id" class="border rounded p-2 mb-2">
      <p class="mb-1">{{ comment.content }}</p>
      <small class="text-muted">By: {{ comment.authorName }}</small>
    </div>

    <!-- Add Comment Input -->
    <div class="input-group mb-2">
      <input v-model="commentInput" type="text" class="form-control" placeholder="Add a comment"/>
      <button class="btn btn-outline-primary" @click="submitComment">
        <i class="bi bi-reply"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'CommentsList',
  props: {
    comments: { type: Array, required: true }
  },
  emits: ['add-comment'],
  setup(props, { emit }) {
    const state = reactive({ commentInput: '' });

    const submitComment = () => {
      if (!state.commentInput) return;
      emit('add-comment', state.commentInput);
      state.commentInput = '';
    };

    return { ...toRefs(state), submitComment };
  }
});
</script>
