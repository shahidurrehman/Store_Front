import React from "react";
import { SubModuleRouter } from "../../common/components/molecules/SubModuleRouter";
import { CheckOutRoute } from "./checkout-template-route";




export function CheckOutSubModule({ index }) {
  return (
    <>
   
      {CheckOutRoute &&
        CheckOutRoute.subRoutes &&
        CheckOutRoute.subRoutes[index].subRoutes && (
          <SubModuleRouter
            subRoutes={
                CheckOutRoute &&
                CheckOutRoute.subRoutes &&
                CheckOutRoute.subRoutes[index].subRoutes
            }
            path={
                CheckOutRoute &&
                CheckOutRoute.subRoutes &&
                CheckOutRoute.subRoutes[index].path
            }
          />
        )}
    </>
  );
}
