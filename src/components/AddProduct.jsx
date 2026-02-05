import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/action";
const AddProduct = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm({
    title: "",
    category: "",
    imageUrl: "",
    price: "",
    available: "",
  });
  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm ml-auto sticky top-8">
      <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">
        Add New Product
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm text-gray-600">Product Name</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            {...register("category", { required: true })}
            className="text-sm text-gray-600"
          >
            Category
          </label>
          <select className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Select a category</option>
            <option>Electronics</option>
            <option>Appliances</option>
            <option>Footwear</option>
          </select>
        </div>
        <div>
          <label
            {...register("imageUrl", { required: true })}
            className="text-sm text-gray-600"
          >
            Image URL
          </label>
          <input
            type="text"
            className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              {...register('price', { required: true })}
              className="text-sm text-gray-600"
            >
              Price
            </label>
            <input
              type="number"
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              {...register('quantity', { required: true })}
              className="text-sm text-gray-600"
            >
              Quantity
            </label>
            <input
              type="number"
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 transition text-white py-2 rounded-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
