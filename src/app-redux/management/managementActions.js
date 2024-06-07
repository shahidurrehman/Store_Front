import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../common/api/apiClient";


export const handleManagementError = (state, action) => {
    state.status = "failed";
    state.managmenetError = action.payload;
  };

export const createServiceAction = createAsyncThunk(
    "managmenet/createServiceAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("POST", "Management/create-service", state);
        return res;
  
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const updateServiceAction = createAsyncThunk(
    "managmenet/updateServiceAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("POST", "Management/update-service", state);
        return res;
  
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const getServicesAction = createAsyncThunk(
    "managmenet/getServicesAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("POST", "Management/get-services", state);
        return res;
  
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const deleteServiceAction = createAsyncThunk(
    "managmenet/deleteServiceAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("DELETE", `Management/delete-service/${state}`);
        return res;
  
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


  export const getServiceByIdAction = createAsyncThunk(
    "managmenet/getServiceByIdAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("GET", `/Management/get-service-by-id/${state}`);
        return res;
  
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


  export const getParentServiceAction = createAsyncThunk(
    "managmenet/getParentServiceAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("POST", `/Management/get-parent-services`,state);
        return res;
  
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );



  