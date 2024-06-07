import InvoiceForm from "modules/invoice/components/invoice-form";
import { InvoiceModule } from "modules/invoice/InvoiceModule";
import Invoice_form from "modules/invoice/list";
import ServiceModal from "modules/management/component/modal";
import User from "modules/management/list";
import { ManagementModule } from "modules/management/ManagementModule";
import IconChecklist from "../../assets/icons/checklist";
import AssignTask from "./assign-task";
import EditTask from "./edit";


import Task from "./list";
import UnAllocated from "./list/Components/unallocated";


import { TaskModule } from "./taskModule";

export const TaskRoute = {

 title: "Our Story",
 path: "/management",
//  icon: IconBoxSeam,
 component: ManagementModule,
 guard: true,
 subRoutes: [
   {
     path: "list",
     title: "Management",
     component: User,
   },
   {
     path: "/services",
     title: "Management",
     component: ServiceModal,
   },
 ],

  // title: "Our Story",
  // path: "/task",
  // icon: IconChecklist,
  // component: TaskModule,

  // guard: true,
  // subRoutes: [
  //   {
  //     path: "list",
  //     title: "All Tasks",
  //     component: Task,
  //     showInMenu: true
  //   },
  //   {
  //     path: "create-task",
  //     title: "cdscds",
  //     component: AssignTask,

  //   },

  //   {
  //     path: "Unallocated",
  //     title: "Unallocated Tasks",
  //     component: UnAllocated,
  //     showInMenu: true

  //   },

  //   { path: "edit/:taskId", component: EditTask, },

  // ],
};
