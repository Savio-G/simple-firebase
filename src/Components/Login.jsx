import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import app from "../firebase.init";
import { useState } from "react";
const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user, setUser] = useState(null)

    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggeduser = result.user
                console.log(loggeduser)
                setUser(loggeduser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggeduser = result.user
                console.log(loggeduser)
                setUser(loggeduser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleLogout = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {user && <div>
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>}
            {user ? <button onClick={handleLogout}> Logout</button>
                :
                <>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleGithubLogin}>Log in with Github</button>
                </>
            }
        </div>
    );
};

export default Login;