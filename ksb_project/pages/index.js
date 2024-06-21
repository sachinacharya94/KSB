

import { useEffect, useState } from "react";
import { getAllCategories } from "./api/categoryAPI";
import { getAllProduct, getProductByCategory } from "./api/productAPI";
import Product from "./Components/Product";
import Link from "next/link";

import Multiarousal from "./Components/Multiarousal";
import Sliders from "./Components/Carousel";


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
  // console.log(productsBasedOnCategory, "productsBasedOnCategory")
  // console.log(products, "products")

  const handleClick = (id) => {
    // console.log(id, "id")
    getProductByCategory(id)
      .then((data) => setProductsBasedOnCategory(data))


  }


  return (
    <div  >
      <Sliders />
      <div className="w-3/4 m-auto mt-20 text-center relative mb-5">
        <h1 className="text-4xl font-semibold" >
          OUR PRODUCT
        </h1>
        <hr className="w-[120px] h-[1px] mx-auto my-4 bg-ksb border-0 rounded md:my-2 dark:bg-gray-700" />
        <p className="text-xl text-gray-500"> A comprehensive range of KSB pumps and valves</p>
        <div className="flex md:flex-row mt-14 justify-center items-center gap-3">
          {
            categories.map((category) => {
              return (

                <button href="#" className="  block py-1 px-5 text-gray-100 bg-white rounded-lg md:bg-transparent md:text-gray-400 md:px-5 md:py-1 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200 md:border-solid md:border-[1px] md:border-gray-700  " aria-current="page" onClick={() => handleClick(category._id)} >{category.category_name}</button>
              )
            })
          }

        </div>
        {
          productsBasedOnCategory.length > 0 ? <>
            <div className="flex md:flex-row md:gap-4 mb-12 mt-10 justify-center items-center md:flex-wrap ">
              {
                productsBasedOnCategory.slice(0, 2).map((product) => {

                  return <Product product={product} />
                })
              }


            </div>
          </>
            :
            <>

              <div className="flex md:flex-row md:gap-4 mb-12 mt-10 justify-center items-center md:flex-wrap ">
                {
                  products.slice(0, 2).map((product) => {

                    return <Product product={product} />
                  })
                }


              </div>
            </>
        }

        <div className="mt-20">
          <h1 className="text-4xl font-semibold ">
            ABOUT KSB
          </h1>
          <hr className="w-[120px] h-[1px] mx-auto my-4 bg-ksb border-0 rounded md:my-2 dark:bg-gray-700" />
          <p className="text-xl text-gray-500">
            Excellent products and first-class service
          </p>

        </div>
        <div className="h-[320px] w-[1170px] flex flex-row mt-20">
          <div className=" w-1/2 bg-blue-500 text-white text-left pl-5 pt-5 pr-8">
            <p>Kirloskar Brothers Limited is a world-class pump manufacturing company with enterprise in engineering and manufacture of systems for fluid management. Established in 1888 and incorporated in 1920, KBL is a flagship company of the $2.1 billion Kirloskar Group. The market leader in fluid management, KBL provides complete fluid management solutions for large infrastructure projects in the areas of water supply, power plants, irrigation, oil & gas and marine & defence.

            </p>
            <button className="rounded-md bg-orange-500 p-2 px-3 mt-3 "><Link href='/about'>Read More</Link></button>
          </div>
          <div className="w-1/2 ">
            <iframe width="560" height="320" src="https://www.youtube.com/embed/U8iWNaDuUek?si=zIJRS0rQ-tROmj3T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="flex flex-row mt-20 gap-10 mb-10 justify-center items-center">
          <div>
            <h1 className="text-4xl font-semibold ">
              OUR CLIENTS
            </h1>
            <hr className="w-[120px] h-[1px] mx-auto my-4 bg-ksb border-0 rounded md:my-2 dark:bg-gray-700" />
            <p className="text-xl text-gray-500">
              We are associated with
            </p>
          </div>


        </div>

        <Multiarousal />
      </div>
      <div className="h-36 w-full bg-ksb flex flex-row justify-center items-center gap-32">
        <p className="text-white text-4xl pl-0">Want to be a part of our family?</p>
        <Link href="/contact">
          <button className=" text-3xl block py-1 px-5 text-gray-100 bg-white rounded-lg md:bg-transparent md:text-white md:px-5 md:py-1 dark:text-white md:dark:text-blue-500 hover:md:bg-white hover:md:text-ksb hover:duration-200 md:border-solid md:border-[1px] md:border-white ">Contact us now</button>
        </Link>

      </div>
    </div>
  );
}
