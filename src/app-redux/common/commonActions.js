import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../common/api/apiClient";

export const handleCommonError = (state, action) => {
  state.status = "failed";
  state.commonError = action.payload;
};

export const getAllClientsAction = createAsyncThunk(
    "client/getAllClientsAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("POST", `/Client`, state);
        return res;
      }
      catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const getAllUsersAction = createAsyncThunk(
    "staff/getAllUsersAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("POST", `/User`, state);
        return res;
      }
      catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );