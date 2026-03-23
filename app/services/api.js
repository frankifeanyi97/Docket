// ============================================================
// services/api.js
// ============================================================
//
// WHAT IS THIS FILE?
// This file creates a single "API client" that the whole app
// shares. Think of it as the front door to your backend.
//
// WHY DO WE NEED IT?
// Instead of typing the full URL in every screen like:
//   axios.post('https://docket-backend.up.railway.app/api/auth/login', ...)
//
// We configure it once here, and every other file just does:
//   import api from '../services/api'
//   api.post('/auth/login', ...)
//
// That means if the URL ever changes, you only update ONE file.
// ============================================================

import axios from 'axios';

// ─── 1. BASE URL ─────────────────────────────────────────────
// This is the root address of your backend.
// All requests are relative to this — so '/auth/login' becomes
// 'https://docket-backend-tcg1cp-production.up.railway.app/api/auth/login'
const BASE_URL = 'https://docket-backend-tcg1cp-production.up.railway.app/api';

// ─── 2. CREATE THE AXIOS INSTANCE ────────────────────────────
// axios.create() lets us set default settings for every request.
const api = axios.create({
  baseURL: BASE_URL,

  // Every request will send and expect JSON.
  headers: {
    'Content-Type': 'application/json',
  },

  // If the server doesn't respond in 10 seconds, give up.
  timeout: 10000,
});


// ─── 3. REQUEST INTERCEPTOR ──────────────────────────────────
// An interceptor runs automatically before every request.
// This is where you'll attach the user's token once they log in.
//
// Right now it just logs the request — useful for debugging.
// Later, you'd do:
//   const token = await AsyncStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
api.interceptors.request.use(
  (config) => {
    // console.log(`[API] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// ─── 4. RESPONSE INTERCEPTOR ─────────────────────────────────
// This runs automatically after every response.
// It's a good place to handle global errors like 401 (token expired).
//
// For now it passes responses through unchanged.
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // If the server returned an error response, bubble it up
    // to the service function that made the call.
    return Promise.reject(error);
  }
);


// ─── HOW TO USE THIS IN OTHER FILES ──────────────────────────
//
//   import api from '../services/api';
//
//   // GET request
//   const response = await api.get('/cases');
//
//   // POST with a body
//   const response = await api.post('/auth/login', { email, password });
//
//   // PATCH with a body
//   const response = await api.patch('/cases/SLT-001/status', { status: 'Active' });
//
//   The full response shape from this backend is always:
//   { success: true, message: '...', data: { ... } }
// ─────────────────────────────────────────────────────────────

export default api;
