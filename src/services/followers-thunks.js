import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./followers-service.js";

export const getFollowersThunk = createAsyncThunk(
    'followers', async (username) =>
        await service.getFollowers(username)
)
export const addFollowerThunk = createAsyncThunk(
    'follow', async (usernames) =>
        await service.follow(usernames)
)