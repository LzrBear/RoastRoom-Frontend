import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend URL
  withCredentials: true
});

export const apiAuth = {
  register: (username: string, password: string) =>
    api.post('/auth/register', { username, password }),
  login: (username: string, password: string) =>
    api.post('/auth/login', { username, password })
};

export const apiPosts = {
  getAll: () => api.get('/posts'),
  addPost: (content: string, authorName: string) =>
    api.post('/posts', { content, authorName }),
  addComment: (postId: number, content: string, authorName: string) =>
    api.post(`/posts/${postId}/comment`, { content, authorName }),
  ratePost: (postId: number, isUpvote: boolean, authorName: string) =>
    api.post(`/posts/${postId}/rate`, { isUpvote, authorName })
};
