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
                                      currentUser: null,
                                      loginFailed: false,
                                      signupFailed: false,
                                      profileInfo: null
                                  },
                                  extraReducers: {
                                      [loginThunk.fulfilled]: (state, action) => {
                                          state.currentUser = action.payload
                                          state.loginFailed = false
                                      },
                                      [loginThunk.rejected]: (state, action) => {
                                          state.currentUser = null
                                          state.loginFailed = true
                                      },
                                      [signupThunk.fulfilled]: (state, action) => {
                                          state.currentUser = action.payload
                                          state.signupFailed = false
                                          state.loginFailed = false
                                      },
                                      [signupThunk.rejected]: (state, action) => {
                                          state.currentUser = null
                                          state.signupFailed = true
                                      },
                                      [logoutThunk.fulfilled]: (state, action) => {
                                          state.currentUser = null
                                          state.profileInfo = null
                                      },
                                      [profileThunk.fulfilled]: (state, action) => {
                                          state.profileInfo = action.payload
                                      },
                                      [updateProfileThunk.fulfilled]: (state, action) => {
                                          state.currentUser = action.payload.user
                                      }
                                  }
                             });

export default userSlice.reducer;