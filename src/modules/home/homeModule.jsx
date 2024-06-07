import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import {  HomeRoute } from "./home.routes";



export function HomeModule() {

  return (
    <>
      {HomeRoute.subRoutes && (
        <ModuleRouter subRoutes={HomeRoute.subRoutes} path={HomeRoute.path} />
        
      )}
    </>
  );
}
