import { usecreatepost } from "../../hook/Post";
import { category } from "../../utils/categoryData";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { showToast } from "../../utils/Toastify";

export default function Newproduct() {
  const refName = useRef<any>(null);
  const refDescription = useRef<any>(null);
  const refPrice = useRef<any>(null);
  const refQuantity = useRef<any>(null);
  const navigate = useNavigate();

  const { handlecreate, loading, error, data } = usecreatepost();

  const [categoryy, setcategory] = useState<string>(category[0].id);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    handlecreate({
      name: refName.current.value,
      description: refDescription.current.value,
      quantity: Number(refPrice.current.value),
      price: Number(refQuantity.current.value),
      categoryId: categoryy,
    });
  };

  useEffect(() => {
    if (data) {
      showToast("created sucessfully", "success");
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    if (error) {
      showToast(error.message, "error");
    }
  }, [error, data]);

  return (
    <div className="grow max-w-full flex justify-center flex-col items-center  container">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[400px] border container p-4 rounded-md gap-y-4"
      >
        <h1 className="font-bold text-2xl capitalize">create new product</h1>
        <div className="flex flex-col gap-y-3 capitalize">
          <label className="font-semibold" htmlFor="">
            name
          </label>
          <input
            ref={refName}
            required
            type="text"
            className="py-2 rounded-md outline px-4 focus:outline-3 outline-gray-400"
          />
        </div>
        <div className="flex flex-col gap-y-3 capitalize">
          <label className="font-semibold">description</label>
          <input
            ref={refDescription}
            type="text"
            className="py-2 rounded-md outline px-4 focus:outline-3 outline-gray-400"
          />
        </div>
        <div className="flex flex-col gap-y-3 capitalize">
          <label className="font-semibold">price</label>
          <input
            ref={refPrice}
            required
            type="number"
            className="py-2 rounded-md outline px-4 focus:outline-3 outline-gray-400"
          />
        </div>
        <div className="flex flex-col gap-y-3 capitalize">
          <label className="font-semibold">quantity</label>
          <input
            ref={refQuantity}
            required
            type="number"
            className="py-2 rounded-md outline px-4 focus:outline-3 outline-gray-400"
          />
        </div>
        <select
          onChange={(e) => setcategory(e.target.value)}
          className="py-2 rounded-md outline px-4 focus:outline-3 outline-gray-400"
        >
          {category.map((item: any) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md py-2 px-8 capitalize"
        >
          create
        </button>
        <Link
          to={"/products"}
          className="bg-red-500 text-center hover:bg-red-600 cursor-pointer text-white rounded-md py-2 px-8 capitalize"
        >
          back
        </Link>
      </form>
    </div>
  );
}
