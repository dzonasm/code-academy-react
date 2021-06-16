// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ShoppingItemComponent } from "../shopping-list-item/shopping-item.component";

const TestComponent = ({ text }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		async function getData() {
			let res = await fetch("https://simutis.dev/api/generate-shopping-cart?limit=10");
			res = await res.json();
			setData(res);
			setLoading(false);
		}
		getData();
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading</p>
			) : (
				data.map(el => <ShoppingItemComponent data={data} key={el.id} shoppingItem={el} />)
			)}
		</div>
	);
};

export { TestComponent };
