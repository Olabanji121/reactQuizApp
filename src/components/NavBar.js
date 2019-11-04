import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
			<nav className="navbar navbar-expand-sm navrbar-light bg-light">
				<div className="pl-3">
					<Link
						to="/"
						className="navbar-brand  text-orange text-slanted border border-danger rounded bg-dark"
					>
						<span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
							Trivia Quiz
						</span>
					</Link>
				</div>

				<div className="collapse navbar-collapse show ml-sm-5 justify-content-end">
					<ul className="navbar-nav">
						<li className="navbar-item  pl-3">
							<Link to="/" className="nav-link  text-info">
								<h5>Home</h5>
							</Link>
						</li>
						<li className="navbar-item  pl-3">
							<Link to="/game" className="nav-link text-info">
								<h5>Quiz</h5>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
}

export default NavBar
