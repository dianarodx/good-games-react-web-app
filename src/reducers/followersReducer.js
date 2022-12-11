import { createSlice } from "@reduxjs/toolkit";
import {
    addFollowerThunk,
    getFollowersThunk,
    removeFollowerThunk,
    getFollowingThunk
} from "../services/followers-thunks.js";

const followerSlice = createSlice({
                                  name: "userData",
                                  initialState: {
                                      followers: [],
                                      following: []
                                  },
                                  extraReducers: {
                                      [getFollowersThunk.fulfilled]: (state, {payload}) => {
                                          state.followers = payload
                                      },
                                      [getFollowingThunk.fulfilled]: (state, {payload}) => {
                                          state.following = payload
                                      },
                                      [addFollowerThunk.fulfilled]: (state, action) => {
                                          state.followers.push(action.payload)
                                      },
                                      [removeFollowerThunk.fulfilled]: (state, action) => {
                                          const index = state.followers.findIndex(object => {
                                              return object.username === action.payload.follower;
                                          });
                                          if (index > -1) {
                                              state.followers.splice(index, 1);
                                          }
                                      }
                                  }
                              });

export default followerSlice.reducer;