import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Create axios instance with default config
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    }
    return Promise.reject(error);
  }
);

// Generic API methods
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.get(url, config).then((res) => res.data),

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.post(url, data, config).then((res) => res.data),

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.put(url, data, config).then((res) => res.data),

  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.patch(url, data, config).then((res) => res.data),

  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.delete(url, config).then((res) => res.data),
};

// API Endpoints - These will connect to the backend when ready
export const endpoints = {
  // Profile
  profile: {
    get: () => api.get('/profile'),
    update: (data: unknown) => api.put('/profile', data),
  },

  // Projects
  projects: {
    getAll: () => api.get('/projects'),
    getById: (id: string) => api.get(`/projects/${id}`),
    create: (data: unknown) => api.post('/projects', data),
    update: (id: string, data: unknown) => api.put(`/projects/${id}`, data),
    delete: (id: string) => api.delete(`/projects/${id}`),
  },

  // Blog Posts
  blog: {
    getAll: () => api.get('/blog'),
    getById: (id: string) => api.get(`/blog/${id}`),
    create: (data: unknown) => api.post('/blog', data),
    update: (id: string, data: unknown) => api.put(`/blog/${id}`, data),
    delete: (id: string) => api.delete(`/blog/${id}`),
  },

  // Guestbook
  guestbook: {
    getAll: () => api.get('/guestbook'),
    create: (data: { name: string; message: string }) => api.post('/guestbook', data),
    delete: (id: string) => api.delete(`/guestbook/${id}`),
  },

  // Diary Entries
  diary: {
    getAll: () => api.get('/diary'),
    create: (data: unknown) => api.post('/diary', data),
    delete: (id: string) => api.delete(`/diary/${id}`),
  },

  // Photos
  photos: {
    getAll: () => api.get('/photos'),
    upload: (formData: FormData) => api.post('/photos', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
    delete: (id: string) => api.delete(`/photos/${id}`),
  },

  // Music/Playlists
  music: {
    getNowPlaying: () => api.get('/music/now-playing'),
    getPlaylists: () => api.get('/music/playlists'),
    getRecordings: () => api.get('/music/recordings'),
  },

  // Stats
  stats: {
    getVisitorCount: () => api.get('/stats/visitors'),
    incrementVisitor: () => api.post('/stats/visitors'),
    getCssBattleStats: () => api.get('/stats/cssbattle'),
  },
};

export default apiClient;

