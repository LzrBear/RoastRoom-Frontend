import { defineStore } from 'pinia';
import { ref } from 'vue';
import { apiPosts } from '../api/postApi';

interface Comment {
  id: number;
  content: string;
  authorName: string;
}

interface Rating {
  id: number;
  isUpvote: boolean;
  authorName: string;
}

interface Post {
  id: number;
  content: string;
  authorName: string;
  comments: Comment[];
  ratings: Rating[];
}

export const usePostStore = defineStore('postStore', () => {
  const posts = ref<Post[]>([]);

  const fetchPosts = async () => {
    const res = await apiPosts.getAll();
    posts.value = res.data;
  };

  const addPost = async (content: string, authorName: string) => {
    await apiPosts.addPost(content, authorName);
    await fetchPosts();
  };

  const addComment = async (postId: number, content: string, authorName: string) => {
    await apiPosts.addComment(postId, content, authorName);
    await fetchPosts();
  };

  const ratePost = async (postId: number, isUpvote: boolean, authorName: string) => {
    await apiPosts.ratePost(postId, isUpvote, authorName);
    await fetchPosts();
  };

  return { posts, fetchPosts, addPost, addComment, ratePost };
});
