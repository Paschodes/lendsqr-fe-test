import React, { Fragment, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BaseRoutes from "./base";
import Loader from "../component/Loader";

interface RouteConfig {
  path: string;
  exact: boolean;
  component: React.ComponentType;
  useAuth: boolean;
}
const renderRoute = ({ component: Component, ...route }: RouteConfig) => {
  const { useAuth } = route;
  console.log(useAuth);
  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Fragment>
          <Suspense fallback={<Loader />}>
            <Component />
          </Suspense>
        </Fragment>
      }
    />
  );
};

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>{BaseRoutes.map((route) => renderRoute(route))}</Routes>
    </BrowserRouter>
  );
};
export default RoutesWrapper;
