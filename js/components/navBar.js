import React from "react";
import { Link } from "react-router-dom";

export const navBar = () => {
	return (
		<nav className="navBar navBar-light bg-light mb-3">
			<Link to="/">
				<span className="navBar-brand mb-0 h1">plantilla</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">comprueba lo que hace</button>
				</Link>
			</div>
		</nav>
	);
};