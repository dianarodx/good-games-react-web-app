import {useParams, Navigate} from "react-router";
import ProfileInfo from "../profileInfo";
import FollowingTab from "../followingTab";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/auth-thunks";
import {addFollowerThunk, removeFollowerThunk} from "../../services/followers-thunks";
import Button from "../../util-components/button";
import {useEffect, useState} from "react";
import StatTab from "../statTab";

const OtherProfilePage = () => {
    const {username} = useParams()
    const {profileInfo, currentUser} = useSelector((state) => state.users)
    const {followers} = useSelector((state) => state.followers)
    const dispatch = useDispatch()
    const [loginAction, setLoginAction] = useState(false)
    const [followingUser, setFollowingUser] = useState(
        currentUser && followers.find(e => e.username === currentUser.username)
    )
    useEffect(() => {
        dispatch(profileThunk({username: username}))
    }, [dispatch, username]);
    useEffect(() => {
        setFollowingUser(currentUser && followers.find(e => e.username === currentUser.username))
    }, [currentUser, followers])
    if (!profileInfo) {
        return 'Loading...'
    }
    const followUser = () => {
        if (!currentUser) {
            setLoginAction(true)
            return
        }
        dispatch(addFollowerThunk({username: username, currentUser: currentUser.username}))
    }
    const unfollowUser = () => {
        dispatch(removeFollowerThunk({username: username, currentUser: currentUser.username}))
    }
    if (loginAction) {
        return <Navigate to={'/login'}/>
    }
    if (currentUser && currentUser.username === username) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div className={'outer'}>
            <div className={'alignProfileInfo'}>
                <ProfileInfo profileInfo={profileInfo} usePrivate={false}/>
            </div>
            {
                followingUser ? <Button type={'secondary'} onClick={(_) => unfollowUser()}>Unfollow</Button>
                              : <Button type={'secondary'} onClick={(_) => followUser()}>Follow</Button>
            }

            <FollowingTab username={username}/>
            <StatTab username={username}/>
        </div>
    )
}

export default OtherProfilePage