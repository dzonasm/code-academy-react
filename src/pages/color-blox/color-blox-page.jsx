//@ts-nocheck
import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
const UserContext = createContext({
	userCredentials: { name: "", password: "" },
	setUserCredentials: () => {},
});

export const CreateUserPage = () => {
	const [userCredentials, setUserCredentials] = useState({
		name: "",
		password: "",
	});

	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/page">Create</Link>
						</li>
						<li>
							<Link to="/user">Show</Link>
						</li>
						<li>
							<Link to="/update">Update</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<UserContext.Provider value={{ userCredentials, setUserCredentials }}>
						<Route path="/page">
							<Create />
						</Route>
						<Route path="/user">
							<Show />
						</Route>
						<Route path="/update">
							<Edit />
						</Route>
					</UserContext.Provider>
				</Switch>
			</div>
		</Router>
	);
};

const Create = () => {
	const { setUserCredentials, userCredentials } = useContext(UserContext);
	const handleSubmit = e => {
		e.preventDefault();
		setUserCredentials({
			...userCredentials,
			name: e.target.name.value,
			password: e.target.password.value,
		});
		console.log("hello");
	};

	return (
		<form action="" onSubmit={e => handleSubmit(e)}>
			<label htmlFor="name">
				Name
				<input type="text" name="name" />
			</label>
			<label htmlFor="password">
				Password
				<input type="password" name="password" />
			</label>
			<button type="submit">Submit</button>
		</form>
	);
};

const Show = () => {
	const {
		userCredentials: { name },
	} = useContext(UserContext);
	console.log(name);
	return (
		<div>
			<h1>hello show</h1>
			<h1>{name}</h1>
		</div>
	);
};

const Edit = () => {
	const { userCredentials, setUserCredentials } = useContext(UserContext);

	const handleChange = e => {
		//@ts-ignore
		setUserCredentials({ ...userCredentials, name: e.target.value });
	};

	return <input type="text" onChange={e => handleChange(e)} />;
};
