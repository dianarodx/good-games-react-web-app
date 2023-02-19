import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || 'https://good-games-node-server.onrender.com/api';
const api = axios.create({withCredentials: true})

export const getReviews = async (gameID) => {
    const getReviewsAPI = `${API_BASE}/reviews/${gameID}`
    const response = await api.get(getReviewsAPI)
    return response.data
}
export const getRating = async (gameID) => {
    const getRatingAPI = `${API_BASE}/rating/${gameID}`
    const response = await api.get(getRatingAPI)
    return response.data
}
export const addReview = async (reviewInfo) => {
    const addReviewAPI = `${API_BASE}/review`
    const response = await api.post(addReviewAPI, reviewInfo)
    return response.data
}
export const deleteReview = async (reviewID) => {
    const deleteReviewAPI = `${API_BASE}/review/${reviewID}`
    const response = await api.delete(deleteReviewAPI)
    return response.data
}