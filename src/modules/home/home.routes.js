

import Home from ".";
import IconHome2 from "../../assets/icons/home-2";

import { HomeModule } from "./homeModule";
// import { ManagementSubModule } from "./ManagementSubModule";


const props = {
  index: 0,
};
export const HomeRoute = {
  title: "Home",
  path: "/home",
  icon:IconHome2,
  component: Home,
  guard: true,
  subRoutes: [
    // {
    //   component: () => <ManagementSubModule index={0} />,
    //   path: "users",
     
    //   title: "Users",
    //   subRoutes: [
       
    //   ],
    // },
  ]
    
  
};
