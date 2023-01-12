import {createAsyncThunk} from "@reduxjs/toolkit";
import * as details from "./details-service.js";

export const addDetailsThunk = createAsyncThunk(
    'details', async (detailInfo) =>
        await details.addDetails(detailInfo)
)
export const getDetailsThunk = createAsyncThunk(
    'getDetails', async (username) =>
        await details.getDetails(username)
)