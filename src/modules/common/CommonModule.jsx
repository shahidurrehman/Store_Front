import React from "react";
import Layout from "../../common/components/layout/common/layout";
import { ModuleRouter } from "../../common/components/molecules/ModuleRouter";

import { CommonRoutes } from "./common.routes";

export function CommonModule() {
  return (
    <>
      {CommonRoutes.subRoutes && (
        <Layout component={<ModuleRouter subRoutes={CommonRoutes.subRoutes} path={CommonRoutes.path} />}>
        </Layout>
      )}
    </>
  );
}
