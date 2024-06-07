import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { ViewCartRoute } from "./viewcart-template-route";


export function ViewCartModule() {
  return (
    <>
      {ViewCartRoute.subRoutes && (
        <ModuleRouter
          subRoutes={ViewCartRoute.subRoutes}
          path={ViewCartRoute.path}
        />
      )}
    </>
  );
}