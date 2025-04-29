import axios from "axios";

const API_BASE = "http://localhost:3000/api";

export const registerUser = (data) =>
  axios.post(`${API_BASE}/register`, data);;

export const loginUser = (data) =>
  axios.post(`${API_BASE}/login`, data);

export const verifyOtp = (data) =>
  axios.post(`${API_BASE}/verify-otp`, data);

export const deleteAccount = (email) =>
  axios.delete(`${API_BASE}/delete-account`, { data: { email } });
