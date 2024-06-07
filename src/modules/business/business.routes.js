import Business from "./add";
import Settings from "./add";

export const BusinessRoute = {
  path: "/business",
  component: Business,
  guard: true,
  subRoutes: []
};
 