import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../hook/AllProducts";
import Loading from "./loading/Loading";
import Notfound from "./Notfound/Notfound";
import { Link } from "react-router";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router";
import Filter from "./Filter";
export default function Prodcuts() {
  const [searchParams] = useSearchParams();
  const price = searchParams.get("price");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const { loading, data, error } = useQuery(GET_PRODUCTS, {
    variables: {
      price,

      page,
      limit,
    },
  });

  return (
    <div className="container max-w-full grow relative">
      {error ? (
        <Notfound></Notfound>
      ) : loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <Filter show={data.Products.perpage}></Filter>

          <div
            className="grid grid-cols-1 px-5  md:py-20 py-10 md:grid-cols-3 
         gap-4"
          >
            {data.Products.products.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="flex gap-y-4 justify-end hover:shadow-lg capitalize p-4 shadow-md flex-col "
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

                  <Link
                    className="py-1 text-center px-4 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 duration-500 capitalize"
                    to={`/productid/${item.id}`}
                  >
                    details
                  </Link>
                </div>
              );
            })}
          </div>
          <Pagination quantity={data.Products.length}></Pagination>
        </div>
      )}
    </div>
  );
}
