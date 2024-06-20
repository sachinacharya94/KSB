import { getAllCategories } from '@/pages/api/categoryAPI';
import { getProductById, updateProduct } from '@/pages/api/productAPI';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const edit_Product = () => {

    let [categorys, setCategorys] = useState([]);
    let [productById, setProductById] = useState({});
    const params = useParams()
    let id = params?.id;



    // let [product, setProduct] = useState({
    //     title: "",
    //     category: "",
    //     about: "",
    //     application: '',
    //     formdata: new FormData,
    // });

    let { title, category, about, application } = productById;



    let [error, setError] = useState("");
    let [success, setSuccess] = useState("false");

    console.log(productById, "Product By IDDDDDD")


    const handleChange = (e) => {
        if (e.target.name === "image") {
            // formdata.set('image', e.target.files[0])
            // formdata.set('imageUrl', productById.image)
        }
        else {
            // formdata.set(e.target.name, e.target.value)
            setProductById({ ...productById, [e.target.name]: e.target.value });
        }

    };

    useEffect(() => {

        getAllCategories().then((data) => {
            if (data) {
                setCategorys(data);
            }
        });

        getProductById(id).then((data) => {
            if (data) {
                setProductById(data)
            }
        }
        )



    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()

        formData.append("title", title);
        formData.append("category", category);
        formData.append("about", about);
        formData.append("application", application);

        for (let item of formData) {
            console.log(item[0], item[1])
        }

        updateProduct(id, formData).then((data => {
            if (data && data.error) {
                setError(data.error);
                setSuccess(false);
            } else {
                setSuccess(true);
                setProductById({
                    title: "",
                    price: "",
                    description: "",
                    count_in_stock: "",
                });
                // sel_ref.current.value = "";
                // file_ref.current.value = "";
                setError("");
            }
        }))
    }

    const showError = () => {
        if (error) {
            return <div className="bg-red-200 text-center">{error} </div>;
        }
    };
    const showSuccess = () => {
        if (success) {
            return (
                <div className="bg-green-200 text-center">
                    Product Added Successfully.
                </div>
            );
        }
    };

    return (
        <>
            <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                className=" overflow-y-auto overflow-x-hidden mx-auto z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full p-7 bg-slate-50"
            >
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <button type="general">
                        <Link href="/admin/product">Back</Link>
                    </button>

                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Edit Product
                            </h3>
                        </div>

                        <form>
                            {showError}
                            {showSuccess}
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Product Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={productById.title}
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        About*
                                    </label>
                                    <input
                                        type="text"
                                        name="about"
                                        value={productById.about}
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Application*
                                    </label>
                                    <input
                                        type="text"
                                        name="application"
                                        value={productById.application}
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        onChange={handleChange}
                                    />
                                </div>



                                <div>
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category *
                                    </label>

                                    <select
                                        type="text"
                                        name="category"
                                        value={productById.category}
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type count in stock"
                                        required=""
                                        onChange={handleChange}
                                    >
                                        <option disabled selected>
                                            Select Category
                                        </option>
                                        {categorys.map((category) => {
                                            return (
                                                <option value={category._id} key={category._id}>
                                                    {category.category_name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>


                            </div>
                            <button
                                onClick={handleSubmit}
                                type="add"
                                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  "
                            >
                                <svg
                                    className="mr-1 -ml-1 w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Edit product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default edit_Product