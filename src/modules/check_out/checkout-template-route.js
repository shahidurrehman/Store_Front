import { IconHeart } from "@tabler/icons-react";
import IconCpu from "../../assets/icons/cpu";
import { CheckOutModule } from "./checkout-template-module";
import CheckOutPage from "./check_out";






export const CheckOutRoute = {
  title: "",
  path: "/check_out",
  // icon: IconHeart,
  component: CheckOutModule,
  guard: true,
  showInMenu: true,
  subRoutes: [
    {
      component: () => <CheckOutPage />,
      path: "CheckOut",
      title: "View Cart",
      type: "layout_vertical_transparent",
      subRoutes: [],

    },
  ],
};