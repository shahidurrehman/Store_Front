import { createSlice } from "@reduxjs/toolkit";
import { createTaskAction, getAllTaskAction, getTaskAction, handleTaskError, updateTaskStatusAction } from "./taskActions";

const initialState = {
  status: "idle",
  data: null,
  createTaskResponse: null,
  getTaskResponse: null,
  getAlltaskResponse: null,
  updateTaskStatusResponse: null,
}

const taskSlice = createSlice({
  name: 'task',
  //createSlice will infer the state type from the 'initialState'argument
  initialState,
  reducers: {
    resetErrorAction: (state) => {
      delete state.taskError;
    },
    generalInformationState: (state) => {
      delete state.generalInformationResponse;
    },
    createTaskState: (state) => {
      delete state.createTaskResponse;
    },
    getTaskState: (state) => {
      delete state.getTaskResponse;
    },
    getAllTaskState: (state) => {
      delete state.getAlltaskResponse;
    },
    updateTaskStatusState: (state) => {
      delete state.updateTaskStatusResponse;
    }

  },


  extraReducers: (builder) => {
    builder

      .addCase(createTaskAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.createTaskResponse = action.payload;

      })
      .addCase(createTaskAction.rejected, handleTaskError)

      .addCase(createTaskAction.pending, (state) => {
        state.status = "loading";
      })



      .addCase(getTaskAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getTaskResponse = action.payload;

      })
      .addCase(getTaskAction.rejected, handleTaskError)

      .addCase(getTaskAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(getAllTaskAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.getAlltaskResponse = action.payload;

      })
      .addCase(getAllTaskAction.rejected, handleTaskError)

      .addCase(getAllTaskAction.pending, (state) => {
        state.status = "loading";
      })


      .addCase(updateTaskStatusAction.fulfilled, (state, action) => {
        state.status = "idle";

        state.updateTaskStatusResponse = action.payload;

      })
      .addCase(updateTaskStatusAction.rejected, handleTaskError)

      .addCase(updateTaskStatusAction.pending, (state) => {
        state.status = "loading";
      })


  }
});

export const { resetErrorAction, generalInformationStatus } = taskSlice.actions;
//export const { resetErrorAction, gaurduanInformationStatus } = clientSlice.actions;
//other code such as selector can be implemented 'RootState' type 
export default taskSlice.reducer;

export const selecttaskError = (state) => state.task.taskError;
export const selectTaskStatus = (state) => state.task.status;
export const selectgaurduanInformationStatus = (state) => state.client.gaurduanInformationResponse;
export const selectcreateTaskstatus = (state) => state.task.createTaskResponse;
export const selectgetTaskstatus = (state) => state.task.getTaskResponse;
export const selectgetAllTaskstatus = (state) => state.task.getAlltaskResponse;
export const selectupdateTaskstatus = (state) => state.task.updateTaskStatusResponse;