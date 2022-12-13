import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFollowersThunk, getFollowingThunk} from "../services/followers-thunks";

const StatTab = ({username}) => {
    const {followers, following} = useSelector((state) => state.followers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFollowersThunk(username))
        dispatch(getFollowingThunk(username))
    }, [dispatch, username])
    if (following === null || followers === null) {
        return 'Loading...'
    }
    return (
        <>
            <h2>Followers: {followers.length}</h2>
            <h2>Following: {following.length}</h2>
        </>
    )
}

export default StatTab