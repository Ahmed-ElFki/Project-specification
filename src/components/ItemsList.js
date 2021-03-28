import Item from "./Item";

const ItemsList = ({ items }) => {
	return (
		<div className='items-list'>
			{items.map((currentItem) => (
				<Item key={currentItem.id} item={currentItem} />
			))}
		</div>
	);
};

export default ItemsList;
