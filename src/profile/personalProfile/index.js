import {profileThunk} from "../../services/auth-thunks";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";

const PersonalProfilePage = () => {
    const {profileInfo, currentUser} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    if (!profileInfo) {
        dispatch(profileThunk(currentUser.username))
    }
    console.log(profileInfo)
    return (
        profileInfo === null ? '' :
        <>
            <TextField
                name="username"
                label="Username"
                variant="filled"
                size="small"
                value={profileInfo.username}
                disabled
            />
            <br/>
            <TextField
                name="First Name"
                label="First Name"
                variant="filled"
                size="small"
                value={profileInfo.username}
                disabled
            />
            <h1>First Name: {profileInfo.firstName}</h1>
            <br/>
            <h1>Last Name: {profileInfo.lastName}</h1>
            <br/>
            <h1>Role: {profileInfo.role}</h1>
        </>
    )
}

export default PersonalProfilePage