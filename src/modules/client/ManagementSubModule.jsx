import React from "react";
import { SubModuleRouter } from "../../common/components/molecules/SubModuleRouter";

import { ManagementRoute } from "./client.routes";

export function ManagementSubModule({ index }) {
  return (
    <>
   
      {ManagementRoute &&
        ManagementRoute.subRoutes &&
        ManagementRoute.subRoutes[index].subRoutes && (
          <SubModuleRouter
            subRoutes={
              ManagementRoute &&
              ManagementRoute.subRoutes &&
              ManagementRoute.subRoutes[index].subRoutes
            }
            path={
              ManagementRoute &&
              ManagementRoute.subRoutes &&
              ManagementRoute.subRoutes[index].path
            }
          />
        )}
    </>
  );
}
