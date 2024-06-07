import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../common/api/apiClient";


export const handleBusinessError = (state, action) => {
    state.status = "failed";
    state.businessError = action.payload;
};

export const createBusinessLocationAction = createAsyncThunk(
    "business/createBusinessLocationAction",
    async (state, { rejectWithValue }) => {
        try {
            const res = await sendRequest("POST", "/User/create-business-location", state);
            return res;

        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const updateBusinessLocationAction = createAsyncThunk(
    "business/updateBusinessLocationAction",
    async (state, { rejectWithValue }) => {
        try {
            const res = await sendRequest("POST", "/User/update-business-location", state);
            return res;

        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);



export const getBusinessLocationAction = createAsyncThunk(
    "business/getBusinessLocationAction",
    async (state, { rejectWithValue }) => {
        try {
            const res = await sendRequest("GET", "/User/get-business-locations", state);
            return res;

        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const deleteBusinessLocationAction = createAsyncThunk(
    "business/deleteBusinessLocationAction",
    async (state, { rejectWithValue }) => {
        try {
            const res = await sendRequest("DELETE", `/User/delete-business-location-by-id/${state}`);
            return res;

        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)


export const getBusinessLocationByIdAction = createAsyncThunk(
    "business/getBusinessLocationByIdAction",
    async (state, { rejectWithValue }) => {
        try {
            const res = await sendRequest("GET", `/User/get-business-location-by-id/${state}`);
            return res;

        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)


export const getBusinessTaxStructureAction = createAsyncThunk(
    "business/getBusinessTaxStructureAction",
    async (state, { rejectWithValue }) => {
        try {
            const res = await sendRequest("GET", `/User/get-business-location-by-id/${state}`);
            return res;

        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)