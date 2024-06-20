import React, { useEffect, useState } from 'react'
import { getProductById } from '../api/productAPI'
import { useParams } from 'next/navigation'

const products = () => {
  let params = useParams()
  const id = params?.id
  const [product, setProduct] = useState({})
  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .catch(err => console.log(err))
  }, [])
  console.log(product)
  return (
    <div>
      <div className='relative'>
        <img src="/one.jpg" alt="" className='h-40 w-full object-cover' />
        <p className='absolute text-white top-6 left-52 text-4xl font-semibold '> {product.title}wwd </p>
        <p className='absolute text-white top-16 left-52'>Home/<span className='text-orange-500'>{product.title}</span></p>
      </div>

      <div className='w-[60%] mx-auto mt-10 md:border-[1px] md:border-solid md:border-black'>
        <img src="/one.jpg" alt={product.title} className='h-40 w-40 object-cover' />
        <hr />
        <h1>{product.title}</h1>
        <h4><u>About:</u></h4>
        <p className='mb-4'>{product.about}</p>
        <h4><u>Application:</u></h4>
        <p className='mb-4'>{product.application}</p>



        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Capacity
                </th>
                <td class="px-6 py-4">

                </td>

              </tr>


            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default products