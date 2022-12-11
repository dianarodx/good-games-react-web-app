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
                <div className={'nav-link ' + (activeTab === '/home' || activeTab === '/' ? 'active' : '')}>
                    <Link to={'home'}>Home</Link>
                </div>
                <div className={'nav-link ' + (activeTab === '/search' ? 'active' : '')}>
                    <Link to={'search'}>Search</Link>
                </div>
                <div className={'nav-link ' + (activeTab === '/profile' ? 'active' : '')}>
                    <Link to={'profile'}>My Profile</Link>
                </div>
                {currentUser ?
                 <div className={'nav-link'} onClick={logout}>
                     <Link to={'home'}>Logout</Link>
                 </div> :
                 <div className={'nav-link ' + (activeTab === '/login' ? 'active' : '')}>
                     <Link to={'login'}>Login</Link>
                 </div>
                }
            </ul>
        </div>
    )
}

export default NavBar