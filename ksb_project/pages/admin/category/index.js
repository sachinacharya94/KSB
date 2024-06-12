import { getAllCategories } from '@/pages/api/categoryAPI'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const category_page = () => {
    let [categories, setCategories] = useState([])


    useEffect(() => {
        getAllCategories()
            .then(data => setCategories(data))
    }, [])

    console.log(categories)
    return (
        <div>
            <div>
                <div className='p-5 text-center'>
                    <h1>Categories</h1>
                    <Link href='/admin/category/new'><button type='add'>Add new Category</button></Link>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    S.No
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Category Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((category, i) => {
                                    return <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {i + 1}
                                        </th>
                                        <td className="px-6 py-4">
                                            {category.category_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={`/admin/category/edit/${category._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><button type='warning'>Edit</button></Link>
                                            <button type='delete' onClick=''>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default category_page