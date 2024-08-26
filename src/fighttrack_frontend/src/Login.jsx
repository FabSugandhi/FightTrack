import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        const endpoint = isSignUp ? "https://localhost:5001/api/auth/register" : "https://localhost:5001/api/auth/login";
        const userData = isSignUp ? { name, email, password } : { email, password };

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                navigate("/dashboard");
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || (isSignUp ? "Registration failed" : "Invalid login credentials"));
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setErrorMessage("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <h2 className="title is-3 has-text-centered">{isSignUp ? "Sign Up" : "Login"}</h2>
                    <form onSubmit={handleSubmit}>
                        {isSignUp && (
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className={`button is-primary is-fullwidth ${isLoading ? 'is-loading' : ''}`} disabled={isLoading}>
                                    {isSignUp ? "Sign Up" : "Login"}
                                </button>
                            </div>
                        </div>
                        {errorMessage && (
                            <div className="notification is-danger is-light mt-3">
                                {errorMessage}
                            </div>
                        )}
                    </form>
                    <div className="has-text-centered mt-4">
                        {isSignUp ? (
                            <p>
                                Already have an account?{" "}
                                <a onClick={() => setIsSignUp(false)}>Log In</a>
                            </p>
                        ) : (
                            <p>
                                Don't have an account?{" "}
                                <a onClick={() => setIsSignUp(true)}>Sign Up</a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;