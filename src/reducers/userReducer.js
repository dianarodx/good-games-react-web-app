import { createSlice } from "@reduxjs/toolkit";
import {
    signupThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    updateProfileThunk
} from "../services/auth-thunks";

const userSlice = createSlice({
                                  name: "userData",
                                  initialState: {
                                      currentUser: JSON.parse(localStorage.getItem('user')),
                                      loginFailed: false,
                                      signupFailed: false,
                                      profileInfo: null,
                                  },
                                  extraReducers: {
                                      [loginThunk.fulfilled]: (state, action) => {
                                          state.currentUser = action.payload
                                          state.loginFailed = false
                                          localStorage.setItem('user', JSON.stringify(action.payload))
                                      },
                                      [loginThunk.rejected]: (state, action) => {
                                          state.currentUser = null
                                          state.loginFailed = true
                                          localStorage.setItem('user', JSON.stringify(null))
                                      },
                                      [signupThunk.fulfilled]: (state, action) => {
                                          state.currentUser = action.payload
                                          state.signupFailed = false
                                          state.loginFailed = false
                                          localStorage.setItem('user', JSON.stringify(action.payload))
                                      },
                                      [signupThunk.rejected]: (state, action) => {
                                          state.currentUser = null
                                          state.signupFailed = true
                                          localStorage.setItem('user', JSON.stringify(null))
                                      },
                                      [logoutThunk.fulfilled]: (state, action) => {
                                          state.currentUser = null
                                          state.profileInfo = null
                                          localStorage.setItem('user', JSON.stringify(null))
                                      },
                                      [profileThunk.fulfilled]: (state, action) => {
                                          state.profileInfo = action.payload
                                      },
                                      [updateProfileThunk.fulfilled]: (state, action) => {
                                          state.currentUser = action.payload.user
                                      },
                                  }
                             });

export default userSlice.reducer;