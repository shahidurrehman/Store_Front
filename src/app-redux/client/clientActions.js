import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../common/api/apiClient";

export const handleClientError = (state, action) => {
	state.status = "failed";
	state.clientError = action.payload;
};

export const clientGeneralInformationAction = createAsyncThunk(
	"client/clientGeneralInformationAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest(
				"POST",
				`/Client/update-general-info`,
				state
			);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientContactInformationAction = createAsyncThunk(
	"client/clientContactInformationAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest(
				"POST",
				`/Client/create-update-contact`,
				state
			);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

// Get Actions

export const getAllClientsAction = createAsyncThunk(
	"client/getAllClientsAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest("POST", `/Client`, state);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const getClientGeneralInformationAction = createAsyncThunk(
	"client/getClientGeneralInformationAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest(
				"GET",
				`/Client/get-general-info-by-id/${state}`
			);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const getClientContactInformationAction = createAsyncThunk(
	"client/getClientContactInformationAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest(
				"GET",
				`/Client/get-contact-details-by-client-id/${state}`
			);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientAssociateServiceAction = createAsyncThunk(
	"client/clientAssociateServiceAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest("POST", `/Client/associate-service`, state);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientDissociateServiceAction = createAsyncThunk(
	"client/clientDissociateServiceAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest(
				"POST",
				`/Client/dissociate-service`,
				state
			);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientServicesAction = createAsyncThunk(
	"client/clientServicesAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest("GET", `/Client/${state}/services`);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const getContactByIdAction = createAsyncThunk(
	"client/getContactByIdAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest(
				"POST",
				`/Client/get-contact-by-id/${state}`
			);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientDeleteContactAction = createAsyncThunk(
	"client/clientDeleteContactAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest("POST", `/Client/delete-contact/${state}`);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientUpdateTaxAction = createAsyncThunk(
	"client/clientUpdateTaxAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest("POST", `/Client/update-tax-detail`, state);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientgetTaxAction = createAsyncThunk(
	"client/clientgetTaxAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest(
				"GET",
				`/Client/${state.clientId}/get-tax-details`
			);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientUpdateCompaniesSectionAction = createAsyncThunk(
	"client/clientUpdateCompaniesSectionAction",
	async (state, { rejectWithValue }) => {
		try {
			const res = await sendRequest("POST", `/Client/update-Companies`, state);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const clientGetCompaniesByIdAction = createAsyncThunk(
	"client/clientGetCompaniesByIdAction",
	async (clientId, { rejectWithValue }) => {
		try {
			const res = await sendRequest("GET", `/client/${clientId}/get-companies`);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);


export const clientDeleteCompanyByIdAction = createAsyncThunk(
	"client/clientDeleteCompanyByIdAction",
	async (clientId, { rejectWithValue }) => {
		try {
			const res = await sendRequest("GET", `/client/${clientId}/get-companies`);
			return res;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);
