import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFollowersThunk} from "../services/followers-thunks";
import {useEffect} from "react";

const FollowingTab = ({username}) => {
    const {followers} = useSelector((state) => state.followers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFollowersThunk(username))
    }, [dispatch, username]);
    return (
        <>
            <h1>Followers</h1>
            {followers.map((follower) => (
                <Link to={`/Profile/${follower.username}`} key={follower._id}>{follower.username}</Link>
            ))}
        </>
    )
}

export default FollowingTab