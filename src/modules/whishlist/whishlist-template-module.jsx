import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { WhishListRoute } from "./whishlist-template.route";

export function WhishListModule() {
  return (
    <>
      {WhishListRoute.subRoutes && (
        <ModuleRouter
          subRoutes={WhishListRoute.subRoutes}
          path={WhishListRoute.path}
        />
      )}
    </>
  );
}