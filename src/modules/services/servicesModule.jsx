import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { ServicesRoute } from "./services.routes";

export function ServicesModule() {
  return (
    <>
      {ServicesRoute.subRoutes && (
        <ModuleRouter
          subRoutes={ServicesRoute.subRoutes}
          path={ServicesRoute.path}
        />
      )}
    </>
  );
}
