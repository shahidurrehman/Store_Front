
import IconFileDollar from "../../assets/icons/file-dollar";
import InvoiceForm from "./components/invoice-form";
import { InvoiceModule } from "./InvoiceModule";
import Invoice_form from "./list";



const props = {
  index: 0,
};
export const InvoiceRoute = {
  // title: "Appiontment",
  path: "/invoice",
  icon: IconFileDollar,
  component: InvoiceModule,
  guard: true,
  subRoutes: [
    { component: Invoice_form, path: "list" },
    { component: InvoiceForm, path: "/create" },
  ],
};

