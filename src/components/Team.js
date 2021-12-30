import {React,useState} from 'react'
import data from '../data/team'
import Pulse from 'react-reveal/Pulse';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Bounce from 'react-reveal/Bounce';
import {AiOutlineMail,AiFillPhone,AiFillDownCircle,AiFillUpCircle} from 'react-icons/ai';

export default function Team({state}) {

 
    return (
        <>
        <div className={`flex  items-center my-10 flex-col`}>
          
            <h1 className=' text-4xl underline m-2 font-serif p-2 '>

               Meet Our Team 
                
                </h1>
          

        <div className={`flex w-full overflow-scroll my-10 no-scrollbar ${!state ? '' :'flex-col items-center justify-center'}`}>
            {
                data.map((item,index)=>{
                    return (
                        <Pulse>
                            
                        <Member {...item} state={state}></Member>
                        </Pulse>


                        

)
})
}
        </div>
        {/* <button onClick={()=>setState(!state)}>change</button> */}
</div>
</>
    )
}


function Member({name,text,url,position,state}){
    
    const [show,setShow]=useState(false);
    return (
        <div className='flex   items-center justify-center'>

            <Tree></Tree>

        <div className={`flex flex-col  items-center justify-start  bg-blue cursor-pointer rounded-2xl  p-2 -rotate-2 ml-4 hover:rotate-0 ${!state ? 'team-div' : 'm-5'}`}>
        <img
        src={url}
        alt='#'
        className='h-64 w-64 rounded-full '
        ></img>
        <h1 className=' text-blue-600 text-xl'>{name}</h1>
        <div className='text-blue-600 text-xl'>
        {position}
    
        </div>
        <div className=' mt-2 flex gap-3 p-1 flex-row justify-center content-start '>
        <a href='https://www.linkedin.com/company/association-of-computer-engineering-students/mycompany/' target='_blank'><BsLinkedin className='cursor-pointer' size={20} color='black' /></a>
        <a href='https://www.linkedin.com/company/association-of-computer-engineering-students/mycompany/' target='_blank'><AiOutlineMail className='cursor-pointer' size={20} color='black' /></a>
        <a href='https://www.linkedin.com/company/association-of-computer-engineering-students/mycompany/' target='_blank'><AiFillPhone className='cursor-pointer' size={20} color='black' /></a>
        
        </div>
        
        {show===true?
        <>
        <button onClick={()=>{setShow(!show)}}><AiFillUpCircle size={20}/></button>
        <Bounce left><div className=' bg-sky-100 p-2  rounded-2xl shadow-xl shadow-slate-500 '>{text || "I’m a graphic designer with over five years of experience specialising in creating beautiful, unique website experiences that make users’ time with a brand more enjoyable. I’m looking forward to growing my management skills to hopefully develop and inspire a team of my own.I’m a graphic designer with over five years of experience specialising in creating beautiful, unique website experiences that make users’ time with a brand more enjoyable. I’m looking forward to growing my management skills to hopefully develop and inspire a team of my own."}</div></Bounce></>
        :<button onClick={()=>{setShow(!show)}}><AiFillDownCircle size={20}/></button> }
        



        
        </div>
        
        <Tree right={true}></Tree>
        </div>
    )
}


function Tree({right}){
    return (
        <img src="/image/team_tree.svg" className={` hidden sm:block h-36 ${right?'-rotate-90':'rotate-90'}`} alt="#"></img>
    )
}

