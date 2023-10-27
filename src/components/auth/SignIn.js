import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { signIn } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./SignIn.css";

const SignIn = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		document.body.classList.add("signin-body");

		return () => {
			document.body.classList.remove("signin-body");
		};
	}, []);

	const onSignIn = (event) => {
		event.preventDefault();
		console.log("the props", props);
		const { msgAlert, setUser } = props;

		const credentials = { email, password };

		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: "Sign In Success",
					message: messages.signInSuccess,
					variant: "success",
				}),
			)
			.then(() => navigate("/"))
			.catch((error) => {
				setEmail("");
				setPassword("");
				msgAlert({
					heading: "Sign In Failed with error: " + error.message,
					message: messages.signInFailure,
					variant: "danger",
				});
			});
	};

	return (
		<div className="row">
			<div className="signin-page">
				<h3 className="addMargin">Enter Email and Password</h3>
				<Form onSubmit={onSignIn}>
					<Form.Group controlId="email">
						<Form.Control
							required
							type="email"
							name="email"
							value={email}
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Control
							required
							name="password"
							value={password}
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Log In
					</Button>
				</Form>
				<p className="register">
					Don't have an account?{" "}
					<Link className="signup-link" to="/sign-up">
						Register now
					</Link>
					.
				</p>
				<Link className="skip-btn" to="/">
					Skip{" "}
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
