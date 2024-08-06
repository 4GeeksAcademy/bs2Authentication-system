import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light mt-auto py-3 text-center">
			<div className="container-fluid justify-content-center fst-italic">
				<Link className="text-decoration-none" to="/">
					<span className="navbar-brand mb-0 h1 text-light">Authenticator App</span>
				</Link>
			</div>
			{/* <div className="ml-auto">
				{ !store.token ?
					<link to="/">
						<button>Login</button>
					</link>
					:
					<button onClick={() => actions.logout()}>Logout</button>
				}
			</div> */}
		</nav>
	);
};
