import {useState} from "react";
import Button from "../util-components/button";
import {loginThunk, signupThunk} from "../services/auth-thunks";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {currentUser, loginFailed, signupFailed} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(loginThunk({username, password}))
    }
    const handleRegister = () => {
        dispatch(signupThunk({username, password}))
    }
    if (currentUser) {
        return (
            <Navigate to={'/Profile'}/>
        )
    }
    return (
        <>
            <h1>Login Page</h1>
            <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={handleRegister}>Sign Up</Button>
            {loginFailed ? <h2>Login failed</h2> : ''}
            {signupFailed ? <h2>Sign Up failed</h2> : ''}
        </>
    )
}

export default LoginPage