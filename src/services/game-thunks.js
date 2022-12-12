import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./game-service.js";

export const getReviewsThunk = createAsyncThunk(
    'followers', async (gameID) =>
        await service.getReviews(gameID)
)
export const getRatingThunk = createAsyncThunk(
    'following', async (gameID) =>
        await service.getRating(gameID)
)
export const addReviewThunk = createAsyncThunk(
    'addReview', async (reviewInfo) =>
        await service.addReview(reviewInfo)
)
export const deleteReviewThunk = createAsyncThunk(
    'deleteReview', async (reviewID) =>
        await service.deleteReview(reviewID)
)