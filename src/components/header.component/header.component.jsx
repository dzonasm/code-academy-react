import React from "react";
import "./header.styles.css";

export const Header = ({ userOnline, handleOpenCounter, handleColor, color }) => {
	const background = () => {
		if (color === 2) return "red";
		if (color === 1) return "blue";
		return "green";
	};

	return (
		<nav style={{ background: background() }}>
			<ul className="navigation">
				<li onClick={() => handleColor()} className="nav-item">
					Change Color
				</li>
				<li onClick={() => handleOpenCounter()} className="nav-item">
					Open Counter
				</li>
				<li className="nav-item">About</li>
				{userOnline ? <li className="nav-item">User</li> : null}
			</ul>
		</nav>
	);
};
