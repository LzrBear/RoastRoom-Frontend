<template>
  <div class="post">
    <p><strong>{{ post.authorName }}:</strong> {{ post.content }}</p>
    <button @click="rate(true)">Upvote</button>
    <button @click="rate(false)">Downvote</button>
    <CommentSection :postId="post.id" :comments="post.comments" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePostStore } from '../stores/postStore';
import CommentSection from './CommentSection.vue';

export default defineComponent({
  props: { post: Object },
  components: { CommentSection },
  setup(props) {
    const store = usePostStore();
    const rate = async (isUpvote: boolean) => {
      await store.ratePost(props.post!.id, isUpvote, 'Anonymous');
    };
    return { rate };
  }
});
</script>
