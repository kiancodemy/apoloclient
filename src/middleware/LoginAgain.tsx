import { Outlet, Navigate } from "react-router";

import { useAuth } from "../components/useContext/AuthContext";

export const Hadle = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
