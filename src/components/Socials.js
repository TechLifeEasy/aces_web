import React from 'react'
import {BsFacebook,BsLinkedin,BsCloudFill,BsInstagram} from 'react-icons/bs';


export default function Socials() {
    return (
        <div className="fixed flex flex-col h-screen items-center justify-between left-1">
    

        <div className='flex-1  w-1 bg-black  mx-3 mb-2 '>

        </div>

        <div className='flex-none  w-1 bg-black h-1 rounded-full mx-3 '>

        </div>

        <div className="flex flex-col items-center justify-center p-1">

            <Icon 
            url='https://www.facebook.com/aces.itnu/' 
            Component={BsFacebook}
            color='text-blue-600'
            ></Icon>
            <Icon 
            url='https://www.instagram.com/aces_it_nu/' 
            Component={BsInstagram}
            color='text-red-500'
            ></Icon>
            <Icon 
            url='https://www.linkedin.com/company/association-of-computer-engineering-students/' 
            Component={BsLinkedin}
            color='text-blue-600'
            ></Icon>
            <Icon 
            url='https://technology.nirmauni.ac.in/student_work/aces/' 
            Component={BsCloudFill}
            ></Icon>
           
    

 
            
        </div>
        </div>
    )
}


function Icon({url,Component,color}) {
    return (
        <a href={url} className='flex-1 ' target="_blank" rel="noreferrer">
        <Component size={25} className={'text-base mb-3 ml-1 '+color}/>
    </a>
    )
}

