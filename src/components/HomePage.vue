<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center">RoastRoom</h1>

    <!-- Add Post Form -->
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Add a Roast</h5>
        <div class="mb-3">
          <input v-model="newPostContent" type="text" class="form-control" placeholder="Write something..."/>
        </div>
        <div class="mb-3">
          <input v-model="newPostAuthor" type="text" class="form-control" placeholder="Your name"/>
        </div>
        <button class="btn btn-primary" @click="submitPost">
          Post <i class="bi bi-send"></i>
        </button>
      </div>
    </div>

    <!-- Posts List -->
    <div v-for="post in posts" :key="post.id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <p class="card-text">{{ post.content }}</p>
        <p class="text-muted mb-2">By: {{ post.authorName }}</p>

        <!-- Rating Buttons -->
        <button class="btn btn-success btn-sm me-2" @click="upvote(post.id)">
          <i class="bi bi-hand-thumbs-up"></i> Upvote
        </button>
        <button class="btn btn-danger btn-sm me-2" @click="downvote(post.id)">
          <i class="bi bi-hand-thumbs-down"></i> Downvote
        </button>

        <!-- Comments -->
        <div class="mt-3">
          <h6>Comments</h6>
          <div v-for="comment in post.comments" :key="comment.id" class="border rounded p-2 mb-2">
            <p class="mb-1">{{ comment.content }}</p>
            <small class="text-muted">By: {{ comment.authorName }}</small>
          </div>

          <!-- Add Comment -->
          <div class="input-group mb-2">
            <input v-model="commentInputs[post.id]" type="text" class="form-control" placeholder="Add a comment"/>
            <button class="btn btn-outline-primary" @click="submitComment(post.id)">
              <i class="bi bi-reply"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { usePostStore } from '../stores/postStore';

export default defineComponent({
  setup() {
    const postStore = usePostStore();
    const newPostContent = reactive('');
    const newPostAuthor = reactive('');
    const commentInputs: Record<number, string> = reactive({});

    onMounted(() => {
      postStore.fetchPosts();
    });

    const submitPost = () => {
      if (!newPostContent || !newPostAuthor) return;
      postStore.addPost(newPostContent, newPostAuthor);
      newPostContent.value = '';
      newPostAuthor.value = '';
    };

    const submitComment = (postId: number) => {
      const content = commentInputs[postId];
      if (!content) return;
      postStore.addComment(postId, content, 'Anonymous');
      commentInputs[postId] = '';
    };

    const upvote = (postId: number) => {
      postStore.ratePost(postId, true, 'Anonymous');
    };

    const downvote = (postId: number) => {
      postStore.ratePost(postId, false, 'Anonymous');
    };

    return {
      posts: postStore.posts,
      newPostContent,
      newPostAuthor,
      commentInputs,
      submitPost,
      submitComment,
      upvote,
      downvote
    };
  }
});
</script>

<style scoped>
.card {
  border-radius: 0.75rem;
}
</style>
