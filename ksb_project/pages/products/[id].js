import React, { useEffect, useState } from 'react'
import { getProductById } from '../api/productAPI'
import { useParams } from 'next/navigation'

const products = () => {
  let params = useParams()
  const id = params?.id
  const [product, setProduct] = useState({})
  let { title, about, application, head, temperature, motor_rating, capacity } = product
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
        <p className='absolute text-white top-6 left-52 text-4xl font-semibold '> {title}wwd </p>
        <p className='absolute text-white top-16 left-52'>Home/<span className='text-orange-500'>{title}</span></p>
      </div>

      <div className='w-[60%] mx-auto mt-10 '>
        <img src="/one.jpg" alt={title} className='h-48 w-48 object-cover m-auto' />
        <hr />
        <h1 className='mt-3 mb-2'>{title}</h1>
        <h4><u>About:</u></h4>
        <p className='mb-4'>{about}</p>
        <h4><u>Application:</u></h4>
        <p className='mb-4'>{application}</p>



        <div class="relative overflow-x-auto">
          <table class="w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400  text-center">

            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Capacity
                </th>
                <td class="px-6 py-4">
                  {capacity}
                </td>

              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Head
                </th>
                <td class="px-6 py-4">
                  {head}
                </td>

              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Temperature
                </th>
                <td class="px-6 py-4">
                  {temperature}
                </td>

              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Motor Rating
                </th>
                <td class="px-6 py-4">
                  {motor_rating}
                </td>

              </tr>


            </tbody>
          </table>
          <hr />
        </div>
        <div className='flex justify-between mt-4'>

          <button type="button" class="text-gray-900 bg-white border border-black border-solid focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-bold">&lt;  Light</button>
          <button type="button" class="text-gray-900 bg-white border border-black border-solid focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-bold">  Night &gt;</button>
        </div>
      </div>
    </div>
  )
}

export default products