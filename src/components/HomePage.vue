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
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @rate="ratePost"
      @comment="addComment"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { usePostStore } from '../store/postStore';
import PostCard from './PostCard.vue';

export default defineComponent({
  components: { PostCard },
  setup() {
    const postStore = usePostStore();
    const newPostContent = reactive('');
    const newPostAuthor = reactive('');

    onMounted(() => postStore.fetchPosts());

    const submitPost = () => {
      if (!newPostContent || !newPostAuthor) return;
      postStore.addPost(newPostContent, newPostAuthor);
      newPostContent.value = '';
      newPostAuthor.value = '';
    };

    const ratePost = (postId: number, isUpvote: boolean) => {
      postStore.ratePost(postId, isUpvote, 'Anonymous');
    };

    const addComment = (postId: number, content: string) => {
      postStore.addComment(postId, content, 'Anonymous');
    };

    return {
      posts: postStore.posts,
      newPostContent,
      newPostAuthor,
      submitPost,
      ratePost,
      addComment
    };
  }
});
</script>
