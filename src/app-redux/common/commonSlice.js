import { createSlice } from "@reduxjs/toolkit";
import { getAllClientsAction, getAllUsersAction, handleCommonError } from "./commonActions";


const initialState = {
    status: "idle",
    data: null,
    getAllClientResponse: null,
    getAllUserResponse: null,
}

const commonSlice = createSlice({
    name: 'common',
    //createSlice will infer the state type from the 'initialState'argument
    initialState,
    reducers: {
        resetErrorAction: (state) => {
            delete state.commonError;
        },
        getAllClientState: (state) => {
            delete state.getAllClientResponse;
        },
        getAllUserState:(state)=>{
            delete state.getAllUserResponse;
        }

    },


    extraReducers: (builder) => {
        builder

            .addCase(getAllClientsAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.getAllClientResponse = action.payload;
            })
            .addCase(getAllClientsAction.rejected, handleCommonError)

            .addCase(getAllClientsAction.pending, (state) => {
                state.status = "loading";
            })



            .addCase(getAllUsersAction.fulfilled, (state, action) => {
                state.status = "idle";

                state.getAllUserResponse = action.payload;

            })
            .addCase(getAllUsersAction.rejected, handleCommonError)

            .addCase(getAllUsersAction.pending, (state) => {
                state.status = "loading";
            })


    }
});

export const { resetErrorAction } = commonSlice.actions;
//export const { resetErrorAction, gaurduanInformationStatus } = clientSlice.actions;
//other code such as selector can be implemented 'RootState' type 
export default commonSlice.reducer;

export const selectClientError = (state) => state.client.clientError;
export const selectgetAllClientStatus = (state) => state.common.getAllClientResponse;
export const selectgetAllUserStatus = (state) => state.common.getAllUserResponse
