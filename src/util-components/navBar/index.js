import {Link} from "react-router-dom";
import './index.css'
import {useLocation} from "react-router";
import {logoutThunk} from "../../services/auth-thunks";
import {useDispatch, useSelector} from "react-redux";

const NavBar = () => {
    const activeTab = useLocation().pathname;
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutThunk(currentUser))
    }

    return (
        <div className="navbar">
            <ul className="nav-links">
                <div className={'nav-link ' + (activeTab === '/Home' || activeTab === '/' ? 'active' : '')}>
                    <Link to={'Home'}>Home</Link>
                </div>
                <div className={'nav-link ' + (activeTab === '/Search' ? 'active' : '')}>
                    <Link to={'Search'}>Search</Link>
                </div>
                <div className={'nav-link ' + (activeTab === '/Profile' ? 'active' : '')}>
                    <Link to={'Profile'}>My Profile</Link>
                </div>
                {currentUser ?
                 <div className={'nav-link'} onClick={logout}>
                     <Link to={'Home'}>Logout</Link>
                 </div> :
                 <div className={'nav-link ' + (activeTab === '/Login' ? 'active' : '')}>
                     <Link to={'Login'}>Login</Link>
                 </div>
                }
            </ul>
        </div>
    )
}

export default NavBar