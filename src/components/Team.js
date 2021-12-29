import React from 'react'
import data from '../data/team'

export default function Team({state}) {

    // const [state,setState]=useState(true);

    
 
    return (
        <div className={`flex  items-center my-10 flex-col`}>
            <h1 className=' text-4xl'>Team</h1>

        <div className={`flex w-full overflow-scroll my-10 no-scrollbar ${!state ? '' :'flex-col items-center justify-center'}`}>
            {
                data.map((item,index)=>{
                    return (
                        <>
                        <Member {...item} state={state}></Member>

    
                        </>

)
})
}
        </div>
        {/* <button onClick={()=>setState(!state)}>change</button> */}
</div>
    )
}


function Member({name,text,url,position,state}){


    return (
        <div className={`flex flex-col items-center justify-start flex-none w-1/3  bg-blue cursor-pointer rounded-sm p-4  -rotate-2 ml-4 hover:rotate-0 ${!state ? 'team-div' : 'm-5'}`}>
        <img
        
        src={url}
        alt='#'
        className='h-64'

        ></img>
        <h1 className=' text-blue-600 text-xl'>{name}</h1>
        <div className='text-blue-600 text-xl'>
        {position}
        </div>
        <div className=' text-justify'>{text || 'JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'}</div>
        </div>
    )
}


