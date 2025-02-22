import { useState } from "react";
import { useAuth } from "../useContext/AuthContext";
import { showToast } from "../../utils/Toastify";
import { useNavigate } from "react-router";
import { uselogout } from "../../hook/singup";
import { useEffect } from "react";

export default function MyInfo() {
  const { user, setUser } = useAuth();

  const { logout, data, error } = uselogout();

  useEffect(() => {
    if (error) {
      showToast(error.message, "error");
    }
    if (data) {
      setUser(null);
      showToast("Logout Sucessfully", "success");
    }
  }, [error, data]);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handler = () => {
    if (!user) {
      showToast("Please Login", "error");
      navigate("/signin");
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handler}
        className="rounded-md cursor-pointer bg-yellow-500 text-white shadow-md py-2 px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {user?.name || "Info"}
      </button>

      {isHovered && user && (
        <div
          className="absolute z-[1000] *:rounded-md *:hover:text-white flex flex-col gap-y-3 *:hover:bg-blue-500 *:cursor-pointer *:p-2 top-[85%]  right-0 p-6 mt-2 w-48 bg-white shadow-lg rounded-md  border border-gray-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-sm font-semibold">Name:{user.name}</p>
          <p className="text-sm">Email:{user.email}</p>
          <button
            onClick={() => logout()}
            className="capitalize bg-yellow-500 text-white"
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
}
