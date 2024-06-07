import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { ManagementRoute } from "./management.routes";

export function ManagementModule() {
  return (
    <>
      {ManagementRoute.subRoutes && (
        <ModuleRouter
          subRoutes={ManagementRoute.subRoutes}
          path={ManagementRoute.path}
        />
      )}
    </>
  );
}
