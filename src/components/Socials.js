import React from 'react'
import {BsFacebook,BsLinkedin,BsCloudFill,BsInstagram,BsDiscord} from 'react-icons/bs';
import Zoom from 'react-reveal/Zoom';

export default function Socials() {
    return (
        <div className="fixed flex flex-col h-screen items-center justify-center">
    

        {/* <div className='flex-1  w-1 bg-sky-400   mb-2 rounded-lg left'>

        </div>

        <div className='flex-none  w-1 bg-sky-400 h-1 rounded-full left mb-2 '>

        </div> */}

        <Zoom left>
            

        <div className="flex flex-col items-center justify-center bg-blue-700">

            <Icon 
            url='https://www.linkedin.com/company/association-of-computer-engineering-students/' 
            Component={BsLinkedin}
           
            ></Icon>
            <Icon 
            url='https://www.instagram.com/aces_it_nu/' 
            Component={BsInstagram}
            
            ></Icon>
            <Icon 
            url='https://www.facebook.com/aces.itnu/' 
            Component={BsFacebook}
            
            ></Icon>
            <Icon 
            url='https://technology.nirmauni.ac.in/student_work/aces/' 
            Component={BsCloudFill}
            ></Icon>
            <Icon 
            url='https://discord.com/invite/h7xHS7PFBj' 
            Component={BsDiscord}
            ></Icon>
           

        </div>
            </Zoom>
        </div>
    )
}


function Icon({url,Component,color}) {
    return (
        <a href={url} className='flex-1 ' target="_blank" rel="noreferrer">
        <Component size={30} className={'text-white my-2 mx-2  '+color}/>
    </a>
    )
}

