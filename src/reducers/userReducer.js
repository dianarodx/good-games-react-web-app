import { createSlice } from "@reduxjs/toolkit";
import {signupThunk, loginThunk, logoutThunk, profileThunk} from "../services/auth-thunks";

const userSlice = createSlice({
                                  name: "userData",
                                  initialState: {
                                      currentUser: null,
                                      loginFailed: false,
                                      signupFailed: false,
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
                                      [logoutThunk.fulfilled]: (state, action) => { },
                                      [profileThunk.fulfilled]: (state, action) => { }
                                  }
                             });

export default userSlice.reducer;