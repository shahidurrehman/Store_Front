import { date, number, object, string } from "yup";
const todaydate = new Date();

export const basicInformationFormValidation = object({
  displayName: string().required("Name is required"),
  designation: string().nullable(),
  cnic: string()
    .transform((value) => (value ? value.toString() : value))
    .test("len", "Must be exactly 13 digits", (val) => val && val.length === 13)
    .typeError("Must be number only")
    .required("CNIC Number required"),
  dateOfBirth: date()
    .required("Date of Birth required")
    .typeError("Please Select Date"),
  dateOfJoining: date()
    .required("Date of Joining is required.")
    .max(todaydate, "Date Of Joining must be at earlier than today date")
    .typeError("Please Select Valid Date"),
  contactpersonal: number("Must be number only").typeError(
    "Must be number only"
  ),
  email: string()
    .email("Please enter a valid email e.g adam@example.com")
    .required("Email is required"),
});

export const guardianInformationFormValidation = object({
  guardianName: string().required("Name is required").nullable(),
  guardianCnic: string()
    .transform((value) => (value ? value.toString() : value))
    .test("len", "Must be exactly 13 digits", (val) => val && val.length === 13)
    .nullable()
    .typeError("CNIC Number must be a number"),
  guardianContactPersonal: number("Must be number only")
    .typeError("Contact info must be a number")
    .required("Contact info is required"),
});

export const nextOfKinFormValidation = object({
  nextOfKinName: string().required("Name is required").nullable(),
  nextOfKinCnic: number()
    .test(
      "len",
      "Must be exactly 13 digits",
      (val) => val && val.toString().length === 13
    )
    .typeError("Must be number only")
    .required("CNIC Number required"),
  nextOfKinContactPersonal: number("Must be number only")
    .typeError("Must be number only")
    .required("Contact info is required"),
});

export const bankDetailFormValidation = object({
  name: string().required("Name is required"),
  branch: string().required("Branch is required"),
  accountTitle: string().required("Title is required"),
  accountNumber: string().required("Number is required"),
});

export const pastExperienceFormValidation = object({
  employer: string().required("This field is required."),
  reasonForLeaving: string().required("This field is required."),
  // to: string().required("This field is required."),
  // from: string().required("This field is required."),
});
