import { useSearchParams } from "react-router";
import { useState } from "react";
export default function Filter({ show }: { show: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePrice = (e: any) => {
    searchParams.set("price", e.target.value);
    setSearchParams(searchParams);
  };
  const handlepage = (e: any) => {
    searchParams.set("limit", `${e.target.value}`);
    setSearchParams(searchParams);
  };

  const numberOfPages = Array.from({ length: show }, (_, index) => index + 1);

  return (
    <div className="p-5 flex items-start justify-between">
      <div className="flex capitalize p-2 border-2  border-gray-400 rounded-md gap-y-2">
        <label>
          <span>price:</span>
          <select
            onChange={handlePrice}
            className="capitalize *:cursor-pointer focus:outline-none "
          >
            <option value="-1">hight to low</option>
            <option value="1">low to hight</option>
          </select>
        </label>
      </div>
      <div className="capitalize p-2 border-2  border-gray-400 rounded-md gap-y-2">
        <label>
          <span>per page:</span>
          <select
            onChange={handlepage}
            className="capitalize w-[80px] *:cursor-pointer focus:outline-none "
          >
            {numberOfPages.map((item: number) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </div>
  );
}
