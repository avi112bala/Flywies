import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://veocab-project.vercel.app/api/v1';

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerAdmin = async (data) => {
    const response = await api.post('/admin/registration', data);
    return response.data;
  };
export const loginAdmin = async (data) => {
    const response = await api.post('/admin/login', data);
    return response.data;
  }

  export const allcount = async (data) => {
    const response = await api.get("/admin/allcount", data);
    return response.data;
  };

  export const loginsubAdmin = async (data) => {
    const response = await api.post("/admin/partner/registration", data);
    return response.data;
  };

  export const getAdminProfile = async (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get('/admin/getprofile');
    return response.data;
  };
  export const getAllUsers = async (queryParams = {}, token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get('/admin/profile', { params: queryParams });
    return response.data;
  };

  export const getAllUsersByType = async (userType, currentRole, token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get(`/admin/profile/by-userType`, {
      params: { userType, currentRole },
    });
    return response.data;
  };