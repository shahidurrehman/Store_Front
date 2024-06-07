import { object, string, array, date } from "yup";

export const educationFormValidation = object({
    people: array().of(object().shape({
        examination: string().required("Examination is required"),
        yearOfpassing: date().required("Date required"),
        grade: string().required("grade is required"),
        university: string().required("University name is required"),
        institute: string().required("institute name is required"),
    })),
});
