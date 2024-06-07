import { IconHeart } from "@tabler/icons-react";
import IconCpu from "../../assets/icons/cpu";
import WhishListPage from "./whishlist";
import { WhishListModule } from "./whishlist-template-module";



export const WhishListRoute = {
  title: "",
  path: "/whishlist",
  // icon: IconHeart,
  component: WhishListModule,
  guard: true,
  showInMenu: false,
  subRoutes: [
    {
      component: () => <WhishListPage />,
      path: "WhishList",
      title: "Whish List",
      type: "layout_vertical_transparent",
      subRoutes: [],

    },
  ],
};