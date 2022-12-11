import {useParams, Navigate} from "react-router";
import ProfileInfo from "../profileInfo";
import FollowingTab from "../followingTab";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/auth-thunks";
import {addFollowerThunk} from "../../services/followers-thunks";
import Button from "../../util-components/button";
import {useState} from "react";

const OtherProfilePage = () => {
    const {username} = useParams()
    const {profileInfo, currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [loginAction, setLoginAction] = useState(false)
    if (!profileInfo) {
        dispatch(profileThunk({username: username}))
        return 'Loading...'
    }
    const followUser = () => {
        if (!currentUser) {
            setLoginAction(true)
            return
        }
        dispatch(addFollowerThunk({username: username, currentUser: currentUser.username}))
    }
    if (loginAction) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={'outer'}>
            <div className={'alignProfileInfo'}>
                <ProfileInfo profileInfo={profileInfo} usePrivate={false}/>
            </div>
            <Button type={'secondary'} onClick={(_) => followUser()}>Follow</Button>
            <FollowingTab username={username}/>
        </div>
    )
}

export default OtherProfilePage