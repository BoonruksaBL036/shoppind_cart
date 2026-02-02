import React from "react";

const ProductCart = () => {
  return (
    <div>
      <div class="bg-[#1f2933] w-72 rounded-2xl p-4 shadow-lg">
        <div class="relative">
          <img src="" class="w-full h-40 object-cover rounded-xl" />

          <span class="absolute top-2 right-2 bg-pink-500 text-xs text-white px-3 py-1 rounded-full">
            Electronics
          </span>
        </div>
        <div class="mt-4 text-white">
          <h3 class="text-lg font-medium"></h3>

          <p class="text-sm text-gray-400 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fuga
          </p>
          <div class="flex justify-between items-center mt-3 text-sm">
            <span class="text-gray-400">Available: 10</span>
            <span class="font-semibold">$1200</span>
          </div>

          <button class="mt-4 bg-indigo-500 hover:bg-indigo-600 transition text-xs px-4 py-2 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
