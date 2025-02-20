import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import Loading from "../components/loading/Loading";
import { useAuth } from "../components/useContext/AuthContext";
import { useQuery } from "@apollo/client";
import { checkAuth } from "../hook/singup";
import { useLocation } from "react-router";
import { showToast } from "../utils/Toastify";
export const Checkauth = () => {
  const { loading: loadings, error } = useQuery(checkAuth, {
    fetchPolicy: "network-only",
  });
  const { setUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      navigate("/signin");
      setUser(null);
      showToast("please login", "error");
    }
  }, [error, location.pathname, setUser, navigate]);

  return <Outlet />;
};
