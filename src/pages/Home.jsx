import React from 'react'
import ProductCart from '../components/ProductCart'
import NewProduct from '../components/AddProduct'
import { useSelector } from 'react-redux'


const Home = () => {
const product = useSelector((state)=> state.products);
  return (
    <div className="grid grid-cols-3 xl:px-30 xl:py-20 p-10 gap-10">
      <div className="col-span-2 grid xl:grid-cols-2 md:grid-cols-1 gap-4 sm:grid-cols-1">
        {product && product.map((item) => <ProductCart/>)}
      </div>
      <div className="col-span-1">
        <NewProduct />
      </div>
    </div>
  );
}

export default Home