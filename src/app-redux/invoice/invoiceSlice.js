import { createSlice } from "@reduxjs/toolkit";
import { createInvoiceAction, getInvoiceDataAction, handleInvoiceError } from "./invoiceActions";

const initialState = {
  status: "idle",
  data: null,
  getInvoiceDataResponse: null,
  createInvoiceResponse: null,

}

const invoiceSlice = createSlice({
  name: 'invoice',
  //createSlice will infer the state type from the 'initialState'argument
  initialState,
  reducers: {
    resetErrorAction: (state) => {
      delete state.invoiceError;
    },
    getInvoiceDataState: (state) => {
      delete state.getInvoiceDataResponse;
    },
    createInvoiceState: (state) => {
      delete state.createInvoiceResponse;

    }

  },


  extraReducers: (builder) => {
    builder

      .addCase(getInvoiceDataAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.getInvoiceDataResponse = action.payload;
      })
      .addCase(getInvoiceDataAction.rejected, handleInvoiceError)

      .addCase(getInvoiceDataAction.pending, (state) => {
        state.status = "loading";
      })



      
      .addCase(createInvoiceAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.createInvoiceResponse = action.payload;
      })
      .addCase(createInvoiceAction.rejected, handleInvoiceError)

      .addCase(createInvoiceAction.pending, (state) => {
        state.status = "loading";
      })

  }
});

//export const { resetErrorAction, gaurduanInformationStatus } = clientSlice.actions;
//other code such as selector can be implemented 'RootState' type 
export default invoiceSlice.reducer;

export const selectinvoicetError = (state) => state.invoice.invoiceError;
export const selectgetInvoiceDataStatus = (state) => state.invoice.getInvoiceDataResponse;
export const selectdeleteServiceStatus = (state) => state.management.deleteServiceResponse;
export const selectcreateInvoiceStatus = (state) => state.management.createInvoiceResponse;
