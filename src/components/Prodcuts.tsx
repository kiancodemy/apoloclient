import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../hook/AllProducts";
import Loading from "./loading/Loading";
import Notfound from "./Notfound/Notfound";
import { Link } from "react-router";

export default function Prodcuts() {
  const { loading, data, error } = useQuery(GET_PRODUCTS);

  return (
    <div className="container max-w-full grow relative">
      {error ? (
        <Notfound></Notfound>
      ) : loading ? (
        <Loading></Loading>
      ) : (
        <div
          className="grid grid-cols-1 px-5  md:py-20 py-10 md:grid-cols-3 
         gap-4"
        >
          {data.Products.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex gap-y-4 hover:shadow-lg capitalize p-4 shadow-md flex-col "
              >
                <h1 className="flex gap-x-2">
                  <span>name:</span>
                  <span>{item.name}</span>
                </h1>
                <h1 className="flex">
                  <span> descripion:</span>
                  <span>{item.description}</span>
                </h1>
                <h1 className="flex gap-x-2">
                  <span> quantity:</span>
                  <span>{item.quantity}</span>
                </h1>
                <h1 className="flex gap-x-2">
                  <span> price:</span>
                  <span>{item.price}</span>
                </h1>
                <button className="py-1 px-4 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 duration-500 capitalize">
                  <h1>
                    <Link to={`/productid/${item.id}`}>details</Link>
                  </h1>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
