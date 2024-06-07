import { object, string } from "yup";

export const taskFormValidation = object({
	title: string().required("Title required."),
	clientId: string().required("Client required."),
	serviceId: string().required("Please Select Service."),
	leadResponsible: string(),
	seniorResponsible: string(),
	assistantResponsible: string(),
	status: string(),
	billed: string(),
	recieved: string(),
});
