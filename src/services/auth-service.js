import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
console.log(API_BASE);
const api = axios.create({withCredentials: true})

export const login = async (credentials) => {
    const loginAPI = `${API_BASE}/login`
    const response = await api.post(loginAPI, credentials)
    return response.data;
}
export const signup = async (username, password) => {
    const signupAPI = `${API_BASE}/signup`
    const response = await axios.post(signupAPI, username, password)
    return response.data;
}
export const profile = async (userID) => {
    const profileAPI = `${API_BASE}/profile`
    const response = await axios.post(profileAPI, userID)
    return response.data;
}
export const logout = async (userID) => {
    const logoutAPI = `${API_BASE}/logout`
    const response = await axios.post(logoutAPI, userID)
    return response.data;
}