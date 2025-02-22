import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

import { useAuth } from "../components/useContext/AuthContext";
import { useQuery } from "@apollo/client";
import { checkAuth } from "../hook/singup";
import { useLocation } from "react-router";

export const Checkauth = () => {
  const { error } = useQuery(checkAuth, {
    fetchPolicy: "network-only",
  });
  const { user, setUser } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (error || !user) {
      navigate(`/signin?search=${pathname}`);
      setUser(null);
    }
  }, [error, user]);

  return <Outlet />;
};
