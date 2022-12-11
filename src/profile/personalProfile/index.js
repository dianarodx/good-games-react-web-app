import ProfileInfo from "../profileInfo";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/auth-thunks";

const PersonalProfilePage = () => {
    const {currentUser, profileInfo} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    if (!profileInfo || profileInfo.user.username !== currentUser.username) {
        dispatch(profileThunk({username: currentUser.username}))
        return 'Loading...'
    }
    return (
        <>
            <div className={'outer'}>
                <div className={'alignProfileInfo'}>
                    <ProfileInfo profileInfo={profileInfo} usePrivate={true}/>
                </div>
            </div>
        </>
    )
}

export default PersonalProfilePage