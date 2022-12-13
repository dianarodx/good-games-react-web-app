import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingThunk} from "../services/followers-thunks";
import {useEffect} from "react";
import './index.css'

const FollowingTab = ({username}) => {
    const {following} = useSelector((state) => state.followers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFollowingThunk(username))
    }, [dispatch, username]);
    if (!following) {
        return 'Loading...'
    }
    return (
        <>
            <h1>Following</h1>
            {following.map((follower) => (
                <Link
                    className={'followingStyle'}
                    to={`/Profile/${follower.username}`}
                    key={follower._id}>{follower.username}</Link>
            ))}
        </>
    )
}

export default FollowingTab