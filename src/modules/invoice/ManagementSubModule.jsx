import React from "react";
import { SubModuleRouter } from "../../common/components/molecules/SubModuleRouter";

import { ManagementRoute } from "./management.routes";

export function InvoiceSubModule({ index }) {
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
