import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../common/api/apiClient";

export const handleTaskError = (state, action) => {
  state.status = "failed";
  state.TaskError = action.payload;
};


export const createTaskAction = createAsyncThunk(
  "Task/createTaskAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Task/update-create-task`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTaskAction = createAsyncThunk(
  "Task/getTaskAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `/Task/get-task-by-id/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getAllTaskAction = createAsyncThunk(
  "Task/getAllTaskAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Task`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const updateTaskStatusAction = createAsyncThunk(
  "Task/updateTaskStatusAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Task/update-status`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);














