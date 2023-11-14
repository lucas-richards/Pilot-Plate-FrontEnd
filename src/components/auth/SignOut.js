import { useNavigate } from "react-router-dom";

import { Button, ButtonGroup } from "react-bootstrap";

import { signOut } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props;
	console.log(props);

	const navigate = useNavigate();

	const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: "Signed Out Successfully",
					message: messages.signOutSuccess,
					variant: "success",
				}),
			)
			.finally(() => navigate("/"))
			.finally(() => clearUser());
	};
	console.log("user", user);

	// const onCancel = () => {
	//     navigate('/')
	// }

	return (
		<>
			<div className="signin-body">
				<div className="row">
					<div className="col-sm-10 col-md-8 mx-auto mt-5 text-center">
						<h1 className="addMargin">User email: {user.email}</h1>
						<h2>Are you sure you want to sign out?</h2>
						<small className="centerMe">We hate to see you go...</small>
						<br />
						<div className="centerMe">
							<ButtonGroup>
								<Button variant="danger" onClick={onSignOut}>
									Sign Out
								</Button>
							</ButtonGroup>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignOut;
