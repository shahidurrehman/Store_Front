import React from "react";
import { SubModuleRouter } from "../../common/components/molecules/SubModuleRouter";
import { ViewCartRoute } from "./viewcart-template-route";
import { WhishListRoute } from "./whishlist-template.route";



export function ViewCartSubModule({ index }) {
  return (
    <>
   
      {ViewCartRoute &&
        ViewCartRoute.subRoutes &&
        ViewCartRoute.subRoutes[index].subRoutes && (
          <SubModuleRouter
            subRoutes={
                ViewCartRoute &&
                ViewCartRoute.subRoutes &&
                ViewCartRoute.subRoutes[index].subRoutes
            }
            path={
                ViewCartRoute &&
                ViewCartRoute.subRoutes &&
                ViewCartRoute.subRoutes[index].path
            }
          />
        )}
    </>
  );
}
