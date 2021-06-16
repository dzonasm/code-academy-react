import React from "react";
import "./shopping-list-item.css";

const ShoppingItemComponent = ({ shoppingItem }) => {
	const { id, price, name, vegan } = shoppingItem;
	return (
		<div key={id} className={`${vegan ? "vegan" : null}`}>
			<p>{name}</p>
			<p>{price.toFixed(2)}</p>
		</div>
	);
};

export { ShoppingItemComponent };
