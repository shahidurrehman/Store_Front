import { createSlice } from "@reduxjs/toolkit";
import { setDateTimeFormat } from "../../common/utils/app.util";
import {
  addUserPasswordAction,
  bankDetailAction,
  basicInformationAction, 
  deleteEducationAction, deletePastExperienceAction, 
  educationAction, gaurduanInformationAction, getAllUsersAction, 
  getBankAccountDetailsAction, getBasicInformationAction, 
  getCreateUserLoginAction, getEducationDetailsAction, getGaurdianInformationAction, 
  getnextOfKinInformationAction, getOtherformationAction, 
  getPastExperienceAction, getStatusOfEmploymentAction, getUserByIdAction, 
  getUserLoginDetailAction, handleStaffError, loginDetailAction, 
  nextOfKinInformationAction, otherInformationAction, updatePastExperienceAction, statusOfEmploymentAction, userGetAction,
} from "./staffActions";


const initialState = {
  status: "idle",
  data: null,
  basicInformationResponse: null,
  gaurduanInformationResponse: null,
  nextOfKinInformationResponse: null,
  bankDetailResponse: null,
  otherInformationResponse: null,
  pastExperienceResponse: null,
  getBasicInformationResponse: null,
  getGaurdianInformationResponse: null,
  getNextOfKinInformationResponse: null,
  getOtherInformationResponse: null,
  getBankAccountDetailsResponse: null,
  getPastExperienceResponse: null,
  getEducationDetailsResponse: null,
  getAllUsersResponse: null,
  statusOfEmploymentResponse: null,
  getStatusOfEmploymentResponse: null,
  getUserLoginDetailResponse: null,
  getCreateUserLoginResponse: null,
  deleteEducationResponse: null,
  deletePastExperienceResponse:null,
}

const staffSlice = createSlice({
  name: 'staff',
  //createSlice will infer the state type from the 'initialState'argument
  initialState,
  reducers: {
    resetErrorAction: (state) => {
      delete state.staffError;
    },
    resetbasicInformationAction: (state) => {
      delete state.basicInformationResponse;
    },
    resetgaurduanInformationAction: (state) => {
      delete state.gaurduanInformationResponse;
    },
    resetnextOfKinInformationAction: (state) => {
      delete state.nextOfKinInformationResponse;
    },
    resetotherInformationAction: (state) => {
      delete state.otherInformationResponse;
    },
    resetpastExperienceAction: (state) => {
      delete state.pastExperienceResponse;
    },
    reseteducationAction: (state) => {
      delete state.educationResponse;
    },
    resetbankDetailAction: (state) => {
      delete state.bankDetailResponse;
    },
    loginDetailState: (state) => {
      delete state.loginDetailResponse;
    },
    userGetstate: (state) => {
      delete state.getBasicInformationResponse;
    },
    resetgetGaurdianInformationAction: (state) => {
      delete state.getGaurdianInformationResponse;
    },
    resetgetNextOfKinInformationAction: (state) => {
      delete state.getNextOfKinInformationResponse;
    },
    resetgetOtherInformationAction: (state) => {
      delete state.getOtherInformationResponse;
    },
    resetgetBankAccountDetailsAction: (state) => {
      delete state.getBankAccountDetailsResponse;
    },
    resetgetPastExperienceAction: (state) => {
      delete state.getPastExperienceResponse;
    },
    resetgetEducationDetailsAction: (state) => {
      delete state.getEducationDetailsResponse;
    },

    getAllUsersState: (state) => {
      delete state.getAllUsersResponse;
    },
    resetstatusOfEmploymentAction: (state) => {
      delete state.statusOfEmploymentResponse;
    },
    resetgetStatusOfEmploymentAction: (state) => {
      delete state.getStatusOfEmploymentResponse;
    },
    getUserLoginDetailState: (state) => {
      delete state.getUserLoginDetailResponse;
    },
    getCreateUserLoginState: (state) => {
      delete state.getCreateUserLoginResponse;
    },
    resetdeleteEducationAction: (state) => {
      delete state.deleteEducationResponse;
    },
    resetdeletPastExperienceAction:(state)=>{
      delete state.deletePastExperienceResponse;
    }

  },


  extraReducers: (builder) => {
    builder

      .addCase(basicInformationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.basicInformationResponse = action.payload;

      })
      .addCase(basicInformationAction.rejected, handleStaffError)

      .addCase(basicInformationAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(gaurduanInformationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.gaurduanInformationResponse = action.payload;

      })
      .addCase(gaurduanInformationAction.rejected, handleStaffError)

      .addCase(gaurduanInformationAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(nextOfKinInformationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.nextOfKinInformationResponse = action.payload;

      })
      .addCase(nextOfKinInformationAction.rejected, handleStaffError)

      .addCase(nextOfKinInformationAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(otherInformationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.otherInformationResponse = action.payload;

      })
      .addCase(otherInformationAction.rejected, handleStaffError)

      .addCase(otherInformationAction.pending, (state) => {
        state.status = "loading";
      })

      .addCase(updatePastExperienceAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.updatePastExperienceAction = action.payload;
      })
      .addCase(updatePastExperienceAction.rejected, handleStaffError)
      .addCase(updatePastExperienceAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(educationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.educationResponse = action.payload;

      })
      .addCase(educationAction.rejected, handleStaffError)

      .addCase(educationAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(bankDetailAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.bankDetailResponse = action.payload;

      })
      .addCase(bankDetailAction.rejected, handleStaffError)

      .addCase(bankDetailAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(loginDetailAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.loginDetailResponse = action.payload;

      })
      .addCase(loginDetailAction.rejected, handleStaffError)

      .addCase(loginDetailAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(getBasicInformationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getBasicInformationResponse = action.payload;

      })
      .addCase(getBasicInformationAction.rejected, handleStaffError)

      .addCase(getBasicInformationAction.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getGaurdianInformationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getGaurdianInformationResponse = action.payload;

      })
      .addCase(getGaurdianInformationAction.rejected, handleStaffError)

      .addCase(getGaurdianInformationAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(getnextOfKinInformationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getNextOfKinInformationResponse = action.payload;

      })
      .addCase(getnextOfKinInformationAction.rejected, handleStaffError)

      .addCase(getnextOfKinInformationAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getOtherformationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getOtherInformationResponse = action.payload;

      })
      .addCase(getOtherformationAction.rejected, handleStaffError)

      .addCase(getOtherformationAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getBankAccountDetailsAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getBankAccountDetailsResponse = action.payload;

      })
      .addCase(getBankAccountDetailsAction.rejected, handleStaffError)

      .addCase(getBankAccountDetailsAction.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getEducationDetailsAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getEducationDetailsResponse = action.payload;

      })
      .addCase(getEducationDetailsAction.rejected, handleStaffError)

      .addCase(getEducationDetailsAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getAllUsersAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getAllUsersResponse = action.payload;

      })
      .addCase(getAllUsersAction.rejected, handleStaffError)

      .addCase(getAllUsersAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(statusOfEmploymentAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.statusOfEmploymentResponse = action.payload;

      })
      .addCase(statusOfEmploymentAction.rejected, handleStaffError)

      .addCase(statusOfEmploymentAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(getStatusOfEmploymentAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getStatusOfEmploymentResponse = action.payload;

      })
      .addCase(getStatusOfEmploymentAction.rejected, handleStaffError)

      .addCase(getStatusOfEmploymentAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getUserLoginDetailAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getUserLoginDetailResponse = action.payload;

      })
      .addCase(getUserLoginDetailAction.rejected, handleStaffError)

      .addCase(getUserLoginDetailAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getCreateUserLoginAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getCreateUserLoginResponse = action.payload;

      })
      .addCase(getCreateUserLoginAction.rejected, handleStaffError)

      .addCase(getCreateUserLoginAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(getPastExperienceAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getPastExperienceResponse = action.payload;

      })
      .addCase(getPastExperienceAction.rejected, handleStaffError)

      .addCase(getPastExperienceAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(deleteEducationAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.deleteEducationResponse = action.payload;

      })
      .addCase(deleteEducationAction.rejected, handleStaffError)

      .addCase(deleteEducationAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(deletePastExperienceAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.deletePastExperienceResponse = action.payload;

      })
      .addCase(deletePastExperienceAction.rejected, handleStaffError)

      .addCase(deletePastExperienceAction.pending, (state) => {
        state.status = "loading";
      })






  }
});

export const { resetErrorAction, resetbasicInformationAction, resetgaurduanInformationAction, resetnextOfKinInformationAction, resetbankDetailAction,resetgetGaurdianInformationAction,resetgetPastExperienceAction,resetgetEducationDetailsAction,reseteducationAction,resetdeleteEducationAction,resetpastExperienceAction,resetdeletPastExperienceAction } = staffSlice.actions;
//export const { resetErrorAction, gaurduanInformationStatus } = staffSlice.actions;
//other code such as selector can be implemented 'RootState' type 
export default staffSlice.reducer;

export const selectStaffError = (state) => state.staff.staffError;
export const selectStaffStatus = (state) => state.staff.status;
export const selectBasicInformationStatus = (state) => state.staff.basicInformationResponse;
export const selectgaurduanInformationStatus = (state) => state.staff.gaurduanInformationResponse;
export const selectnextOfKinInformationStatus = (state) => state.staff.nextOfKinInformationResponse;
export const selectotherInformationStatus = (state) => state.staff.otherInformationResponse;
export const selectstatusOfEmploymentStatus = (state) => state.staff.statusOfEmploymentResponse;
export const selectpastExperienceStatus = (state) => state.staff.pastExperienceResponse;
export const selecteducationStatus = (state) => state.staff.educationResponse;
export const selectbankDetailStatus = (state) => state.staff.bankDetailResponse;
export const selectloginDetailStatus = (state) => state.staff.loginDetailResponse;
export const selectuserGetStatus = (state) => state.staff.getBasicInformationResponse;
export const selectgetGaurdianInformationStatus = (state) => state.staff.getGaurdianInformationResponse;
export const selectgetNextOfKinInformationStatus = (state) => state.staff.getNextOfKinInformationResponse;
export const selectgetOtherInformationStatus = (state) => state.staff.getOtherInformationResponse;
export const selectgetBankAccountDetailsStatus = (state) => state.staff.getBankAccountDetailsResponse;
export const selectgetPastExperienceStatus = (state) => state.staff.getPastExperienceResponse;
export const selectgetEducationDetailsStatus = (state) => state.staff.getEducationDetailsResponse;
export const selectgetAllUsersStatus = (state) => state.staff.getAllUsersResponse;
export const selectgetStatusOfEmploymentStatus = (state) => state.staff.getStatusOfEmploymentResponse;
export const selectgetUserLoginDetailStatus = (state) => state.staff.getUserLoginDetailResponse;
export const selectgetCreateUserLoginStatus = (state) => state.staff.getCreateUserLoginResponse;
export const selectDeleteEducationStatus = (state) => state.staff.deleteEducationResponse;
export const selectDeletePastExperienceStatus =(state)=> state.staff.deletePastExperienceResponse;
