import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../common/api/apiClient";

export const loginAction = createAsyncThunk(
  "auth/loginAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/login`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleloginFailed = (state, action) => {
  state.status = "failed";
  state.authError = action.payload;
};

export const logOutAction = createAsyncThunk(
  "auth/logOutAction",
  async () => {
    // const res = await sendRequest("POST", "/accounts/logout", {
    //   headers: {
    //     "Authorization": "application/json",
    //   }
    // });
    return null;
  });

export const verifyEmailAction = createAsyncThunk(
  "auth/verifyEmailAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", "Auth/create-user-login", state);
      return res;

    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleVerifyEmailFailed = (state, action) => {
  state.status = "failed";
  state.authError = action.payload;
};

export const registerAction = createAsyncThunk(
  "auth/registerAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", "/Auth/create-update-user", state);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleRegisterFailed = (state, action) => {
  state.status = "failed";
  state.authError = action.payload;
};

export const forgotPasswordAction = createAsyncThunk(
  "auth/forgotPasswordAction",
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", "auth/forgot-password", { email });
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);

    }
  }
);

export const completeForgotPasswordAction = createAsyncThunk(
  "auth/completeForgotPasswordAction",
  async (state, { rejectWithValue }) => {
    try {

      const res = await sendRequest("POST", "/Auth/complete-forgot-password", state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleForgotPasswordFailed = (state, action) => {
  state.status = "failed";
  state.authError = action.payload;
};

export const activationAction = createAsyncThunk(
  "auth/activationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", "accounts/activate", state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleActivationFailed = (state, action) => {
  state.status = "failed";
  state.authError = action && action.payload;
};

export const verifyCodeAction = createAsyncThunk(
  "auth/verifyCodeAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", "accounts/verified", state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const changePasswordAction = createAsyncThunk(
  "auth/changePasswordAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", "/User/change-password", state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const changeEmailAction = createAsyncThunk(
  "auth/changeEmailAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", "/Auth/change-email", state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProfileAction = createAsyncThunk(
  "auth/getProfileAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", "/Auth/get-profile", state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const resetPasswordAction = createAsyncThunk(
  "auth/resetPasswordAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", "/Auth/reset-password", state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const completeEmailVerificationAction = createAsyncThunk(
  "auth/completeEmailVerificationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/complete-email-verification`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const addUserPasswordAction = createAsyncThunk(
  "auth/addUserPasswordAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/add-user-password`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const updateBusniessDetailsAction = createAsyncThunk(
  "auth/updateBusniessDetailsAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `User/update-business-details`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBusniessDetailsAction = createAsyncThunk(
  "auth/getBusniessDetailsAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `User/get-business-details`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);








export const handleVerifiedCodeFailed = (state, action) => {
  state.status = "failed";
  state.authError = action.payload;
};






