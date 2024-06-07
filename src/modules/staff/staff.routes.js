import { IconFileDollar } from "@tabler/icons-react";
import InvoiceForm from "modules/invoice/components/invoice-form";
import { InvoiceModule } from "modules/invoice/InvoiceModule";
import Invoice_form from "modules/invoice/list";
import IconUser from "../../assets/icons/user";
import AddStaff from "./add";
import NewEmail from "./components/change-email";
import ChangeEmail from "./components/change-email";
import ResetPassword from "./components/reset-password";
import EditStaff from "./edit";
import Staff from "./list";



import { StaffModule } from "./staffModule";
// import { ManagementSubModule } from "./ManagementSubModule";

const props = {
  index: 0,
};
export const StaffRoute = {
title: "Appiontment",
  path: "/invoice",
  // icon: IconFileDollar,
  component: InvoiceModule,
  guard: true,
  subRoutes: [
    { component: Invoice_form, path: "list" },
    { component: InvoiceForm, path: "/create" },
  ],

};
