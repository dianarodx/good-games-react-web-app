import { createSlice } from "@reduxjs/toolkit";
import {addFollowerThunk, getFollowersThunk} from "../services/followers-thunks.js";

const followerSlice = createSlice({
                                  name: "userData",
                                  initialState: {
                                      followers: [],
                                      following: []
                                  },
                                  extraReducers: {
                                      [getFollowersThunk.fulfilled]: (state, action) => {
                                          state.followers = action.payload
                                      },
                                      [addFollowerThunk.fulfilled]: (state, action) => {
                                          state.followers.push(action.payload)
                                      }
                                  }
                              });

export default followerSlice.reducer;