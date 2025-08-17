import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: '/api', // Vite proxy will forward this to your backend
  withCredentials: true // Include cookies if needed
});

// All API calls related to posts
export const apiPosts = {
  // Get all posts
  getAll: () => api.get('/posts'),

  // Add a new post
  addPost: (content: string, authorName: string) =>
    api.post('/posts', { content, authorName }),

  // Add a comment to a post
  addComment: (postId: number, content: string, authorName: string) =>
    api.post(`/posts/${postId}/comment`, { content, authorName }),

  // Rate a post (upvote or downvote)
  ratePost: (postId: number, isUpvote: boolean, authorName: string) =>
    api.post(`/posts/${postId}/rate`, { isUpvote, authorName })
};
