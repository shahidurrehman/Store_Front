import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction, registerAction, forgotPasswordAction, logOutAction,
  handleRegisterFailed, handleForgotPasswordFailed,
  handleloginFailed, handleActivationFailed, activationAction,
  varifiedNumberAction,
  verifyCodeAction,
  handleVerifiedCodeFailed,
  verifyEmailAction,
  handleVerifyEmailFailed,
  changePasswordAction,
  changeEmailAction,
  completeForgotPasswordAction,
  getProfileAction,
  resetPasswordAction,
  addUserPasswordAction,
  completeEmailVerificationAction,
  updateBusniessDetailsAction,
  getBusniessDetailsAction,

} from "./authActions";


const initialState = {
  status: "idle",
  data: {},
  registerResponse: {},
  verifyResponse: {},
  forgotPasswordResponse: {},
  resetPasswordResponse: {},
  activationResponse: {},
  changePasswordResponse: null,
  changeEmailResponse:null,
  completeForgotPasswordResponse:null,
  getProfileResponse:null,
  resetPasswordResponse:null,
  addUserPasswordResponse:null,
  completeEmailVerificationResponse:null,
  updateBusniessDetailsResponse:null,
  getBusniessDetailsResponse:null
}

const authSlice = createSlice({
  name: 'auth',
  //createSlice will infer the state type from the 'initialState'argument
  initialState,
  reducers: {
    resetErrorAction: (state) => {
      delete state.authError;
    },
    resetRegisterStatus: (state) => {
      delete state.registerResponse;
    },
    changePasswordStatus :(state)=>{
      delete state.changePasswordResponse;
    },
    resetForgotPasswordAction:(state)=>{
      delete state.forgotPasswordResponse;
    },
    resetcompleteForgotPasswordAction:(state)=>{
      delete state.completeForgotPasswordResponse;
    },
    getProfileStatus:(state)=>{
      delete state.getProfileResponse;
    },
    resetPasswordStatus:(state)=>{
      delete state.resetPasswordResponse;
    },
    addUserPasswordStatus:(state)=>{
      delete state.addUserPasswordResponse;
    },
    completeEmailVerificationStatus:(state)=>{
      delete state.completeEmailVerificationResponse;
    },
    updateBusniessDetailsStatus:(state)=>{
      delete state.updateBusniessDetailsResponse;
    },
    getBusniessDetailsStatus:(state)=>{
      delete state.getBusniessDetailsResponse;
    }
  },


  extraReducers: (builder) => {
    builder
      
    .addCase(loginAction.fulfilled, (state, action) => {
        state.status = "idle";
        localStorage.setItem('aic-pm-auth-user', JSON.stringify(action.payload.data));
        state.data = action.payload.data;

      })
      .addCase(loginAction.rejected, handleloginFailed)

      .addCase(loginAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(logOutAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logOutAction.fulfilled, (state) => {
        state.status = "idle";
        delete state.data;
        localStorage.removeItem('aic-pm-auth-user');
        window.location.reload();
      })
      .addCase(logOutAction.rejected, (state) => {
        state.status = "failed";
      })


      .addCase(registerAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.registerResponse = action.payload;

      })
      .addCase(registerAction.rejected, handleRegisterFailed)

      .addCase(registerAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(verifyEmailAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.verifyEmailResponse = action.payload;

      })
      .addCase(verifyEmailAction.rejected, handleVerifyEmailFailed)

      .addCase(verifyEmailAction.pending, (state) => {
        state.status = "loading";
      })

      .addCase(forgotPasswordAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.forgotPasswordResponse = action.payload;

      })
      .addCase(forgotPasswordAction.rejected, handleForgotPasswordFailed)

      .addCase(forgotPasswordAction.pending, (state) => {
        state.status = "loading";
      })

      .addCase(activationAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.activationResponse = action.payload;
      })
      .addCase(activationAction.rejected, handleActivationFailed)

      .addCase(activationAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(verifyCodeAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.verifyCodeResponse = action.payload;
      })
      .addCase(verifyCodeAction.rejected, handleVerifiedCodeFailed)

      .addCase(verifyCodeAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(changePasswordAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.changePasswordResponse = action.payload;
      })
      .addCase(changePasswordAction.rejected, handleVerifiedCodeFailed)

      .addCase(changePasswordAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(changeEmailAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.changeEmailResponse = action.payload;
      })
      .addCase(changeEmailAction.rejected, handleVerifiedCodeFailed)

      .addCase(changeEmailAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(completeForgotPasswordAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.completeForgotPasswordResponse = action.payload;
        console.log("action.payload",action.payload);
      })
      .addCase(completeForgotPasswordAction.rejected, handleVerifiedCodeFailed)

      .addCase(completeForgotPasswordAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getProfileAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.getProfileResponse = action.payload;
      })
      .addCase(getProfileAction.rejected, handleVerifiedCodeFailed)

      .addCase(getProfileAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(resetPasswordAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.resetPasswordResponse = action.payload;
      })
      .addCase(resetPasswordAction.rejected, handleVerifiedCodeFailed)

      .addCase(resetPasswordAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(addUserPasswordAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.addUserPasswordResponse = action.payload;
      })
      .addCase(addUserPasswordAction.rejected, handleVerifiedCodeFailed)

      .addCase(addUserPasswordAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(completeEmailVerificationAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.completeEmailVerificationResponse = action.payload;
      })
      .addCase(completeEmailVerificationAction.rejected, handleVerifiedCodeFailed)

      .addCase(completeEmailVerificationAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(updateBusniessDetailsAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.updateBusniessDetailsResponse = action.payload;
      })
      .addCase(updateBusniessDetailsAction.rejected, handleVerifiedCodeFailed)

      .addCase(updateBusniessDetailsAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getBusniessDetailsAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.getBusniessDetailsResponse = action.payload;
      })
      .addCase(getBusniessDetailsAction.rejected, handleVerifiedCodeFailed)

      .addCase(getBusniessDetailsAction.pending, (state) => {
        state.status = "loading";
      })

  }
});

export const { resetErrorAction, resetRegisterStatus,resetForgotPasswordStatus,resetForgotPasswordAction,resetcompleteForgotPasswordAction } = authSlice.actions;
//other code such as selector can be implemented 'RootState' type 
export default authSlice.reducer
export const selectStatus = (state) => state.auth.status;
export const selectResetEmail = (state) => state.auth.data && state.auth.data.user && state.auth.data.user.email;
export const selectAuthError = (state) => state.auth.authError;
export const selectRegisterStatus = (state) => state.auth.registerResponse;
export const selectEmailStatus = (state) => state.auth.verifyEmailResponse;
export const selectActivationStatus = (state) => state.auth.activationResponse;
export const selectVarifyCodeStatus = (state) => state.auth.verifyCodeResponse;
export const selectLoginStatus = (state) => state.auth.data;
export const selectUser = (state) => state.auth.data;
export const selectChangePasswordStatus =(state) => state.auth.changePasswordResponse;
export const selectChangeEmailStatus =(state) =>state.auth.changeEmailResponse;
export const selectForgotPasswordStatus =(state) =>state.auth.forgotPasswordResponse;
export const selectCompleteForgotPasswordStatus =(state) =>state.auth.completeForgotPasswordResponse;
export const selectgetProfileStatus =(state) =>state.auth.getProfileResponse;
export const selectresetPasswordStatus =(state) =>state.auth.resetPasswordResponse;
export const selectaddUserPasswordStatus = (state) => state.auth.addUserPasswordResponse;
export const selectcompleteEmailVerificationStatus = (state) => state.auth.completeEmailVerificationResponse;
export const selectUpdateBusniessDetailsStatus =(state)=> state.auth.updateBusniessDetailsResponse;
export const selectgetBusniessDetailsStatus =(state)=>state.auth.getBusniessDetailsResponse;
export const isLogin = (state) => {
  return Boolean(state.auth.data.token);

};
