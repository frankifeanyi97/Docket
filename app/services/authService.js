import api from './api';

export const register = async ({ full_name, email, password, role, specialty, phone }) => {
  const body = { full_name, email, password, role, specialty };
  if (phone) body.phone = phone;
  const response = await api.post('/auth/register', body);
  return response.data;
};

export const login = async ({ email, password }) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const getMe = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};
