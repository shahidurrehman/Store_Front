import { createSlice } from "@reduxjs/toolkit";
import { createServiceAction, deleteServiceAction, getParentServiceAction, getServiceByIdAction, getServicesAction, handleManagementError, updateServiceAction } from "./managementActions";

const initialState = {
  status: "idle",
  data: null,
  createServiceResponse: null,
  getServiceResponse: null,
  updateServiceResponse: null,
  deleteServiceResponse: null,
  getServiceByIdResponse: null,
  getParentServiceResponse:null,

}

const managementSlice = createSlice({
  name: 'management',
  //createSlice will infer the state type from the 'initialState'argument
  initialState,
  reducers: {
    resetErrorAction: (state) => {
      delete state.managementError;
    },
    resetCreateServiceState: (state) => {
      delete state.createServiceResponse;
    },
    getServiceState: (state) => {
      delete state.getServiceResponse;
    },
    updateServiceState: (state) => {
      delete state.updateServiceResponse;
    },
    resetDeleteServiceState: (state) => {
      delete state.deleteServiceResponse;
    },
    getServiceByIdState: (state) => {
      delete state.getServiceByIdResponse;
    },
    resetgetParentServiceState :(state) =>{
      delete state.getParentServiceResponse;
    }
  },


  extraReducers: (builder) => {
    builder

      .addCase(createServiceAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.createServiceResponse = action.payload;
      })
      .addCase(createServiceAction.rejected, handleManagementError)

      .addCase(createServiceAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(getServicesAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.getServiceResponse = action.payload;
      })
      .addCase(getServicesAction.rejected, handleManagementError)

      .addCase(getServicesAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(updateServiceAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.updateServiceResponse = action.payload;
      })
      .addCase(updateServiceAction.rejected, handleManagementError)

      .addCase(updateServiceAction.pending, (state) => {
        state.status = "loading";
      })

      .addCase(deleteServiceAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.deleteServiceResponse = action.payload;
      })
      .addCase(deleteServiceAction.rejected, handleManagementError)

      .addCase(deleteServiceAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getServiceByIdAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.getServiceByIdResponse = action.payload;
      })
      .addCase(getServiceByIdAction.rejected, handleManagementError)

      .addCase(getServiceByIdAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(getParentServiceAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.getParentServiceResponse = action.payload;
      })
      .addCase(getParentServiceAction.rejected, handleManagementError)

      .addCase(getParentServiceAction.pending, (state) => {
        state.status = "loading";
      })
      

  }
});
export const { resetErrorAction, resetRegisterStatus,resetCreateServiceState,resetDeleteServiceState } = managementSlice.actions;

//export const { resetErrorAction, gaurduanInformationStatus } = clientSlice.actions;
//other code such as selector can be implemented 'RootState' type 
export default managementSlice.reducer;
export const selectmanagementStatus = (state) => state.management.status;
export const selectmanagementError = (state) => state.management.managementError;
export const selectcreateServiceStatus = (state) => state.management.createServiceResponse;
export const selectgetServiceStatus = (state) => state.management.getServiceResponse;
export const selectupdateServiceStatus = (state) => state.management.updateServiceResponse;
export const selectdeleteServiceStatus = (state) => state.management.deleteServiceResponse;
export const selectgetServiceByIdStatus = (state) => state.management.getServiceByIdResponse;
export const selectgetParentServiceStatus = (state) => state.management.getParentServiceResponse;
