import {Link} from "react-router-dom";
import './index.css'
import {useLocation} from "react-router";

const NavBar = () => {
    const activeTab = useLocation().pathname;
    return (
        <div className="navbar">
            <ul className="nav-links">
                <div className={'nav-link ' + (activeTab === '/Home' ? 'active' : '')}>
                    <Link to={'Home'}>Home</Link>
                </div>
                <div className={'nav-link ' + (activeTab === '/Search' ? 'active' : '')}>
                    <Link to={'Search'}>Search</Link>
                </div>
                <div className={'nav-link ' + (activeTab === '/Profile' ? 'active' : '')}>
                    <Link to={'Profile'}>My Profile</Link>
                </div>
                <div className={'nav-link ' + (activeTab === '/Login' ? 'active' : '')}>
                    <Link to={'Login'}>Login</Link>
                </div>
            </ul>
        </div>
    )
}

export default NavBar