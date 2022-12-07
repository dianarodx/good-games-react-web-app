import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./auth-service"

export const loginThunk = createAsyncThunk(
    'login', async (credentials) =>
        await service.login(credentials)
)
export const signupThunk = createAsyncThunk(
    'signup', async (username, password) =>
        await service.signup(username, password)
)
export const logoutThunk = createAsyncThunk(
    'logout', async (userID) =>
        await service.logout(userID)
)
export const profileThunk = createAsyncThunk(
    'profile', async (userID) =>
        await service.profile(userID)
)