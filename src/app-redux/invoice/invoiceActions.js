import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../common/api/apiClient";


export const handleInvoiceError = (state, action) => {
    state.status = "failed";
    state.managmenetError = action.payload;
  };

export const getInvoiceDataAction = createAsyncThunk(
    "invoice/getInvoiceDataAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("GET", `/Invoice/get-new-invoice-data-by-client-id/${state}`);
        return res;
  
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const createInvoiceAction = createAsyncThunk(
    "invoice/createInvoiceAction",
    async (state, { rejectWithValue }) => {
      try {
        const res = await sendRequest("POST", "Invoice/create-invoice", state);
        return res;
  
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );






  