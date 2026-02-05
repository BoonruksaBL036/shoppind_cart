import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carts/action";
import { removeQuantity } from "../redux/products/action";

const ProductCard = ({ id, productName, category, price, quantity }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(product.id));
  };
  return (
    <div>
      <div className="bg-[#1f2933] w-72 rounded-2xl p-4 shadow-lg">
        <div className="relative">
          <img
            src={productCard.imageUrl}
            className="w-full h-40 object-cover rounded-xl"
          />

          <span className="absolute top-2 right-2 bg-pink-500 text-xs text-white px-3 py-1 rounded-full">
            Electronics
          </span>
        </div>
        <div className="mt-4 text-white">
          <h3 className="text-lg font-medium"></h3>

          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            {ProductCard.title}
          </p>
          <div className="flex justify-between items-center mt-3 text-sm">
            <span className="text-gray-400">Available: 10</span>
            <span className="font-semibold">$1200</span>
          </div>

          <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 transition text-xs px-4 py-2 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
