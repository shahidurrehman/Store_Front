import React from "react";
import { SubModuleRouter } from "../../common/components/molecules/SubModuleRouter";

import { TaskRoute } from "./task.routes";

export function ManagementSubModule({ index }) {
  return (
    <>
      {TaskRoute &&
        TaskRoute.subRoutes &&
        TaskRoute.subRoutes[index].subRoutes && (
          <SubModuleRouter
            subRoutes={
              TaskRoute &&
              TaskRoute.subRoutes &&
              TaskRoute.subRoutes[index].subRoutes
            }
            path={
              TaskRoute &&
              TaskRoute.subRoutes &&
              TaskRoute.subRoutes[index].path
            }
          />
        )}
    </>
  );
}
