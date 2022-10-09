const Purchase = ({
	score,
	setScore,
	multiplyer,
	setMultiplyer,
	shopItems,
	setShopItems,
}) => {
	const buyItem = (item) => {
		if (score < item.price) return console.log('cant afford it!');
		console.log(`purchased : ${item.name}`);
		setScore((prev) => prev - item.price);
		setMultiplyer((prev) => prev + item.multiplyer);
		item.used = true;
		setShopItems([...shopItems, item]);
	};

	return (
		<div className='multiplyer-container'>
			<ul
				style={{
					display: 'flex',
					width: '500px',
					justifyContent: 'space-around',
				}}>
				{shopItems.map((item, index) => {
					if (!item.used)
						return (
							<div key={index}>
								<li
									className={score >= item.price ? 'green' : 'red'}
									onClick={() => buyItem(item)}
									key={index}>
									{item.name} - £{item.price}
								</li>
							</div>
						);
				})}
			</ul>
		</div>
	);
};

export default Purchase;
