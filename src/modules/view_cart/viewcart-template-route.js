import { IconHeart } from "@tabler/icons-react";
import IconCpu from "../../assets/icons/cpu";
import { ViewCartModule } from "./viewcart-template-module";
import ViewCartPage from "./view_cart";




export const ViewCartRoute = {
  title: "",
  path: "/view_cart",
  // icon: IconHeart,
  component: ViewCartModule,
  guard: true,
  showInMenu: true,
  subRoutes: [
    {
      component: () => <ViewCartPage />,
      path: "ViewCart",
      title: "View Cart",
      type: "layout_vertical_transparent",
      subRoutes: [],

    },
  ],
};