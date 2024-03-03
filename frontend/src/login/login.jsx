import "./login.css"

export default function Login () {
    return (
        <div className="login">
            <div>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Username</label>
                <input className="loginInput" type="text" placeholder="username"/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="password" />
            </form>
            <div className="buttons">
                <button className="loginButton">Login</button>
                <button className="createAccountButton">Create Account</button>
            </div>

            </div>
        </div>
    )
}