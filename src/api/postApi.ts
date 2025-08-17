import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true
});

export const apiPosts = {
  getAll: () => api.get('/posts'),
  addPost: (content: string, authorName: string) =>
    api.post('/posts', { content, authorName }),
  addComment: (postId: number, content: string, authorName: string) =>
    api.post(`/posts/${postId}/comment`, { content, authorName }),
  ratePost: (postId: number, isUpvote: boolean, authorName: string) =>
    api.post(`/posts/${postId}/rate`, { isUpvote, authorName })
};
