import { useSearchParams } from "react-router";
import { uselogin } from "../hook/singup";
import { Link } from "react-router";
import { useEffect, useRef } from "react";
import { showToast } from "../utils/Toastify";
import { useAuth } from "./useContext/AuthContext";
import { useNavigate } from "react-router";
export default function Signin() {
  const { handlelogin, data, loading, error } = uselogin();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const search = searchParams.get("search") || false;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handlelogin({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  const { setUser } = useAuth();

  useEffect(() => {
    if (error) {
      showToast(error.message, "error");
    } else if (data) {
      setUser(data.login);
      showToast("sucessfully loged in", "success");
      setTimeout(() => {
        if (search) {
          navigate(`${search}`);
        } else {
          navigate("/");
        }
      }, 500);
    }
  }, [error, data]);

  return (
    <div className="container py-5 flex justify-center items-center grow">
      <form
        onSubmit={handleSubmit}
        className="flex border-gray-400 border-2 max-w-[400px] container  flex-col p-8 rounded-md gap-y-4"
      >
        <h1 className="text-3xl mb-5 font-semibold capitalize">login</h1>
        <div className="flex capitalize flex-col gap-y-3">
          <label className="font-semibold capitalize">your password</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="password"
            className="rounded-md placeholder:capitalize focus:placeholder:translate-x-4  placeholder:duration-500 focus:outline-none"
          />
        </div>
        <h1 className="h-[1px] bg-gray-500"></h1>
        <div className="flex flex-col gap-y-3">
          <label className="font-semibold capitalize">your email</label>
          <input
            type="text"
            ref={emailRef}
            placeholder="email"
            className="rounded-md focus:outline-none focus:placeholder:translate-x-4 placeholder:capitalize placeholder:duration-500 "
          />
        </div>
        <h1 className="h-[1px] bg-gray-500"></h1>
        <div className="flex flex-col gap-y-1">
          <button
            disabled={loading}
            type="submit"
            className="bg-blue-500 gap-x-2 self-center flex  items-center  cursor-pointer hover:bg-blue-700 duration-500 text-white rounded-md py-2 px-10 capitalize"
          >
            <span>log in</span>
            {loading && (
              <span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
        <h1 className=""></h1>
        <div className="flex items-center capitalize gap-x-3">
          <h1>dont you have account??</h1>
          <button className="py-1 px-5 capitalize bg-yellow-500 text-white rounded-md">
            <Link to={"/signup"}>sign up</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
