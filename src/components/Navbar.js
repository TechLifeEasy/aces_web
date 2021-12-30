import {React} from 'react'
import { Contact } from './Contact';
import Events from './Events';
import Team from './Team';
import About from './About';
import Home from './Home';

import {BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Router>
                <div className=' flex justify-end  items-end gap-2 bg-sky-500 px-10 h-10 ' >
                
                <NavLink className='m-2  p-1 my-auto hover:text-black text-center text-zinc-100 font-serif z-10' to='/' style={({isActive}) => ( isActive ? {background:"#003B73",borderRadius:"10px",padding:"6px",width:"70px"}:{})}>Home</NavLink>
                <NavLink  className='m-2  p-1 my-auto hover:text-black text-center text-zinc-100 font-serif z-10' to='/' style={({isActive}) => ( isActive ? {background:"#003B73",borderRadius:"10px",padding:"6px",width:"70px"}:{})} to='/events'>Events</NavLink>
                <NavLink  className='m-2  p-1 my-auto hover:text-black text-center text-zinc-100 font-serif z-10' to='/' style={({isActive}) => ( isActive ? {background:"#003B73",borderRadius:"10px",padding:"6px",width:"70px"}:{})} to='/team'>Team</NavLink>
                <NavLink  className='m-2  p-1 my-auto hover:text-black text-center text-zinc-100 font-serif z-10' to='/' style={({isActive}) => ( isActive ? {background:"#003B73",borderRadius:"10px",padding:"6px",width:"100px"}:{})} to='/about'>About Us</NavLink>
                <NavLink className='m-2  p-1 my-auto hover:text-black text-center text-zinc-100 font-serif z-10' to='/' style={({isActive}) => ( isActive ? {background:"#003B73",borderRadius:"10px",padding:"6px",width:"100px"}:{})} to='/contact'>Contact Us</NavLink>
                </div>
                <Routes>

                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/events" element={<Events state={true}/>}/>
                <Route exact path="/team" element={<Team state={true}/>}/>
                <Route exact path="/about" element={<About/>}/>
                {/* <Route exact path="/About us" element={</>}/> */}
                </Routes>
            </Router>
        </div>
    )
}
