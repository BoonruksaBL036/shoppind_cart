import React from 'react'
import { useSelector } from 'react-redux';

const MyCart = () => {
  const cartItem = useSelector((state)=> state.carts)

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      {/* Content */}
      <div className="px-10 py-8">
        <h2 className="text-lg mb-6">Shopping Cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT : Cart Items */}
          <div className="lg:col-span-3 space-y-6">
            {/* Cart Item */}
            {[
              {
                name: "Laptop",
                price: 1200,
                category: "Electronics",
                img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
              },
              {
                name: "Smartphone",
                price: 700,
                category: "Electronics",
                img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
              },
              {
                name: "Headphones",
                price: 80,
                category: "Electronics",
                img: "https://images.unsplash.com/photo-1518441902110-0a40b7e4e88e",
              },
              {
                name: "Cookware Set",
                price: 120,
                category: "Kitchen",
                img: "https://images.unsplash.com/photo-1584990347449-6b0c5b0a0c0b",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl p-4 flex justify-between items-center shadow-md"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.img}
                    alt=""
                    className="w-24 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Category: ${item.category}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="text-right space-y-2">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-2 bg-gray-200 rounded">-</button>
                    <span>1</span>
                    <button className="px-2 bg-gray-200 rounded">+</button>
                  </div>

                  <p className="text-gray-500">${item.price}</p>
                  <button className="text-gray-400 text-sm">✕</button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT : Summary */}
          <div className="bg-white text-black rounded-xl p-6 shadow-md h-fit">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$3300</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>$4.99</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$3304.99 USD</span>
            </div>

            <p className="text-xs text-gray-500 mt-1">including VAT</p>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart