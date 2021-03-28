import { useDispatch, useSelector } from "react-redux";
import { addItemToChart } from "../actions/actions";

const Item = ({ item }) => {
	const dispatch = useDispatch();
	const shoppingCart = useSelector((state) => state);
	let disableAddCart = false;

	const handleAdd = () => {
		const itemIndex = shoppingCart.find(
			(currentItem) => currentItem.id === item.id
		);
		itemIndex === undefined
			? dispatch(
					addItemToChart({
						id: item.id,
						name: item.name,
						price: item.price,
						number: 1,
					})
			  )
			: (disableAddCart = true);
	};

	return (
		<div className='item'>
			<p>{item.name}</p>
			<img
				src={item.image}
				alt={item.name}
				style={{ width: "200px", height: "200px" }}
			/>
			<p>{item.price} €</p>
			<div className='item-choices'>
				<button
					disabled={!item.available || disableAddCart}
					onClick={handleAdd}>
					{item.available ? "Add To Cart" : "Out Of Stock"}
				</button>
				<button>View More</button>
			</div>
		</div>
	);
};

export default Item;
