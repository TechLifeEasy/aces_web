import { React } from 'react'
import { Contact } from './Contact';
import Events from './Events';
import Team from './Team';
import About from './About';
import Home from './Home';



import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Router>
               
                <div className=' flex  items-end gap-0 bg-sky-500 px-10 text-xl cursor-pointer' >

                    <a href='https://nirmauni.ac.in/' className=' cursor-pointer' target='_blank'>

                        <img src='/image/nirma.png' className=' cursor-pointer w-10 mx-2' alt='^'></img>


                    </a>

                    <NavLink className='p-1 my-auto hover:bg-indigo-900 text-center text-zinc-100 font-serif z-10' to='/' style={({ isActive }) => (isActive ? { background: "rgb(49, 46, 129)",   padding: "6px", } : {padding: "6px"})}>Home</NavLink>
                    <NavLink className='  p-1 my-auto  hover:bg-indigo-900 text-center text-zinc-100 font-serif z-10' to='/' style={({ isActive }) => (isActive ? { background: "rgb(49, 46, 129)"  , padding: "6px" } : {padding: "6px"})}
                     to='/events'>Events</NavLink>
                    <NavLink className='  p-1 my-auto  hover:bg-indigo-900 text-center text-zinc-100 font-serif z-10' to='/' style={({ isActive }) => (isActive ? { background: "rgb(49, 46, 129)"  , padding: "6px",  } : {padding: "6px"})}
                     to='/team'>Team</NavLink>
                    <NavLink className='  p-1 my-auto  hover:bg-indigo-900 text-center text-zinc-100 font-serif z-10' to='/' style={({ isActive }) => (isActive ? { background: "rgb(49, 46, 129)"  , padding: "6px",  } : {padding: "6px"})}
                     to='/about'>About Us</NavLink>
                    <NavLink className='  p-1 my-auto  hover:bg-indigo-900 text-center text-zinc-100 font-serif z-10' to='/' style={({ isActive }) => (isActive ? { background: "rgb(49, 46, 129)"  , padding: "6px",  } : {padding: "6px"})} 
                    to='/contact'>Contact Us</NavLink>


                    
                </div>
                <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/events" element={<Events state={true} />} />
                    <Route exact path="/team" element={<Team state={true} />} />
                    <Route exact path="/about" element={<About />} />
                    {/* <Route exact path="/About us" element={</>}/> */}
                </Routes>
            </Router>
        </div>
    )
}
