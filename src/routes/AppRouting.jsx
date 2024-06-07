import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { RouteGuard } from "../modules/auth/components/RouteGuard";
import { useAppSelector } from "../app-redux/hooks";
import { isLogin } from "../app-redux/auth/authSlice";
import NotFound from "../modules/common/pages/NotFound";

const AppRouting = () => {

  const isLoggedIn = useAppSelector(isLogin);

  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, i) => (
          <Route
            key={i}
            path={route.path + "/*"}
            element={
              route.guard ? (
                <RouteGuard path={route.path} redirectPath="/auth">
                  {<route.component />}
                </RouteGuard>
              ) : (
                <>
                  {!isLoggedIn ? (
                    <>
                      <route.component />
                    </>
                  ) : (
                    <Navigate replace to="/home" />
                  )}
                </>
              )
            }
          ></Route>
        ))}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
