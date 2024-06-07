import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../common/api/apiClient";

export const handleStaffError = (state, action) => {
  state.status = "failed";
  state.staffError = action.payload;
};

export const basicInformationAction = createAsyncThunk(
  "staff/basicInformationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/create-update-user`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const gaurduanInformationAction = createAsyncThunk(
  "staff/gaurdianInformationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/add-gaurdian-information`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const nextOfKinInformationAction = createAsyncThunk(
  "staff/nextOfKinInformationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/add-nextofkin-infromtion`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const otherInformationAction = createAsyncThunk(
  "staff/otherInformationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/update-other-information`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePastExperienceAction = createAsyncThunk(
  "staff/pastExperienceAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/update-past-experience`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const educationAction = createAsyncThunk(
  "staff/educationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/update-education`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const bankDetailAction = createAsyncThunk(
  "staff/bankDetailAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/update-bank-account-details`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginDetailAction = createAsyncThunk(
  "staff/loginDetailAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/change-email`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBasicInformationAction = createAsyncThunk(
  "staff/getBasicInformationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `/Auth/get-user-by-id/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getGaurdianInformationAction = createAsyncThunk(
  "staff/getGaurdianInformationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `/Auth/get-gaurdian-information/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getnextOfKinInformationAction = createAsyncThunk(
  "staff/getnextOfKinInformationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `/Auth/get-nextofkin-information/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getOtherformationAction = createAsyncThunk(
  "staff/getOtherformationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `/Auth/get-other-information-id/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBankAccountDetailsAction = createAsyncThunk(
  "staff/getBankAccountDetailsAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `/Auth/get-bank-account-details-by-user-id/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getPastExperienceAction = createAsyncThunk(
//   "staff/getBankAccountDetailsAction",
//   async (state, { rejectWithValue }) => {
//     console.log("test",state)
//     try {
//       const res = await sendRequest("GET", `/Auth/get-past-experience-by-id/${state}`);
//       return res;
//     }
//     catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );


export const getEducationDetailsAction = createAsyncThunk(
  "staff/getEducationDetailsAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/get-education-details-by-id/${state}`);
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

export const statusOfEmploymentAction = createAsyncThunk(
  "staff/statusOfEmploymentAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/update-employment-and-qualification`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getStatusOfEmploymentAction = createAsyncThunk(
  "staff/getStatusOfEmploymentAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `/Auth/get-employment-and-qualification/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserLoginDetailAction = createAsyncThunk(
  "staff/getUserLoginDetailAction",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await sendRequest("GET", `/Auth/get-user-login-detail?userId=${userId}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCreateUserLoginAction = createAsyncThunk(
  "staff/getCreateUserLoginAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/create-user-login`, state);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPastExperienceAction = createAsyncThunk(
  "staff/getPastExperienceAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("POST", `/Auth/get-past-experience-by-id/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteEducationAction = createAsyncThunk(
  "staff/deleteEducationAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("DELETE", `/Auth/delete-education/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const deletePastExperienceAction = createAsyncThunk(
  "staff/deletePastExperienceAction",
  async (state, { rejectWithValue }) => {
    try {
      const res = await sendRequest("DELETE", `/Auth/delete-past-experience/${state}`);
      return res;
    }
    catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);














