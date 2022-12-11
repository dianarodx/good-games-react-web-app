import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const api = axios.create({withCredentials: true})

export const getFollowers = async (username) => {
    const getFollowersAPI = `${API_BASE}/followers`
    const response = await api.post(getFollowersAPI, {username: username})
    return response.data
}

export const follow = async (usernames) => {
    const followAPI = `${API_BASE}/follow`
    const response = await api.post(followAPI, {follower: usernames.currentUser, following: usernames.username})
    return response.data
}