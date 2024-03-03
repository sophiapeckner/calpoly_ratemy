import "./createAccount.css"

export default function CreateAccount () {
    return (
        <div className="createAccount">
            <span className="createAccountTitle">Register</span>
            <form className="createAccountForm">
                <label>Username</label>
                <input className="createAccountInput" type="text" placeholder="username"/>
                <label>Email</label>
                <input className="createAccountInput" type="text" placeholder="email"/>
                <label>Password</label>
                <input className="createAccountInput" type="password" placeholder="password" />
            </form>
            <button className="createAccountButton">Register</button>
        </div>
    )
}