import Link from 'next/link'
import React, { useState } from 'react'
import { addMessage } from './api/contactAPI'
import Swal from 'sweetalert2'

const contactUs = () => {
    let [message, setMessage] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })

    }

    console.log(message, "Message123")

    const handleClick = (e) => {
        e.preventDefault()
        addMessage(message)
            .then(data => {
                if (data && data.error) {
                    Swal.fire("Error", data.error, "error")
                }
                else {
                    Swal.fire("Success", "Message Sent Successfully!", "success")
                }
            })

    }
    return (
        <>
            <div className='relative'>
                <img src="/one.jpg" alt="" className='h-40 w-full object-cover' />
                <p className='absolute text-white top-6 left-52 text-4xl font-semibold '> Contact Us </p>
                <p className='absolute text-white top-16 left-52'><Link href='/'>Home/</Link><span className='text-orange-500'>Contact Us</span></p>
            </div>

            <div className='w-[1200px] m-auto flex justify-center items-center mt-14'>
                <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.662849528074!2d85.31829767492158!3d27.665901027319272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000a4f32cf%3A0x53f71813950137ff!2sEvolve%20IT%20Hub%20Nepal!5e0!3m2!1sen!2snp!4v1718008335729!5m2!1sen!2snp" width="1000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='w-[1200px] m-auto mt-14 flex flex-row gap-5 justify-evenly'>
                <div className='w-1/3'>
                    <p className='text-3xl font-medium'>Address</p>
                    <p>Kathmandu, Nepal</p>
                    <p className='text-3xl font-medium mt-7'>Phone</p>
                    <p>123456789</p>

                </div>
                <div className='w-1/2'>
                    <div  >
                        <form className="mb-6">
                            <div className="mb-6">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="name" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Xyz" required onChange={handleChange} />
                            </div>
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
                                <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz@gmail.com" required onChange={handleChange} />
                            </div>
                            <div className="mb-6">
                                <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                                <input type="text" id="subject" name='subject' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required onChange={handleChange} />
                            </div>
                            <div className="mb-6">
                                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                <textarea id="message" rows="4" name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." onChange={handleChange} ></textarea>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block" onClick={handleClick}>Send message</button>
                        </form>

                    </div>


                </div>
            </div>
        </>
    )
}

export default contactUs