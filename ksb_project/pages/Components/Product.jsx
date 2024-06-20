import Link from 'next/link'
import React from 'react'

const Product = ({ product }) => {
    return (
        <div >
            <div className='h-48 w-96 md:border-solid md:border-[1px] md:border-y-gray-700 rounded-md md:shadow-2xl relative '>
                <img src="" alt="" />
                <Link href={`/products/${product._id}`}>
                    <div className='h-[40px] w-[300px] text-white bg-blue-900 flex md:justify-center md:items-center font-bold absolute -bottom-5 left-12' >

                        {product?.title}

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Product