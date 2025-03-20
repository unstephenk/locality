import {login, signup} from "@/app/login/actions";

export const LoginSignupForm = () => {
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password"/>
                </div>
                <button type="submit" className="btn btn-primary" formAction={login}>Log in</button>
                <button type="submit" className="btn btn-primary" formAction={signup}>Sign up</button>
            </form>
        </div>
    )
}