import React from "react";
import "./footer.styles.css";

export const Footer = ({ dark }) => {
	return (
		<footer className={`${dark ? "dark" : null}`}>
			<p>Hello from footer</p>
		</footer>
	);
};

// export class ClassFooter extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<footer className={`${this.props.dark ? "dark" : null}`}>
// 				<p>Hello from footer</p>
// 			</footer>
// 		);
// 	}
// }
