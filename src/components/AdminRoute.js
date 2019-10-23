import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AdminDashboardContext } from "./../contexts/AdminDashboardContext";

const AdminRoute = ({ path, component: Component, render, ...rest }) => {
  const { checkAuth } = useContext(AdminDashboardContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (!checkAuth())
          return (
            <Redirect
              to={{ pathname: "/connexion", state: { from: props.location } }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};
export default AdminRoute;
