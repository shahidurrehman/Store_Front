import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { TaskRoute } from "./task.routes";

export function TaskModule() {
  return (
    <>
      {TaskRoute.subRoutes && (
        <ModuleRouter subRoutes={TaskRoute.subRoutes} path={TaskRoute.path} />
      )}
    </>
  );
}
