

import { useEffect, useState } from "react";
import { getAllCategories } from "./api/categoryAPI";
import { getAllProduct, getProductByCategory } from "./api/productAPI";
import Carousel from "./Components/Carousel";
import Product from "./Components/Product";


export default function Home() {
  let [categories, setCategories] = useState([])
  let [products, setProducts] = useState([])
  let [productsBasedOnCategory, setProductsBasedOnCategory] = useState([])

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))

    getAllProduct()
      .then((data) => setProducts(data))

  }, [])

  // console.log(categori6661c8e544b96bf31b45981ces, "Categories")
  // console.log(products, "products")
  console.log(productsBasedOnCategory, "productsBasedOnCategory")

  const handleClick = (id) => {
    // console.log(id, "id")
    getProductByCategory(id)
      .then((data) => setProductsBasedOnCategory(data))
  }
  return (
    <div className="w-3/4 m-auto" >
      <Carousel />
      <div>
        <h1>
          OUR PRODUCT
        </h1>
        <p> A comprehensive range of KSB pumps and valves</p>
        <div className="flex md:flex-row">
          {
            categories.map((category) => {
              return (

                <button href="#" className="block py-2 px-3 text-gray-700 bg-white rounded md:bg-transparent md:text-gray-700 md:p-2 dark:text-white md:dark:text-blue-500 hover:md:bg-blue-700 hover:md:text-white hover:duration-200 md:border-solid md:border-[1px] md:border-y-gray-700 " aria-current="page" onClick={() => handleClick(category._id)} >{category.category_name}</button>
              )
            })
          }

        </div>
        <div className="flex md:flex-row md:gap-4 mb-12">
          {
            products.map((product) => {

              return <Product product={product} />
            })
          }


        </div>
        <h1>
          ABOUT KSB
        </h1>
        <p>
          Excellent products and first-class service
        </p>
      </div>
    </div>
  );
}
