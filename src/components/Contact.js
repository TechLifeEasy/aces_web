import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'



export const Contact = () => {
  return (
    <>
      <h1 className='text-4xl text-center my-5'>
    

        Contact Us
   
        
        </h1>
      <div className='flex flex-row overflow-auto'>
      
        <div className=" flex  w-1/2 bg-no-repeat h-1/2 mx-auto justify-center flex-col ">
          <form className="p-5  bg-sky-400 rounded-2xl shadow-2xl shadow-black-10/40">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide border-black-200 text-black-400 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-black-200 text-black-400 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Binod" />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-black-400 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-black-200 text-black-400 border border-black-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="grid-last-name" type="text" placeholder="Sharma" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-black-400 text-xs font-bold mb-2" for="grid-password">
                  Email Address
                </label>
                <input className="appearance-none block w-full bg-black-200 text-black-400 border border-black-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="grid-email" type="email" placeholder="********@*****.**" />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-black-400 text-xs font-bold mb-2" for="grid-password">
                  Your Message
                </label>
                <textarea rows="5" className="appearance-none block w-full bg-black-200 text-black-400 border border-black-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black-500">

                </textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-black-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">
                      Send me your newsletter!
                    </span>
                  </label>
                </div>
                <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                  Send Message
                </button>

              </div>
              {/* <div className='flex flex-row p-5 gap-7 justify-center items-center  m-auto mt-2'>
                <a href='https://www.facebook.com/aces.itnu/' target='_blank'><BsFacebook className='cursor-pointer' size={20} color='white' /></a>
                <a href='https://www.instagram.com/aces_it_nu/' target='_blank'><BsInstagram className='cursor-pointer' size={20} color='white' /></a>
                <a href='https://www.linkedin.com/company/association-of-computer-engineering-students/mycompany/' target='_blank'><BsLinkedin className='cursor-pointer' size={20} color='white' /></a>
              </div> */}
            </div>
          </form>
        </div>
           {/* <img src={process.env.PUBLIC_URL + '/image/contect.svg'} className='flex-1 w-1/2 h-screen' /> */}




      </div>
    </>


  )
}
