import IconUsers from "../../assets/icons/users";
import AddClient from "./add";
import EditClient from "./edit";
import Client from "./list";
import { ClientModule } from "./ClientModule";
// import { ManagementSubModule } from "./ManagementSubModule";

const props = {
  index: 0,
};
export const ClientRoute = {
  title: "Shop",
  path: "/client",
  icon: IconUsers,
  component: ClientModule,

  guard: true,
  subRoutes: [
    { path: "list", component: Client, },
    { path: "add", component: AddClient, },
    { path: "edit/:clientId", component: EditClient, },
  ],
};
