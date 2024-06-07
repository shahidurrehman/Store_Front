import { createSlice } from "@reduxjs/toolkit";
import {
	clientAssociateServiceAction,
	clientContactInformationAction,
	clientDeleteContactAction,
	clientDissociateServiceAction,
	clientGeneralInformationAction,
	clientGetCompaniesByIdAction,
	clientgetTaxAction,
	clientServicesAction,
	clientUpdateCompaniesSectionAction,
	clientUpdateTaxAction,
	getAllClientsAction,
	getClientContactInformationAction,
	getClientGeneralInformationAction,
	getContactByIdAction,
	handleClientError,
	clientDeleteCompanyByIdAction,
} from "./clientActions";

const initialState = {
	status: "idle",
	data: null,
	generalInformationResponse: null,
	gaurduanInformationResponse: null,
	getAllClientsResponse: null,
	contactInformationResponse: null,
	getGeneralInformationResponse: null,
	getClientContactInformationResponse: null,
	clientAssociateServiceResponse: null,
	clientServicesResponse: null,
	clientDissociateServiceResponse: null,
	getContactByIdResponse: null,
	clientdeleteContactResponse: null,
	clientUpdateTaxResponse: null,
	clientTaxDetailsByIdResponse: null,
	clientUpdateCompaniesSectionResponse: null,
	clientGetCompaniesResponse: null,
};

const clientSlice = createSlice({
	name: "client",
	//createSlice will infer the state type from the 'initialState'argument
	initialState,
	reducers: {
		resetErrorAction: (state) => {
			delete state.clientError;
		},
		resetgeneralInformationState: (state) => {
			delete state.generalInformationResponse;
		},
		resetgaurduanInformationStatus: (state) => {
			delete state.gaurduanInformationResponse;
		},
		resetgetAllClientState: (state) => {
			delete state.getAllClientsResponse;
		},
		resetcontactInformationState: (state) => {
			delete state.contactInformationResponse;
		},
		resetgetGeneralInformationState: (state) => {
			delete state.getGeneralInformationResponse;
		},
		resetgetClientContactInformationState: (state) => {
			delete state.getClientContactInformationResponse;
		},
		resetclientAssociateServiceState: (state) => {
			delete state.clientAssociateServiceResponse;
		},
		resetclientServicesState: (state) => {
			delete state.clientServicesResponse;
		},
		resetclientDissociateServiceState: (state) => {
			delete state.clientDissociateServiceResponse;
		},
		resetgetContactByIdStats: (state) => {
			delete state.getContactByIdResponse;
		},
		resetclientDeleteContactStatus: (state) => {
			delete state.clientdeleteContactResponse;
		},
		resetclientUpdateTaxStatus: (state) => {
			delete state.clientUpdateTaxResponse;
		},
		resetclientTaxDetailsByIdStatus: (state) => {
			delete state.clientTaxDetailsByIdResponse;
		},
		resetclientUpdateCompaniesSectionStatus: (state) => {
			delete state.clientUpdateCompaniesSectionResponse;
		},
		resetclientGetCompaniesStatus: (state) => {
			delete state.clientGetCompaniesResponse;
		},

		resetclientDeleteCompaniesStatus: (state) => {
			delete state.clientDeleteCompaniesResponse;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(clientGeneralInformationAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.generalInformationResponse = action.payload;
			})
			.addCase(clientGeneralInformationAction.rejected, handleClientError)

			.addCase(clientGeneralInformationAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(getAllClientsAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.getAllClientsResponse = action.payload;
			})
			.addCase(getAllClientsAction.rejected, handleClientError)

			.addCase(getAllClientsAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(clientContactInformationAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.contactInformationResponse = action.payload;
			})
			.addCase(clientContactInformationAction.rejected, handleClientError)

			.addCase(clientContactInformationAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(getClientGeneralInformationAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.getGeneralInformationResponse = action.payload;
			})
			.addCase(getClientGeneralInformationAction.rejected, handleClientError)

			.addCase(getClientGeneralInformationAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(getClientContactInformationAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.getClientContactInformationResponse = action.payload;
			})
			.addCase(getClientContactInformationAction.rejected, handleClientError)

			.addCase(getClientContactInformationAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(clientAssociateServiceAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.clientAssociateServiceResponse = action.payload;
			})
			.addCase(clientAssociateServiceAction.rejected, handleClientError)

			.addCase(clientAssociateServiceAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(clientServicesAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.clientServicesResponse = action.payload;
			})
			.addCase(clientServicesAction.rejected, handleClientError)

			.addCase(clientServicesAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(clientDissociateServiceAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.clientDissociateServiceResponse = action.payload;
			})
			.addCase(clientDissociateServiceAction.rejected, handleClientError)

			.addCase(clientDissociateServiceAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(getContactByIdAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.getContactByIdResponse = action.payload;
			})
			.addCase(getContactByIdAction.rejected, handleClientError)

			.addCase(getContactByIdAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(clientDeleteContactAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.clientdeleteContactResponse = action.payload;
			})
			.addCase(clientDeleteContactAction.rejected, handleClientError)

			.addCase(clientDeleteContactAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(clientUpdateTaxAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.clientUpdateTaxResponse = action.payload;
			})
			.addCase(clientUpdateTaxAction.rejected, handleClientError)

			.addCase(clientUpdateTaxAction.pending, (state) => {
				state.status = "loading";
			})

			.addCase(clientgetTaxAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.clientTaxDetailsByIdResponse = action.payload;
			})
			.addCase(clientgetTaxAction.rejected, handleClientError)

			.addCase(clientgetTaxAction.pending, (state) => {
				state.status = "loading";
			})
			// UPDATE CLIENT COMPANIES
			.addCase(
				clientUpdateCompaniesSectionAction.fulfilled,
				(state, action) => {
					state.status = "idle";
					state.clientUpdateCompaniesSectionResponse = action.payload;
				}
			)
			.addCase(clientUpdateCompaniesSectionAction.rejected, handleClientError)
			.addCase(clientUpdateCompaniesSectionAction.pending, (state) => {
				state.status = "loading";
			})
			// GET CLIENT COMPANIES
			.addCase(clientGetCompaniesByIdAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.clientGetCompaniesResponse = action.payload;
			})
			.addCase(clientGetCompaniesByIdAction.rejected, handleClientError)
			.addCase(clientGetCompaniesByIdAction.pending, (state) => {
				state.status = "loading";
			})
			// Delete CLIENT COMPANY
			.addCase(clientDeleteCompanyByIdAction.fulfilled, (state, action) => {
				state.status = "idle";
				state.clientUpdateCompaniesResponse = action.payload;
			})
			.addCase(clientDeleteCompanyByIdAction.rejected, handleClientError)
			.addCase(clientDeleteCompanyByIdAction.pending, (state) => {
				state.status = "loading";
			});
	},
});

export const {
	resetErrorAction,
	generalInformationStatus,
	resetgeneralInformationState,
	resetclientDissociateServiceState,
	resetclientAssociateServiceState,
	resetcontactInformationState,
	resetgetClientContactInformationState,
	resetclientDeleteContactStatus,
	resetgetContactByIdStats,
	resetclientUpdateTaxStatus,
	resetclientTaxDetailsByIdStatus,
} = clientSlice.actions;

export default clientSlice.reducer;
export const selectClientStatus = (state) => state.client.status;
export const selectClientError = (state) => state.client.clientError;
export const selectgaurduanInformationStatus = (state) =>
	state.client.gaurduanInformationResponse;
export const selectgeneralInformationStatus = (state) =>
	state.client.generalInformationResponse;
export const selectgetAllClientsStatus = (state) =>
	state.client.getAllClientsResponse;
export const selectcontactInformationStatus = (state) =>
	state.client.contactInformationResponse;
export const selectgetGeneralInformationStatus = (state) =>
	state.client.getGeneralInformationResponse;
export const selectgetClientContactInformationStatus = (state) =>
	state.client.getClientContactInformationResponse;
export const selectclientAssociateServiceStatus = (state) =>
	state.client.clientAssociateServiceResponse;
export const selectclientServicesStatus = (state) =>
	state.client.clientServicesResponse;
export const selectclientDissociateServiceStatus = (state) =>
	state.client.clientDissociateServiceResponse;
export const selectgetContactByIdStatus = (state) =>
	state.client.getContactByIdResponse;
export const selectclientDeleteContactStatus = (state) =>
	state.client.clientdeleteContactResponse;
export const selectclientUpdateTaxStatus = (state) =>
	state.client.clientUpdateTaxResponse;
export const selectclientTaxDetailsByIdStatus = (state) =>
	state.client.clientTaxDetailsByIdResponse;
// Client Companies
export const selectClientUpdateCompaniesSectionStatus = (state) =>
	state.client.clientUpdateCompaniesSectionResponse;
export const selectClientCompanies = (state) =>
	state.client.clientGetCompaniesResponse;

