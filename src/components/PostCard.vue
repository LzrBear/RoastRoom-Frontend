<template>
  <div class="card mb-3 shadow-sm">
    <div class="card-body">
      <p class="card-text">{{ post.content }}</p>
      <p class="text-muted mb-2">By: {{ post.authorName }}</p>

      <!-- Rating Buttons -->
      <button class="btn btn-success btn-sm me-2" @click="$emit('rate', post.id, true)">
        <i class="bi bi-hand-thumbs-up"></i> Upvote
      </button>
      <button class="btn btn-danger btn-sm me-2" @click="$emit('rate', post.id, false)">
        <i class="bi bi-hand-thumbs-down"></i> Downvote
      </button>

      <!-- Comments -->
      <CommentsList
        :comments="post.comments"
        @add-comment="(content: string) => $emit('comment', post.id, content)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommentsList from './CommentsList.vue';

export default defineComponent({
  name: 'PostCard',
  components: { CommentsList },
  props: { post: { type: Object, required: true } }
});
</script>
