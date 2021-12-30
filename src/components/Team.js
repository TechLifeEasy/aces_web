// <<<<<<< HEAD
import React from 'react'
import { Director, Chairman, Faculty_Advisor, board_members } from '../data/team'
// =======
import {useState} from 'react'
// import data from '../data/team'
import Pulse from 'react-reveal/Pulse';
import { BsFacebook, BsInstagram, BsLinkedin,BsThreeDots } from 'react-icons/bs'

import {AiFillDownCircle,AiFillUpCircle} from 'react-icons/ai'


import Fade from 'react-reveal/Fade';


export default function Team({ state }) {

// <<<<<<< HEAD
    // const [state,setState]=useState(true);



    return (
        <>
            <div className={`flex  items-center flex-col`}>

                {/* <h1 className=' text-4xl'>

                    Our Team

                </h1> */}


                <div className={`flex w-full overflow-scroll my-10 no-scrollbar ${!state ? '' : 'flex-col items-center justify-center'}`}>

                    <DataShow name='Director' data={Director}></DataShow>
                    <DataShow name='Chairman' data={Chairman}></DataShow>
                    <DataShow name='Faculty Advisor' data={Faculty_Advisor}></DataShow>
                    <DataShow name='Board Members' data={board_members}></DataShow>

                </div>
             
            </div>
        </>
    )
}


function DataShow({ name, data }) {

 
    return (
        
        <div className={`flex  items-center my-10 flex-col`}>
          
          <h1 className=' text-sky-400 text-4xl mb-5  '>{name}</h1>

             
                
          

            {
                data.map((item, index) => {
                    return (
                        <Pulse>

                            <Member {...item} ></Member>

                            <div className='my-2'></div>
                        </Pulse>

                    )
                })
            } 
        </div>


    )

}


function Member({name,text,url,position,state}){
    
    const [show,setShow]=useState(false);
    return (
        <div className='flex   items-center justify-center'>

            {/* <Tree></Tree> */}

        <div className={`flex flex-col  items-center justify-start  bg-blue cursor-pointer rounded-2xl  p-2  m-5}`}>
        <img
        src={url}
        alt='#'
        className='h-72 w-72 rounded-full '
        ></img>
        <h1 className=' text-blue-500 text-2xl mb-3 dark:text-white'>{name}</h1>
        <div className='text-blue-500 text-2xl mb-3 dark:text-white' >
        {position}
    
        </div>
        <div className=' mb-3 flex gap-3 p-1 flex-row justify-center content-start '>

        <a href='https://www.linkedin.com/company/association-of-computer-engineering-students/mycompany/' target='_blank'>
            <BsLinkedin className='dark:text-white cursor-pointer' size={25}  /></a>
        <a href='https://www.linkedin.com/company/association-of-computer-engineering-students/mycompany/' target='_blank'><BsFacebook className='dark:text-white cursor-pointer' size={25}  /></a>
        <a href='https://www.linkedin.com/company/association-of-computer-engineering-students/mycompany/' target='_blank'><BsInstagram className='dark:text-white cursor-pointer' size={25}  /></a>
        
        </div>
        
        {show===true?
        <>
        <button onClick={()=>{setShow(!show)}}><AiFillUpCircle className='dark:text-white' size={35}/></button>
        <Fade bottom><div className=' w-3/4 p-2 mb-5 rounded-2xl shadow-xl shadow-blue-200 '>
            
            {text ||
        
             "I’m a graphic designer with over five years of experience specialising in creating beautiful, unique website experiences that make users’ time with a brand more enjoyable. I’m looking forward to growing my management skills to hopefully develop and inspire a team of my own.I’m a graphic designer with over five years of experience specialising in creating beautiful, unique website experiences that make users’ time with a brand more enjoyable. I’m looking forward to growing my management skills to hopefully develop and inspire a team of my own."
            }
             </div></Fade></>
        :<button onClick={()=>{setShow(!show)}}><AiFillDownCircle className=' text-green-500 dark:text-white ' size={35}/></button> }
                
        </div>
        
        {/* <Tree right={true}></Tree> */}
{/* >>>>>>> contact */}
        </div>
    )
}


function Tree({ right }) {
    return (
        <img src="/image/team_tree.svg" className={` hidden sm:block h-36 ${right ? '-rotate-90' : 'rotate-90'}`} alt="#"></img>
    )
}

