import { ManagementModule } from "./ManagementModule";
import { ManagementSubModule } from "./ManagementSubModule";
import IconBoxSeam from "../../assets/icons/box-seam";
import User from "./list";
import ServiceModal from "./component/modal";


const props = {
  index: 0,
};
export const ManagementRoute = {
  // title: "Management",
  path: "/management",
  icon: IconBoxSeam,
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
};
