import { useDispatch, useSelector } from "react-redux";
import {
	addOneItem,
	minusOneItem,
	deleteItemFromChart,
} from "../actions/actions";

const CartDetails = () => {
	const shoppingCart = useSelector((state) => state);
	const dispatch = useDispatch();
	return (
		<div className='shopping-cart-details'>
			{shoppingCart.map((currentItem) => (
				<div className='chosen-product' key={currentItem.id}>
					<p className='chosen-product-name'>{currentItem.name}</p>
					<div className='chosen-product-update'>
						<button
							onClick={() => {
								if (currentItem.number - 1 > 0)
									dispatch(minusOneItem(currentItem.id));
							}}>
							-
						</button>
						<p className='chosen-product-number'>{currentItem.number}</p>
						<button onClick={() => dispatch(addOneItem(currentItem.id))}>
							+
						</button>
					</div>
					<p className='chosen-product-unit-price'>{currentItem.price} €</p>
					<p className='chosen-product-total-price'>
						{currentItem.price * currentItem.number} €
					</p>
					<button
						onClick={() => dispatch(deleteItemFromChart(currentItem.id))}
						style={{ width: "100px", height: "40px", fontFamily: "Eczar" }}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default CartDetails;
