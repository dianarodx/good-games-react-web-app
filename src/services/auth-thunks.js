import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./auth-service"

export const loginThunk = createAsyncThunk(
    'login', async (credentials) =>
        await service.login(credentials)
)
export const signupThunk = createAsyncThunk(
    'signup', async (credentials) =>
        await service.signup(credentials)
)
export const logoutThunk = createAsyncThunk(
    'logout', async (user) =>
        await service.logout(user)
)
export const profileThunk = createAsyncThunk(
    'profile', async (username) =>
        await service.profile(username)
)
export const updateProfileThunk = createAsyncThunk(
    'update', async (user) =>
        await service.update(user)
)