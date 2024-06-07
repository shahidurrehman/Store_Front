import IconCpu from "../../assets/icons/cpu";
import Service from "./list";
import { ServicesModule } from "./servicesModule";



export const ServicesRoute = {
  title: "Services",
  path: "/services",
  icon: IconCpu,
  component: ServicesModule,
  guard: true,
  subRoutes: [
    {   
      path: "list",
    component:Service
    
    },
  ],
};
