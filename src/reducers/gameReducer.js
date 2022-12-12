import { createSlice } from "@reduxjs/toolkit";
import {getReviewsThunk, getRatingThunk, addReviewThunk, deleteReviewThunk} from "../services/game-thunks.js";

const gameSlice = createSlice({
                                      name: "userData",
                                      initialState: {
                                          reviews: [],
                                          rating: 0
                                      },
                                      extraReducers: {
                                          [getReviewsThunk.fulfilled]: (state, {payload}) => {
                                              state.reviews = payload
                                          },
                                          [getRatingThunk.fulfilled]: (state, {payload}) => {
                                              state.rating = payload
                                          },
                                          [addReviewThunk.fulfilled]: (state, {payload}) => {
                                              console.log(payload)
                                              state.reviews.push(payload)
                                              console.log(state.reviews)
                                          },
                                          [deleteReviewThunk.fulfilled]: (state, {payload}) => {
                                              const index = state.reviews.findIndex(object => {
                                                  return object.id === payload.id;
                                              });
                                              if (index > -1) {
                                                  state.reviews.splice(index, 1);
                                              }
                                          },
                                      }
                                  });

export default gameSlice.reducer;