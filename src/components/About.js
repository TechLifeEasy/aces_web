import {React,useState,useEffect} from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Typewriter from 'typewriter-effect';

import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
let arr=['/image/nirma0.jpg','/image/nirma1.jpg','/image/nirma2.jpg','/image/nirma3.jpg','/image/nirma4.jpg'];
let n=5;
export default function About() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((index+1)%n);
        }, 3000);
        return () => clearInterval(interval);
      }, [index]);
    // timer();
    return (
        <div className='flex flex-col items-center my-10 w-9/12 m-auto'>
            <div className='relative flex flex-row gap-4 text-red-400'>
                 <Roll left><img src={arr[index]} className='block h-25 w-1/2 rounded-xl border-4 border-blue-300  ' alt='^' ></img></Roll>
                 <h1 className='text-green-500 '>Vision:</h1>
                 <Typewriter textStyle={{ color:"blue" }}
                     onInit={(typewriter)=>{
                         typewriter.typeString("Shaping a better future for mankind by developing effective and socially responsible individuals and organizations.").start();
                     }}
                 />
                 
                 <h1 className='text-green-500'>Mission:</h1>
                 <Typewriter
                     onInit={(typewriter)=>{
                         typewriter.typeString("Nirma University emphasizes the all-round development of its students.").start();
                     }}
                 />
                 {/* <button onClick={()=>{setIndex((index-1+n)%n)}}><AiOutlineDoubleLeft size={30} className='rounded-full absolute p-2 bg-slate-200 hover:bg-slate-500 bg-white-500 left-70 bottom-7  '/></button>
                <button onClick={()=>{setIndex((index+1)%n)}}><AiOutlineDoubleRight size={30} className='absolute rounded-full p-2 bg-slate-200 hover:bg-slate-500 left-20 bottom-7'/></button> */}
            </div>
                <div className='my-5'>
                <Zoom><p className='bg-blue-100 p-3 rounded-xl'>Renowned industrialist and philanthropist Dr Karsanbhai K Patel, the founder of the Nirma Group of Industries, established the Nirma Education and Research Foundation (NERF) in the year 1994 with a vision to promote higher education and to provide excellent educational facilities to the youth in India. In 1995, Nirma Institute of Technology – affiliated to Gujarat University – was established by the NERF. It was followed by the establishment of Nirma Institute of Management in 1996.</p></Zoom>
                <br/><Zoom><p className='bg-blue-100 p-3 rounded-xl'>In the year 2003, the Government of Gujarat approved the proposal of the NERF to found the Nirma University, Ahmedabad. Hence, the Nirma University was established under a special Act passed by the Gujarat State Legislative Assembly. The University Grants Commission (UGC) duly recognised the University under Section 2 (f) of the UGC Act.</p></Zoom>
                <br/><Zoom><p className='bg-blue-100 p-3 rounded-xl'>The NERF is equally committed to school education. It strongly believes in the fact that a strong foundation is a prerequisite for education. With this philosophy, it runs two schools ‘Nirma Vidyavihar’ at Bodakdev, Ahmedabad and at Chharodi, Ahmedabad. Here, it lays emphasis on providing value-based education along with innovative teaching practices.</p></Zoom>
                </div>
                
            <h1 className='text-3xl p-2'>Purpose Of ACES</h1>
            <img src='/image/Previous Event Photos/IMG_20191003_113836.jpg' width={"700px"} alt='^'></img>
            <div className='my-5'>
           <RubberBand><p className='bg-blue-100 p-3 rounded-xl'> Association of Computer Engineering Students (ACES), was established in 2001 by the Department of Computer Science and Engineering. All the students of the Department are members of ACES. ACES aims to make students technically stronger by organising various workshops and seminars on the latest technologies. The organisation also contributes to the betterment of society by organising socially relevant technical activities.</p></RubberBand>
           <br/><RubberBand><p className='bg-blue-100 p-3 rounded-xl'> Association of Computer Engineering Students (ACES), was established in 2001 by the Department of Computer Science and Engineering. All the students of the Department are members of ACES. ACES aims to make students technically stronger by organising various workshops and seminars on the latest technologies. The organisation also contributes to the betterment of society by organising socially relevant technical activities.</p></RubberBand>
           <br/><RubberBand><p className='bg-blue-100 p-3 rounded-xl'> Association of Computer Engineering Students (ACES), was established in 2001 by the Department of Computer Science and Engineering. All the students of the Department are members of ACES. ACES aims to make students technically stronger by organising various workshops and seminars on the latest technologies. The organisation also contributes to the betterment of society by organising socially relevant technical activities.</p></RubberBand>
           <br/><RubberBand><p className='bg-blue-100 p-3 rounded-xl'> Association of Computer Engineering Students (ACES), was established in 2001 by the Department of Computer Science and Engineering. All the students of the Department are members of ACES. ACES aims to make students technically stronger by organising various workshops and seminars on the latest technologies. The organisation also contributes to the betterment of society by organising socially relevant technical activities.</p></RubberBand>
           

            </div>

        </div>
    )
}
