interface quantity {
  quantity: number;
}
import { useSearchParams } from "react-router";
export default function Pagination({ quantity }: quantity) {
  const pages = Array.from({ length: quantity }, (_, index) => index + 1);
  const [searchParams, setsearchParams] = useSearchParams();
  const handle = (item: number) => {
    searchParams.set("page", `${item}`);
    setsearchParams(searchParams);
  };
  const active = Number(searchParams.get("page")) || 1;
  return (
    <div className="flex gap-x-3 justify-center">
      {pages.map((item: any) => {
        return (
          <button
            key={item}
            onClick={() => handle(item)}
            className={` w-8 cursor-pointer h-8 rounded-full ${
              active === item ? "bg-blue-500 text-white" : "bg-gray-200"
            } `}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
