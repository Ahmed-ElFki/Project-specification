import { useSelector } from "react-redux";

const CartTotal = () => {
	const shoppingCart = useSelector((state) => state);

	const handleSum = () => {
		let sum = 0;
		shoppingCart.map(
			(currentItem) => (sum += currentItem.price * currentItem.number)
		);
		return sum;
	};

	return (
		<div className='total-to-pay'>
			<p style={{ paddingRight: "10px" }}>Amount to pay : {handleSum()} €</p>
		</div>
	);
};

export default CartTotal;
