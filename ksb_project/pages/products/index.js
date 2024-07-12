
import React, { useEffect, useState } from "react";
import Product from '../Components/Product';
import { getAllCategories } from "../api/categoryAPI.js";
import { getAllProduct, getProductByCategory } from "../api/productAPI.js";
import Link from 'next/link';

export async function getStaticProps() {
  let FRONTEND_URL = process.env.FRONTEND_URL
  return { props: { FRONTEND_URL } }
}

const Index = (props) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // const [productsBasedOnCategory, setProductsBasedOnCategory] = useState([]);
  let [reset, setReset] = useState(false)

  useEffect(() => {
    setReset(false)
    if (categories.length == 0) {
      getAllCategories().then((data) => setCategories(data));
    }
    getAllProduct().then((data) => setProducts(data));
  }, [reset]);

  const handleClick = (id) => {
    getProductByCategory(id).then((data) => setProducts(data));
  };

  return (
    <>
      <div>
        <div className='relative'>
          <img src="/one.jpg" alt="" className='h-40 w-full object-cover' />
          <p className='absolute text-white top-6 left-4 md:left-20 lg:left-52 text-2xl md:text-4xl font-semibold'>Products</p>
          <p className='absolute text-white top-16 left-4 md:left-20 lg:left-52 text-sm md:text-base'>
            <Link href="/">Home</Link>/<span className='text-orange-500'>Products</span>
          </p>
        </div>
        <div className="w-full md:w-3/4 lg:w-[1200px] m-auto flex flex-col md:flex-row mt-14 justify-center items-center gap-3 px-4 flex-wrap">
          <button
            className="block py-1 px-3 md:px-5 text-gray-700 bg-white rounded-lg md:bg-transparent md:text-gray-700 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200 md:border-solid md:border-[1px] md:border-gray-700"
            onClick={() => setReset(true)}
          >
            ALL
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              className="block py-1 px-3 md:px-5 text-gray-700 bg-white rounded-lg md:bg-transparent md:text-gray-700 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200 md:border-solid md:border-[1px] md:border-gray-700"
              onClick={() => handleClick(category._id)}
            >
              {category.category_name}
            </button>
          ))}
        </div>
        {products.length > 0 &&
          // (
          //   <div className="w-full md:w-3/4 lg:w-[1200px] m-auto flex flex-col md:flex-row md:gap-4 mb-12 mt-10 justify-center items-center md:flex-wrap px-4">
          //     {productsBasedOnCategory.map((product) => (
          //       <Product key={product._id} product={product} FRONTEND_URL={props.FRONTEND_URL} />
          //     ))}
          //   </div>
          // ) : (
          <div className="w-full md:w-3/4 lg:w-[1200px] m-auto flex flex-col md:flex-row md:gap-11 mb-12 mt-10 justify-center items-center md:flex-wrap px-4">
            {products.slice(0, 10).map((product) => (
              <Product key={product._id} product={product} FRONTEND_URL={props.FRONTEND_URL} />
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default Index;
