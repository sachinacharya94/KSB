import Image from 'next/image'
import React from 'react'

const ClientsCard = ({ item }) => {
  return (
    <div className='h-[270px] w-[345px] rounded-lg md:border-gray-600 md:border-[1px] md:border-solid flex flex-col justify-center items-center'>

      <Image src={item.image} width={300} height={100} />
      <p className=' mt-6'>{item.name}</p>
    </div>
  )
}

export default ClientsCard