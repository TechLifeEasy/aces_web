import {React} from 'react'
import { Contact } from './Contact';
import {BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Router>
                <NavLink to='/contact'>Contact Us</NavLink>
                <Routes>
                <Route exact path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    )
}
