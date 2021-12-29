import React from 'react'
import data from '../data/events';

export default function Events({state}) {

    // const [state,setState]=useState(true);


    return (
        <div className='flex flex-col items-center my-10'>
            <h1 className=' text-4xl'>Events</h1>

        <div className={`flex w-full overflow-scroll no-scrollbar my-10 ${!state ? '' :'flex-col items-center justify-center'}`}>
            {
                data.map((item,index)=>{
                    return (
                        <>
                        <Event {...item} state={state}></Event>

                        {
                            index!==data.length-1
                            &&
                            <img src="/image/event_line.svg"  className="h-36" alt="%"></img>
                        }

                        
                        </>

)
})
}
        </div>
        {/* <button onClick={()=>setState(!state)}>change</button> */}
</div>
    )
}

function Event({name,text,url,state}){


    return (
        <div className={`flex flex-col items-center justify-center flex-none w-2/3  bg-blue cursor-pointer rounded-sm  ${!state ? 'team-div' : ' m-3'}`}>
        <img
        
        src={url}
        alt='#'
        className={!state ?`h-64` : 'h-80'}

        ></img>
        <h1 className=' text-blue-600 text-xl'>{name}</h1>
    
        <div className=' text-justify'>{text || 'JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'}</div>
        
        </div>
    )
}
