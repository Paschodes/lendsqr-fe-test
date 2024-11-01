import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const paths = [
  {
    path: "",
    element: lazy(() => import("../modules/Auth/Login")),
  },
  {
    path: "users",
    element: lazy(() => import("../modules/Customers/Users")),
  },
];

function Auth() {
  return (
    <Routes>
      {/* <Route path="" element={<Navigate to={PublicPaths.HOME} replace />} /> */}
      {paths.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  );
}

export default Auth;
