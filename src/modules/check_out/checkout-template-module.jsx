import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { CheckOutRoute } from "./checkout-template-route";
import CheckOutPage from "./check_out";



export function CheckOutModule() {
  return (
    <>
      {CheckOutRoute.subRoutes && (
        <ModuleRouter
          subRoutes={CheckOutRoute.subRoutes}
          path={CheckOutRoute.path}
        />
      )}
    </>
  );
}