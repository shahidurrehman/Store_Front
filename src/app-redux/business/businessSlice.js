import { createSlice } from "@reduxjs/toolkit";
import { createBusinessLocationAction, deleteBusinessLocationAction, getBusinessLocationAction, getBusinessLocationByIdAction, getBusinessTaxStructureAction, handleBusinessError, updateBusinessLocationAction } from "./businessActions";

const initialState = {
    status: "idle",
    data: null,
    createBusinessLocationResponse: null,
    updateBusinessLocationResponse: null,
    getBusinessLocationResponse: null,
    deleteBusinessLocationResponse:null,
    getBusinessLocationByIdResponse:null,
    getBusinessTaxStructureResponse:null,

}

const businessSlice = createSlice({
    name: 'business',
    //createSlice will infer the state type from the 'initialState'argument
    initialState,
    reducers: {
        resetErrorAction: (state) => {
            delete state.businessError;
        },
        resetcreateBusinessLocationResponse: (state) => {
            delete state.createBusinessLocationResponse
        },
        resetupdateBusinessLocationState: (state) => {
            delete state.updateBusinessLocationResponse
        },
        resetgetBusinessLocationState: (state) => {
            delete state.getBusinessLocationResponse
        },
        resetdeleteBusinessLocationState:(state)=>{
            delete state.deleteBusinessLocationResponse
        },
        resetgetBusinessLocationByIdState:(state)=>{
            delete state.getBusinessLocationByIdResponse;
        },
        resetbusniessTaxStructreStatus:(state)=>{
            delete state.getBusinessTaxStructureResponse;
        }
    },

    extraReducers: (builder) => {
        builder

            .addCase(createBusinessLocationAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.createBusinessLocationResponse = action.payload;
            })
            .addCase(createBusinessLocationAction.rejected, handleBusinessError)

            .addCase(createBusinessLocationAction.pending, (state) => {
                state.status = "loading";
            })



            .addCase(updateBusinessLocationAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.updateBusinessLocationResponse = action.payload;
            })
            .addCase(updateBusinessLocationAction.rejected, handleBusinessError)

            .addCase(updateBusinessLocationAction.pending, (state) => {
                state.status = "loading";
            })



            .addCase(getBusinessLocationAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.getBusinessLocationResponse = action.payload;
            })
            .addCase(getBusinessLocationAction.rejected, handleBusinessError)

            .addCase(getBusinessLocationAction.pending, (state) => {
                state.status = "loading";
            })



            .addCase(deleteBusinessLocationAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.deleteBusinessLocationResponse = action.payload;
            })
            .addCase(deleteBusinessLocationAction.rejected, handleBusinessError)

            .addCase(deleteBusinessLocationAction.pending, (state) => {
                state.status = "loading";
            })



            .addCase(getBusinessLocationByIdAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.getBusinessLocationByIdResponse = action.payload;
            })
            .addCase(getBusinessLocationByIdAction.rejected, handleBusinessError)

            .addCase(getBusinessLocationByIdAction.pending, (state) => {
                state.status = "loading";
            })


            .addCase(getBusinessTaxStructureAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.getBusinessTaxStructureResponse = action.payload;
            })
            .addCase(getBusinessTaxStructureAction.rejected, handleBusinessError)

            .addCase(getBusinessTaxStructureAction.pending, (state) => {
                state.status = "loading";
            })

    }
});

export const { resetErrorAction,resetgetBusinessLocationByIdState } = businessSlice.actions;

//export const { resetErrorAction, gaurduanInformationStatus } = clientSlice.actions;
//other code such as selector can be implemented 'RootState' type 
export default businessSlice.reducer;
export const selectbusniessStatus = (state) => state.business.status;
export const selectcreateBusinessLocationStatus = (state) => state.business.createBusinessLocationResponse;
export const selectupdateBusinessLocationStatus = (state) => state.business.updateBusinessLocationResponse;
export const selectgetBusinessLocationStatus = (state) => state.business.getBusinessLocationResponse;
export const selectdeleteBusinessLocationStatus =(state)=>state.business.deleteBusinessLocationResponse;
export const selectgetBusinessLocationByIdStatus =(state)=>state.business.getBusinessLocationByIdResponse;
export const selectbusniessTaxStructureStatus=(state)=>state.busniess.getBusinessTaxStructureResponse;

