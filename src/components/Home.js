import { useState } from "react";
import CartMain from "../components/CartMain";
import ItemsList from "../components/ItemsList";
import img from "../res/OPPO A93.jpg";

const Home = () => {
	const productsList = [
		{ id: 1, name: "OPPO A93", image: img, price: 1999, available: true },
		{ id: 2, name: "OPPO A93", image: img, price: 2999, available: false },
		{ id: 3, name: "OPPO A93", image: img, price: 3999, available: true },
	];

	// eslint-disable-next-line
	const [products, setProducts] = useState(productsList);

	return (
		<div>
			<CartMain />
			<ItemsList items={products} />
		</div>
	);
};

export default Home;
