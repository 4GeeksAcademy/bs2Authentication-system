import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mt-auto py-3 text-center">
			<div className="container-fluid justify-content-center fst-italic">
				<Link className="text-decoration-none" to="/">
					<span className="navbar-brand mb-0 h1 text-light">Authenticator App</span>
				</Link>
			</div>
		</nav>
	);
};
