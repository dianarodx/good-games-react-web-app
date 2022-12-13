import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const api = axios.create({withCredentials: true})

export const addDetails = async (detailsInfo) => {
    const detailJSON = {
        username: detailsInfo.username,
        gameID: detailsInfo.gameID,
        lastViewed: Date.now(),
    }
    const detailsAPI = `${API_BASE}/details`
    const response = await api.post(detailsAPI, detailJSON)
    return response.data;
}
export const getDetails = async (username) => {
    const getDetailsAPI = `${API_BASE}/details/${username}`
    const response = await api.get(getDetailsAPI)
    return response.data
}