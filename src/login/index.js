import {useState} from "react";
import Button from "../util-components/button";
import {loginThunk, signupThunk} from "../services/auth-thunks";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import './index.css'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [loginAttempted, setLoginAttempted] = useState(false)
    const {currentUser, loginFailed, signupFailed} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogin = () => {
        setLoginAttempted(true)
        if (username === '' || password === '') {
            return
        }
        const role = isAdmin ? "ADMIN" : "USER"
        dispatch(loginThunk({username, password, role}))
    }
    const handleRegister = () => {
        setLoginAttempted(true)
        if (username === '' || password === '') {
            return
        }
        const role = isAdmin ? "ADMIN" : "USER"
        dispatch(signupThunk({username, password, role}))
    }
    if (currentUser) {
        return (
            <Navigate to={'/Profile'}/>
        )
    }
    return (
        <>
            <div className={'loginFormContainer'}>
                <div>
                    <TextField
                        name="username"
                        label="Username"
                        variant="filled"
                        size="small"
                        value={username}
                        helperText={username === '' && loginAttempted? "Username is Required" : ''}
                        error={username === '' && loginAttempted}
                        onChange={event => setUsername(event.target.value)}
                    />
                </div>
                <br/>
                <TextField
                    name="password"
                    label="Password"
                    variant="filled"
                    size="small"
                    type="password"
                    value={password}
                    error={password === '' && loginAttempted}
                    helperText={password === '' && loginAttempted ? "Password is Required": ''}
                    onChange={event => setPassword(event.target.value)}
                />
                <br/>
                {loginFailed ? <h2 className={'errorMessage'}>Error: Username or Password is Incorrect</h2> : ''}
                {signupFailed ? <h2 className={'errorMessage'}>Error: Username is already in Use</h2> : ''}
                <br/>
                <FormControlLabel control={
                    <Checkbox checked={isAdmin} onChange={(event) => setIsAdmin(event.target.checked)} />
                } label={"Admin"}/>
                <br/>
                <Button onClick={handleLogin}>Login</Button>
                <br/>
                Or
                <br/>
                <Button onClick={handleRegister}>Sign Up</Button>
                <br/>
            </div>
        </>
    )
}

export default LoginPage