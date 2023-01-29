import { Link } from "react-router-dom"
import "./nav.css"
import Search from "../Search/Search"
const NavBar = ()=>{
    return(
        <div className="container">
            <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-menu-item"><Link to='/' className="nav-menu-link nav-link">INICIO</Link></li>            
                <li className="nav-menu-item"><Link to='/home' className="nav-menu-link nav-link">HOME</Link></li>
                <li className="nav-menu-item"><Link to='/favoritos' className="nav-menu-link nav-link">FAVOTITOS</Link></li>
                <li className="nav-menu-item"><Link to='/create' className="nav-menu-link nav-link">CREATE</Link></li>
                <li className="nav-menu-item"><Search/></li>
            </ul>
            </nav>
        </div>
    )








}

export default NavBar;