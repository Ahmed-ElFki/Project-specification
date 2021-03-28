import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartImg from "../res/carts.png";
import homeImg from "../res/home.png";

const CartMain = () => {
	const shoppingCart = useSelector((state) => state);

	const handleItemsCount = () => {
		let totalItemsNumber = 0;
		shoppingCart.map((currentItem) => (totalItemsNumber += currentItem.number));
		return totalItemsNumber;
	};

	return (
		<div className='cart-header'>
			<div className='cart-header-left'>
				<Link to='/'>
					<img src={homeImg} alt='home-img' style={{ paddingLeft: "5px" }} />
				</Link>
			</div>

			<div className='cart-header-right'>
				<p style={{ paddingRight: "5px" }}> ({handleItemsCount()}) item(s)</p>
				<Link to='/Cart'>
					<img
						src={cartImg}
						alt='cart-img'
						style={{
							width: "32px",
							height: "32px",
							cursor: "pointer",
						}}
					/>
				</Link>
			</div>
		</div>
	);
};

export default CartMain;
