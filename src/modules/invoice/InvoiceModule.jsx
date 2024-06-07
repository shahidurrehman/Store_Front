import React from "react";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";
import { InvoiceRoute } from "./invoice.routes";

export function InvoiceModule() {
  return (
    <>
      {InvoiceRoute.subRoutes && (
        <ModuleRouter
          subRoutes={InvoiceRoute.subRoutes}
          path={InvoiceRoute.path}
        />
      )}
    </>
  );
}
