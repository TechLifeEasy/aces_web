import React from 'react'

export default function Team() {

    const data=[
        'zeel','kamla',
        'zeel','kamla',
        'zeel','kamla',
    ]
    return (
        <div className='flex flex-col items-center my-10'>
            <h1 className=' text-4xl'>Team</h1>

        <div className='flex w-full overflow-scroll no-scrollbar my-10'>
            {
                data.map((item,index)=>{
                    return (
                        <>
                        <Member name={item}></Member>

                        {/* {
                            index!==data.length-1
                            &&
                            <Wave/>
                            
                        } */}
                        </>

)
})
}
        </div>
</div>
    )
}


function Member({name,text,url,position}){


    return (
        <div className='flex flex-col items-center justify-center flex-none w-1/3  bg-blue cursor-pointer rounded-sm p-4 team-div -rotate-2 ml-4 hover:rotate-0'>
        <img
        
        src={url}
        alt='#'
        className=''

        ></img>
        <h1 className=' text-blue-600 text-xl'>{name}</h1>
        <div className='text-blue-600 text-xl'>
        {position}
        </div>
        <div className=' text-justify'>{text || 'JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'}</div>
        </div>
    )
}


