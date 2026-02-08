import React from "react";
import ProductCard from "../components/ProductCard";
import NewProduct from "../components/AddProduct";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>

        <aside className="lg:w-[320px] flex-shrink-0">
          <NewProduct />
        </aside>
      </div>
    </div>
  );
};

export default Home;
