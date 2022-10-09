const ShopItem = ({ ShopItem }) => {
	return (
		<div className='shop-item'>
			<h2>{shopItem.name}</h2>
			<p>{shopItem.price}</p>
			<p>{shopItem.multiplyer}</p>
		</div>
	);
};

export default ShopItem;
