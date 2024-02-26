import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log("Location in login", location);
    const from = location.state?.from?.pathname || "/";

    console.log("1", { from });
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string;

        console.log({ username });
        console.log("2", { from });

        //logic to navigate after login
        navigate(from, { replace: true });
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{" "}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
