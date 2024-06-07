import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { BusinessRoute } from "./business.routes";
import { SettingsRoute } from "./settings.routes";

export function BusinessModule() {
  return (
    <>
      {BusinessRoute.subRoutes && (
        <ModuleRouter
          subRoutes={BusinessRoute.subRoutes}
          path={BusinessRoute.path}
        />
      )}
    </>
  );
}
