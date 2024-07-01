import React from 'react';
import { Clients } from "../raw.js";
import ClientsCard from './Components/ClientsCard.jsx';

const clients = () => {
    return (
        <div>
            <div className='relative'>
                <img src="/one.jpg" alt="" className='h-40 w-full object-cover' />
                <p className='absolute text-white top-6 left-4 md:left-20 lg:left-52 text-2xl md:text-4xl font-semibold'>Clients</p>
                <p className='absolute text-white top-16 left-4 md:left-20 lg:left-52 text-sm md:text-base'>
                    Home/<span className='text-orange-500'>Clients</span>
                </p>
            </div>
            <div className='w-full md:w-3/4 lg:w-[1200px] m-auto flex flex-col md:flex-row gap-4 md:gap-8 flex-wrap mt-7 px-4'>
                {
                    Clients.map((item) => {
                        return (
                            <div key={item.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
                                <ClientsCard item={item} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default clients;
