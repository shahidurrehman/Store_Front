import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { SettingsRoute } from "./settings.routes";

export function SettingsModule() {
  return (
    <>
      {SettingsRoute.subRoutes && (
        <ModuleRouter
          subRoutes={SettingsRoute.subRoutes}
          path={SettingsRoute.path}
        />
      )}
    </>
  );
}
