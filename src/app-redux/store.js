import { reduxBatch } from "@manaflair/redux-batch";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app-redux/auth/authSlice";
import commonReducer from "../app-redux/common/commonSlice";
import businessReducer from "./business/businessSlice";
import clientReducer from "./client/clientSlice";
import invoiceReducer from "./invoice/invoiceSlice";
import { loadState } from "./localstorage";
import managementReducer from "./management/managementSlice";
import staffReducer from "./staff/staffSlice";
import taskReducer from "./task/taskSlice";

const reducer = {
	auth: userReducer,
	common: commonReducer,
	management: managementReducer,
	staff: staffReducer,
	client: clientReducer,
	task: taskReducer,
	invoice: invoiceReducer,
	business: businessReducer,
};
const preloadedState = loadState();

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	// devTools: process.env.NODE_ENV !== 'production',
	devTools: process.env.NODE_ENV !== "production",
	preloadedState,
	enhancers: [reduxBatch],
});

export default store;
