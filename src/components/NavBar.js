import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
			<nav className="navbar navbar-expand-sm navrbar-light bg-light">
				<Link to="/" className="navbar-brand pl-3 text-orange text-slanted">
					<h4>Trivia Quiz</h4>
				</Link>
				<div className="collapse navbar-collapse show ml-sm-5 justify-content-end">
					<ul className="navbar-nav">
						<li className="navbar-item pl-3">
							<Link to="/" className="nav-link text-secondary">
								<h5>Home</h5>
							</Link>
						</li>
						<li className="navbar-item pl-3">
							<Link to="/game" className="nav-link text-secondary">
								<h5>Quiz</h5>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
}

export default NavBar
