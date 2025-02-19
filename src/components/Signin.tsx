import { Link } from "react-router";
export default function Signin() {
  return (
    <div className="container py-5 flex justify-center items-center grow">
      <div className="flex border-gray-400 border-2 max-w-[400px] container  flex-col p-8 rounded-md gap-y-4">
        <h1 className="text-3xl mb-5 font-semibold capitalize">login</h1>
        <div className="flex capitalize flex-col gap-y-3">
          <label className="font-semibold capitalize">your password</label>
          <input
            type="password"
            placeholder="password"
            className="rounded-md placeholder:capitalize focus:placeholder:translate-x-4  placeholder:duration-500 focus:outline-none"
          />
        </div>
        <h1 className="h-[1px] bg-gray-500"></h1>
        <div className="flex flex-col gap-y-3">
          <label className="font-semibold capitalize">your email</label>
          <input
            type="text"
            placeholder="email"
            className="rounded-md focus:outline-none focus:placeholder:translate-x-4 placeholder:capitalize placeholder:duration-500 "
          />
        </div>
        <h1 className="h-[1px] bg-gray-500"></h1>
        <div className="flex flex-col gap-y-1">
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-700 duration-500 text-white rounded-md py-2 px-8 capitalize">
            login
          </button>
        </div>
        <h1 className=""></h1>
        <div className="flex items-center capitalize gap-x-3">
          <h1>dont you have account??</h1>
          <button className="py-1 px-5 capitalize bg-yellow-500 text-white rounded-md">
            <Link to={"/signup"}>sign up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
