// ============================================================
// services/authService.js
// ============================================================
//
// WHAT IS THIS FILE?
// This file contains functions that talk to the /auth endpoints
// on the backend. Each function = one API action.
//
// WHY SEPARATE FROM THE SCREEN?
// Screens should only handle UI — what the user sees and taps.
// The logic of "how to call the API" lives here.
// This way, if the API changes, you fix it in one place.
//
// PATTERN TO FOLLOW FOR NEW ENDPOINTS:
//   1. Import api from './api'
//   2. Write an async function
//   3. Call api.get / api.post / api.patch etc.
//   4. Return response.data (that's our { success, message, data } shape)
//   5. Let errors bubble up — the screen handles them with try/catch
// ============================================================

import api from './api';


// ─── REGISTER ────────────────────────────────────────────────
// Calls: POST /auth/register
//
// What you send:
// {
//   full_name : "Tunde Bakare",
//   email     : "tunde@firm.ng",
//   password  : "Password123!",
//   role      : "senior_partner" | "associate" | "secretary",
//   phone     : "+2348012345678"  (optional)
// }
//
// What you get back on success:
// {
//   success : true,
//   message : "Account created successfully",
//   data    : {
//     token : "eyJhbGci...",   ← JWT, save this for later requests
//     user  : { id, full_name, email, role }
//   }
// }
export const register = async ({ full_name, email, password, role, phone }) => {
  // Build the request body — only include phone if it was provided
  const body = { full_name, email, password, role };
  if (phone) body.phone = phone;

  // api.post sends a POST request to BASE_URL + '/auth/register'
  const response = await api.post('/auth/register', body);

  // response.data is the JSON the server sent back:
  // { success: true, message: '...', data: { token, user } }
  return response.data;
};


// ─── LOGIN ────────────────────────────────────────────────────
// Calls: POST /auth/login
//
// What you send : { email, password }
// What you get  : { success, message, data: { token, user } }
//
// (Not wired to a screen yet — this shows the pattern for next time)
export const login = async ({ email, password }) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};


// ─── GET CURRENT USER ─────────────────────────────────────────
// Calls: GET /auth/me
//
// No body needed — the token in the Authorization header identifies the user.
// (You'll wire this up when you implement the auth token interceptor in api.js)
export const getMe = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};


// ─── HOW TO ADD THE NEXT ENDPOINT ─────────────────────────────
//
// Say you want to fetch all cases. You'd add to services/caseService.js:
//
//   import api from './api';
//
//   export const getCases = async () => {
//     const response = await api.get('/cases');
//     return response.data;
//   };
//
// Then in your screen:
//
//   import { getCases } from '../services/caseService';
//
//   const [cases, setCases] = useState([]);
//   const [loading, setLoading] = useState(false);
//
//   const fetchCases = async () => {
//     setLoading(true);
//     try {
//       const result = await getCases();
//       setCases(result.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };
// ─────────────────────────────────────────────────────────────
