import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../../../app-redux/auth/authSlice";
import { useAppSelector } from "../../../app-redux/hooks";
import Layout from "../../../common/components/layout/layout";
// import Layout from "../../../common/components/layout/layout"

export function RouteGuard(props) {
  // const isLoggedIn = true;
  const isLoggedIn = useAppSelector(isLogin);
  return isLoggedIn ? <><Layout path={props.path} component={props.children} /></> : <Navigate replace to={props.redirectPath} />;
}
