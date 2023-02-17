import React from "react";
import { Link} from "react-router-dom";
import { useSession } from "../firebase/UserProvider";



const Nav = () =>{
const { user } = useSession() ;
const id = user ? user.uid : null;
console.log(user)

    return(
            <div className='nav-div'>
                <nav className="navigation-nav">
                    <Link to={`/profile/${id}`} className="nav-link"> Profile Page </Link>
                    <Link to={`/todo/${id}`} className="nav-link"> Main Page </Link>
                    <Link to={`/users/${id}`} className="nav-link"> Users Page </Link>
                    <Link to={`/calculator/${id}`} className="nav-link"> Calculator Page </Link>
                    <Link to={`/mess/${id}`} className="nav-link"> Mess Page </Link>
                </nav>
            </div>
        )
}

export default Nav