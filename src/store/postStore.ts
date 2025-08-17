import { defineStore } from 'pinia';
import { apiPosts } from '../api/postApi';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [] as Array<{
      id: number;
      content: string;
      authorName: string;
      comments: Array<{ id: number; content: string; authorName: string }>;
      upvotes: number;
      downvotes: number;
    }>
  }),

  actions: {
    // Fetch all posts from the backend
    async fetchPosts() {
      try {
        const res = await apiPosts.getAll();
        this.posts = res.data;
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    },

    // Add a new post
    async addPost(content: string, authorName: string) {
      try {
        await apiPosts.addPost(content, authorName);
        await this.fetchPosts(); // refresh after adding
      } catch (err) {
        console.error('Error adding post:', err);
      }
    },

    // Add a comment to a post
    async addComment(postId: number, content: string, authorName: string) {
      try {
        await apiPosts.addComment(postId, content, authorName);
        await this.fetchPosts(); // refresh after adding comment
      } catch (err) {
        console.error('Error adding comment:', err);
      }
    },

    // Rate a post (upvote or downvote)
    async ratePost(postId: number, isUpvote: boolean, authorName: string) {
      try {
        await apiPosts.ratePost(postId, isUpvote, authorName);
        await this.fetchPosts(); // refresh after rating
      } catch (err) {
        console.error('Error rating post:', err);
      }
    }
  }
});
