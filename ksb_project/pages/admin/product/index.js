import { deleteProduct, getAllProduct } from '@/pages/api/productAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


const index = () => {
    let [products, setProducts] = useState([]);
    let router = useRouter()


    useEffect(() => {
        getAllProduct().then((data) => {
            if (data) {
                setProducts(data);
            }
        });
    }, []);

    const handleDelete = (id) => (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Confirm ",
            text: "Are you sure you want to delete this product?",
            icon: "question",
            showCancelButton: true,
            cancelButtonColor: "#dd1111",
            confirmButtonText: "OK, Delete!",
            position: "center",

        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id).then((data) => {
                    if (data && data.error) {
                        Swal.fire("Error", data.error, "error");
                    } else {
                        Swal.fire("Success", data && data.message, "success").then((data) => {
                            router.refresh()
                        });
                    }
                });
            } else {
                Swal.fire("Cancelled", "Nothing is deleted ", "info");
            }
        });


    };

    return (
        <>
            <div className="p-0 text-center ml-1 w-full ">
                <h1 className="text-2xl">Products</h1>
                <button type="add">
                    {" "}
                    <Link href="/admin/product/new">Add New Product</Link>
                </button>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] mx-auto mt-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                S.No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>


                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => {
                            return (
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {i + 1}
                                    </th>
                                    <td class="px-6 py-4">{product.product_title}</td>
                                    <td class="px-6 py-4">{product?.category?.category_name}</td>
                                    <td class="px-6 py-4 ">
                                        <img src='/one.jpg' className='h-[100px] w-[100px]' />
                                    </td>
                                    <td class="px-6 py-4 flex items-center">
                                        <Link
                                            href={`/admin/product/edit/${product._id}`}
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5"
                                        >
                                            <button type="warning">Edit</button>
                                        </Link>
                                        <button type="delete" onClick={handleDelete(product._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default index