import { object, string } from "yup";

export const forgotPasswordFormValidation = object({
    email: string().email().required("This field is required."),
});
