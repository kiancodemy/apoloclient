import React from "react";
import { Link } from "react-router";
export default function Notfound() {
  return (
    <div className="h-screen flex-col gap-y-4 flex capitalize justify-center items-center">
      <h1 className="text-2xl text-center md:text-4xl">
        the page has not found !!!!
      </h1>

      <Link to={"/"} className="py-1 px-5 rounded-md bg-blue-400 text-white">
        home page
      </Link>
    </div>
  );
}
