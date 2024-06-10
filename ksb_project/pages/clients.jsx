import React from 'react'
import { Clients } from "../raw.js"
import ClientsCard from './Components/ClientsCard.jsx'

const clients = () => {
    return (
        <div >
            <div className='relative'>
                <img src="/one.jpg" alt="" className='h-40 w-full object-cover' />
                <p className='absolute text-white top-6 left-52 text-4xl font-semibold '> Clients </p>
                <p className='absolute text-white top-16 left-52'>Home/<span className='text-orange-500'>Clients</span></p>
            </div>
            <div className='w-[1200px] m-auto flex flex-row gap-8 flex-wrap mt-7'>
                {
                    Clients.map((item) => {
                        return (
                            <div className=''>
                                <ClientsCard item={item} />

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default clients