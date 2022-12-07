import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const PersonalProfilePage = () => {
    const {currentUser} = useSelector((state) => state.users)
    console.log(currentUser)
    if (!currentUser) {
        return (
            <Navigate to={'/Login'}/>
        )
    }
    return (
        <h1>My Profile</h1>
    )
}

export default PersonalProfilePage