import { defineStore } from 'pinia';
import { apiPosts } from '../api/postApi';

export const usePostStore = defineStore('postStore', {
  state: () => ({ posts: [] as any[] }),
  actions: {
    async fetchPosts() {
      const res = await apiPosts.getAll();
      this.posts = res.data;
    },
    async addPost(content: string, authorName: string) {
      await apiPosts.addPost(content, authorName);
      await this.fetchPosts();
    },
    async addComment(postId: number, content: string, authorName: string) {
      await apiPosts.addComment(postId, content, authorName);
      await this.fetchPosts();
    },
    async ratePost(postId: number, isUpvote: boolean, authorName: string) {
      await apiPosts.ratePost(postId, isUpvote, authorName);
      await this.fetchPosts();
    }
  }
});
