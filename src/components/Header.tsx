import { header } from "../types/Header";
import { Link } from "react-router";
import { useLocation } from "react-router";

export default function Header() {
  const headerData: header[] = [
    { name: "products", path: "/products" },
    { name: "home", path: "/" },
    { name: "login", path: "/signin" },
  ];
  let { pathname } = useLocation();
  return (
    <div className="max-w-full container  mx-auto shadow-md py-3 px-10 capitalize">
      <div className="md:flex gap-x-8 items-center justify-end hidden ">
        {headerData.map((item) => {
          return (
            <Link
              className={`${
                pathname === item.path
                  ? "bg-blue-500 text-white"
                  : "bg-black text-white"
              } font-semibold rounded-md shadow-md py-2 px-8 hover:-translate-x-1 duration-300`}
              to={`${item.path}`}
              key={item.name}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
