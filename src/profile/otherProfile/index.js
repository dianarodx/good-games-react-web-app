import {useParams} from "react-router";
import ProfileInfo from "../personalProfile/profileInfo";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/auth-thunks";

const OtherProfilePage = () => {
    const {username} = useParams()
    const {profileInfo} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    if (!profileInfo) {
        dispatch(profileThunk({username: username}))
        return 'Loading...'
    }
    return (
        <div className={'outer'}>
            <div className={'alignProfileInfo'}>
                <ProfileInfo profileInfo={profileInfo} usePrivate={false}/>
            </div>
        </div>
    )
}

export default OtherProfilePage