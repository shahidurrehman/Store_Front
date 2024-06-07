import { date, object, string } from "yup";

export const busniessInformationFormValidation = object({
    name: string().required("This field is required."),
    legalStatus:string().required("This field is required"),
    registrationNo:string().required("This field is required"),
    dateOfRegistration:date().required("This field is required"),
    category:string().required("This field is required"),
    taxNumber:string().required("This field is required"),
    salesTaxRegisterationNo:string().required("This field is required"),
    dateOfSalesTaxRegisteration:date().required("This field is required")
});


export const busniessOfficeFormValidation =object({
    locationName:string().required("This field is required."),
    province:string().required("This field is required."),
    City:string().required("This field is required."),
    Address:string().required("This field is required."),
    Phonenumber:string().required("This field is required."),
    officeEmail:string().email().required("This field is required."),
    Name:string().required("This field is required."),
    Designation:string().required("This field is required."),
    O_email:string().email().required("This field is required."),
    contact:string().required("This field is required."),
})
