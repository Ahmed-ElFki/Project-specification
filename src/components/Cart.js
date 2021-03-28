import CartDetails from "./CartDetails";
import CartMain from "./CartMain";
import CartTotal from "./CartTotal";

const Cart = () => {
	return (
		<div>
			<CartMain />
			<CartDetails />
			<CartTotal />
		</div>
	);
};

export default Cart;
