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
                <NavLink className='m-2' to='/'>Home</NavLink>
                <NavLink className='m-2' to='/contact'>Contact Us</NavLink>
                <NavLink  className='m-2' to='/events'>Events</NavLink>
                <NavLink  className='m-2' to='/about'>About</NavLink>
                <NavLink  className='m-2' to='/team'>team</NavLink>
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
