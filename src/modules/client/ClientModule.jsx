import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { ClientRoute } from "./client.routes";



export function ClientModule() {

  return (
    <>
      {ClientRoute.subRoutes && (
        <ModuleRouter subRoutes={ClientRoute.subRoutes} path={ClientRoute.path} />
        
      )}
    </>
  );
}
