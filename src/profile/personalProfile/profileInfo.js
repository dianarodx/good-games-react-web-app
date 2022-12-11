import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {profileThunk, updateProfileThunk} from "../../services/auth-thunks";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "../../util-components/button";

const ProfileInfo = () => {
    const {profileInfo, currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    if (!profileInfo) {
        dispatch(profileThunk(currentUser.username))
    }
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(currentUser.firstName)
    const [lastName, setLastName] = useState(currentUser.lastName)
    const [isAdmin, setIsAdmin] = useState(currentUser.role === 'ADMIN')
    const submitForm = () => {
        dispatch(updateProfileThunk(
            {
                ...currentUser,
                firstName: firstName,
                lastName: lastName,
                role: isAdmin? 'ADMIN' : 'USER'
            }))
        setIsEditing(false)
    }
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
            <br/>
            <TextField
                name="First Name"
                label="First Name"
                variant="filled"
                size="small"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={!isEditing}
            />
            <br/>
            <br/>
            <TextField
                name="Last Name"
                label="Last Name"
                variant="filled"
                size="small"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={!isEditing}
            />
            <br/>
            <br/>
            <FormControlLabel control={
                <Checkbox
                    checked={isAdmin}
                    disabled={!isEditing}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                />
            } label={"Admin"}/>
            <br/>
            <br/>
            {isEditing ?
             <Button onClick={() => submitForm()} type={'secondary'} size={'sm'}>Save</Button> :
             <Button onClick={() => setIsEditing(true)} type={'secondary'} size={'sm'}>Edit</Button>}
        </>
    )
}

export default ProfileInfo