import {useDispatch} from "react-redux";
import {useState} from "react";
import {updateProfileThunk} from "../services/auth-thunks";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "../util-components/button";

const ProfileInfo = ({profileInfo, usePrivate}) => {
    const dispatch = useDispatch()
    const user = profileInfo.user;
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [bio, setBio] = useState(user.bio)
    const [isAdmin, setIsAdmin] = useState(user.role === 'ADMIN')
    const submitForm = () => {
        dispatch(updateProfileThunk(
            {
                ...user,
                firstName: firstName,
                lastName: lastName,
                email: email,
                role: isAdmin? 'ADMIN' : 'USER'
            }))
        setIsEditing(false)
    }
    return (
        <>
            <TextField
                name="username"
                label="Username"
                variant="filled"
                size="small"
                value={user.username}
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
            {
                usePrivate &&
                <TextField
                    name="Email"
                    label="Email"
                    variant="filled"
                    size="small"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditing}
                />
            }
            <br/>
            <br/>
            <TextField
                name="Bio"
                label="Bio"
                variant="filled"
                size="small"
                type="email"
                disabled={!isEditing}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                multiline
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
            {usePrivate &&
             (isEditing ?
              <Button onClick={() => submitForm()} type={'secondary'}
                      size={'sm'}>Save</Button> :
              <Button onClick={() => setIsEditing(true)} type={'secondary'}
                      size={'sm'}>Edit</Button>)
            }
        </>
    )
}

export default ProfileInfo