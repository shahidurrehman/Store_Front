import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import {  StaffRoute } from "./staff.routes";



export function StaffModule() {

  return (
    <>
      {StaffRoute.subRoutes && (
        <ModuleRouter subRoutes={StaffRoute.subRoutes} path={StaffRoute.path} />
        
      )}
    </>
  );
}
