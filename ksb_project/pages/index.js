import { useEffect, useState } from "react";
import { getAllCategories } from "./api/categoryAPI";
import { getAllProduct, getProductByCategory } from "./api/productAPI";
import Product from "./Components/Product";
import Link from "next/link";
import Multiarousal from "./Components/Multiarousal";
import Sliders from "./Components/Carousel";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsBasedOnCategory, setProductsBasedOnCategory] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
    getAllProduct().then((data) => setProducts(data));
  }, []);

  const handleClick = (id) => {
    getProductByCategory(id).then((data) => setProductsBasedOnCategory(data));
  };

  return (
    <div>
      <Sliders />
      <div className="w-full md:w-3/4 m-auto mt-20 text-center relative mb-5 px-4">
        <h1 className="text-2xl md:text-4xl font-semibold">OUR PRODUCT</h1>
        <hr className="w-24 md:w-30 h-1 mx-auto my-4 bg-ksb border-0 rounded md:my-2 dark:bg-gray-700" />
        <p className="text-lg md:text-xl text-gray-500">
          A comprehensive range of KSB pumps and valves
        </p>
        <div className="flex flex-col md:flex-row mt-14 justify-center items-center gap-3">
          {categories.map((category) => (
            <button
              key={category._id}
              className="block py-1 px-3 md:px-5 text-gray-700 bg-white rounded-lg md:bg-transparent md:text-gray-700 md:py-1 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200 md:border-solid md:border-[1px] md:border-gray-700"
              onClick={() => handleClick(category._id)}
            >
              {category.category_name}
            </button>
          ))}
        </div>
        {productsBasedOnCategory.length > 0 ? (
          <div className="flex flex-col md:flex-row md:gap-4 mb-12 mt-10 justify-center items-center md:flex-wrap">
            {productsBasedOnCategory.slice(0, 2).map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:gap-4 mb-12 mt-10 justify-center items-center md:flex-wrap">
            {products.slice(0, 2).map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-20">
          <h1 className="text-2xl md:text-4xl font-semibold">ABOUT KSB</h1>
          <hr className="w-24 md:w-30 h-1 mx-auto my-4 bg-ksb border-0 rounded md:my-2 dark:bg-gray-700" />
          <p className="text-lg md:text-xl text-gray-500">
            Excellent products and first-class service
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-20 gap-4 px-4">
          <div className="w-full md:w-1/2 bg-blue-500 text-white text-left p-5">
            <p>
              Kirloskar Brothers Limited is a world-class pump manufacturing
              company with enterprise in engineering and manufacture of systems
              for fluid management. Established in 1888 and incorporated in 1920,
              KBL is a flagship company of the $2.1 billion Kirloskar Group. The
              market leader in fluid management, KBL provides complete fluid
              management solutions for large infrastructure projects in the areas
              of water supply, power plants, irrigation, oil & gas and marine &
              defence.
            </p>
            <button className="rounded-md bg-orange-500 p-2 px-3 mt-3">
              <Link href="/about">Read More</Link>
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/U8iWNaDuUek?si=zIJRS0rQ-tROmj3T"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20 mb-10 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">OUR CLIENTS</h1>
          <hr className="w-24 md:w-30 h-1 mx-auto my-4 bg-ksb border-0 rounded md:my-2 dark:bg-gray-700" />
          <p className="text-lg md:text-xl text-gray-500">
            We are associated with
          </p>
        </div>

        <Multiarousal />
      </div>
      <div className="h-36 w-full bg-ksb flex flex-col md:flex-row justify-center items-center gap-10 md:gap-32 p-4">
        <p className="text-white text-xl md:text-4xl">
          Want to be a part of our family?
        </p>
        <Link href="/contact">
          <button className="text-lg md:text-3xl block py-1 px-5 text-gray-100 bg-white rounded-lg md:bg-transparent md:text-white md:px-5 md:py-1 dark:text-white md:dark:text-blue-500 hover:md:bg-white hover:md:text-ksb hover:duration-200 md:border-solid md:border-[1px] md:border-white">
            Contact us now
          </button>
        </Link>
      </div>
    </div>
  );
}
