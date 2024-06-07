import { object, string } from "yup";
import * as Yup from 'yup';


export const basicInformationFormValidation = object({
    displayName: string().required("This feild is required."),
    email: string().email().required("This field is required."),
    designation: string().required("This feild is required."),
    contactpersonal: string().required("This feild is required."),
    address: string().required("This feild is required")
})


export const changePasswordFormValidation = object({
    password: string()
        .required("No password provided."),
    newPassword: string().required("No password provided").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    ConfirmPassword: string().oneOf([Yup.ref('newPassword'), null], 'Password must match')
});

export const changeEmailFormValidation = object({
    newEmail: string().email().required("This field is required"),
})
