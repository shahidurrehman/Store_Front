import React from "react";
import { SubModuleRouter } from "../../common/components/molecules/SubModuleRouter";
import { WhishListRoute } from "./whishlist-template.route";



export function WhishListSubModule({ index }) {
  return (
    <>
   
      {WhishListRoute &&
        WhishListRoute.subRoutes &&
        WhishListRoute.subRoutes[index].subRoutes && (
          <SubModuleRouter
            subRoutes={
              WhishListRoute &&
              WhishListRoute.subRoutes &&
              WhishListRoute.subRoutes[index].subRoutes
            }
            path={
              WhishListRoute &&
              WhishListRoute.subRoutes &&
              WhishListRoute.subRoutes[index].path
            }
          />
        )}
    </>
  );
}
