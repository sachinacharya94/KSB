import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-3/4 m-auto'>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex md:flex-wrap md:items-center justify-between mx-auto p-4 mr-0 ">
                    <Link href='/'><img src="/logo.jpg" alt="" /></Link>    

                    <div className="w-full md:block md:w-auto   mr-0" id="navbar-default">


                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:justify-end md:text-center">


                            <li>
                                <Link href="/" className="block py-2 px-3 text-gray-700 bg-white rounded md:bg-transparent md:text-gray-700 md:p-2 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200" aria-current="page" >HOME</Link>
                            </li>
                            <li>
                                <Link href="/clients" className="block py-2 px-3 text-gray-700 bg-white rounded md:bg-transparent md:text-gray-700 md:p-2 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200">CLIENTS</Link>
                            </li>
                            <li>
                                <Link href="/products" className="block py-2 px-3 text-gray-700 bg-white rounded md:bg-transparent md:text-gray-700 md:p-2 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200">OUR PRODUCTS</Link>
                            </li>
                            <li>
                                <Link href="/about" className="block py-2 px-3 text-gray-700 bg-white rounded md:bg-transparent md:text-gray-700 md:p-2 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200">ABOUT US</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block py-2 px-3 text-gray-700 bg-white rounded md:bg-transparent md:text-gray-700 md:p-2 dark:text-white md:dark:text-blue-500 hover:md:bg-ksb hover:md:text-white hover:duration-200">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header