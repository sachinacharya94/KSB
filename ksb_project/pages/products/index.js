import React from 'react';
import Product from '../Components/Product';
import { useEffect, useState } from "react";
import { getAllCategories } from "../api/categoryAPI.js";
import { getAllProduct, getProductByCategory } from "../api/productAPI.js";
import Link from 'next/link';


const index = () => {
  let [categories, setCategories] = useState([])
  let [products, setProducts] = useState([])
  let [productsBasedOnCategory, setProductsBasedOnCategory] = useState([])

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))

    getAllProduct()
      .then((data) => setProducts(data))

  }, [])

  const handleClick = (id) => {
    // console.log(id, "id")
    getProductByCategory(id)
      .then((data) => setProductsBasedOnCategory(data))


  }
  return (
    <>
      <div className=''>
        <div className='relative'>
          <img src="/one.jpg" alt="" className='h-40 w-full object-cover' />
          <p className='absolute text-white top-6 left-52 text-4xl font-semibold '> Products </p>
          <p className='absolute text-white top-16 left-52'><Link href="/">Home</Link>/<span className='text-orange-500'>Products</span></p>
        </div>
        <div className="flex md:flex-row mt-14 justify-center items-center gap-3">
          {
            categories.map((category) => {
              return (

                <button href="#" className="  block py-1 px-5 text-gray-100 bg-white rounded-lg md:bg-transparent md:text-gray-400 md:px-5 md:py-1 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200 md:border-solid md:border-[1px] md:border-gray-700  " aria-current="page" onClick={() => handleClick(category._id)} >{category.category_name}</button>
              )
            })
          }

        </div>
        <div className="flex md:flex-row md:gap-16 mb-12 mt-10 justify-center items-center flex-wrap ">
          {
            products.map((product) => {

              return <Product key={product._id} product={product} />
            })
          }


        </div>
      </div>
    </>
  );
}

export default index;