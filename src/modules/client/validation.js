import { validate } from "uuid";
import { boolean, date, number, object, string } from "yup";

export const generalInformationFormValidation = object({
    clientName: string().required("Client Name Required."),
    legalStatus: string(),
    ownership: string(),
    website: string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    ),
    ownership: string(),
    industry: string(),
    dateOfIncorporation: string().nullable(),
    incorporationNumber: number("Must be number only").typeError("Must be number only"),
    phoneNumber: number("Must be number only").typeError("Must Be number only"),
    isPublicInterestEntity: boolean().default(false),
    ntnNumber: string()
        .required("This field is required")
        .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters are allowed"),
    authorizeShareCapital: string(),
    paidUpShareCapital: string(),
    pricePerShare: string()
});


export const contactFormValidation = object({
    clientContact: string().nullable(),
    contactDesignation: string().nullable(),
    contactEmail: string().nullable(),
})

export const clientSearchFormValidation = object({
    clientName: string(),
    phoneNumber: number("Must be number only").typeError("Must Be number only"),
    legalStatus: string(),
    contactEmail: string(),

})

