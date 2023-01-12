import { createSlice } from "@reduxjs/toolkit";
import {getDetailsThunk, addDetailsThunk} from "../services/details-thunks.js";

const isPropValuesEqual = (subject, target, propNames) =>
    propNames.every(propName => subject[propName] === target[propName]);

const getUniqueItemsByProperties = (items, propNames) =>
    items.filter((item, index, array) =>
                     index === array.findIndex(foundItem => isPropValuesEqual(foundItem, item, propNames))
    );

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        const x = a[key]
        const y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    });
}

const followerSlice = createSlice({
                                      name: "userData",
                                      initialState: {
                                          lastSearches: [],
                                      },
                                      extraReducers: {
                                          [getDetailsThunk.fulfilled]: (state, {payload}) => {
                                              state.lastSearches = sortByKey(getUniqueItemsByProperties(
                                                  payload, ['username', 'gameID']
                                              ), 'lastViewed')
                                          },
                                          [addDetailsThunk.fulfilled]: (state, {payload}) => {
                                              state.lastSearches = sortByKey(getUniqueItemsByProperties(
                                                  payload, ['username', 'gameID']
                                              ), 'lastViewed')
                                          },
                                      }
                                  });

export default followerSlice.reducer;